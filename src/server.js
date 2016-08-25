/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import 'babel-polyfill';
import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';
// import expressGraphQL from 'express-graphql';
import jwt from 'jsonwebtoken';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './components/Html';
import { ErrorPage } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import UniversalRouter from 'universal-router';
import PrettyError from 'pretty-error';
// import passport from './core/passport';
// import models from './data/models';
// import schema from './data/schema';
import routes from './routes';
import assets from './assets'; // eslint-disable-line import/no-unresolved
import { port, auth } from './config';

// import { getToken } from './core/token';
import { userInfo } from './data/models/UserInfo'


const app = express();


//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// Authentication
// -----------------------------------------------------------------------------
app.use(expressJwt({
    secret: auth.jwt.secret,
    credentialsRequired: false,
    getToken: req => req.cookies.id_token,
}));
// app.use(passport.initialize());


app.post('/signup', (req, res) => {
    // console.log(req.body)
    // TODO: send the body to server and fetch userInfo
    const userinfo = {
        id: '1111',
        name: 'testName',
        userPreviligy: 'admin',
    }

    // const expiresIn = 60; // 180 days
    const expiresIn = 60 * 60 * 24 * 180; // 180 days
    const token = jwt.sign(userinfo, auth.jwt.secret, { expiresIn });

    //  TODO: store the {userId,token} in redis
    //  set token in cookies
    res.cookie('id_token', token,
        {
            expires: new Date(Date.now() + 900000),
            maxAge: 1000 * expiresIn,
            httpOnly: true,
        });
    res.redirect('/');
})

app.use((req, res, next) => {
    if (!!req.user) {
        // get userInfo
        userInfo.update({ ...req.user, authorize: true })
// console.log('set this.state', userInfo.id)
next()
    } else {
    // no token for this user
    next()
}
})

// app.get('/login/facebook/return',
//     (req, res) => {
//         const expiresIn = 60 * 60 * 24 * 180; // 180 days
//         const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
//         res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
//         res.redirect('/');
//     }
// );

//
// Register API middleware
// -----------------------------------------------------------------------------
// app.use('/graphql', expressGraphQL(req => ({
//   schema,
//   graphiql: true,
//   rootValue: { request: req },
//   pretty: process.env.NODE_ENV !== 'production',
// })));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
    // console.log('render req user', req.user);
    try {
        let css = new Set();
        let statusCode = 200;
        const scripts = (Object.keys(assets)).map(key => assets[key]);
        const data = {
            title: '',
            description: '',
            style: '',
            script: scripts.map(key => key.js),
            children: '',
        };

        await UniversalRouter.resolve(routes, {
            path: req.path,
            query: req.query,
            context: {
                insertCss: (...styles) => {
                    styles.forEach(style => css.add(style._getCss())); // eslint-disable-line no-underscore-dangle, max-len
                },
                setTitle: value => (data.title = value),
                setMeta: (key, value) => (data[key] = value),
            },
            render(component, status = 200) {
                css = new Set();
                statusCode = status;
                data.children = ReactDOM.renderToString(component);
                data.style = [...css].join('');
                return true;
            },
        });
        // console.log(JSON.stringify(userInfo), 'before embem in html');
        const html = ReactDOM.renderToStaticMarkup(<Html
            {...data } store={JSON.stringify(userInfo) }
            />);

        res.status(statusCode); res.send(`<!doctype html>${html}`);
    } catch (err) {
        next(err);
    }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError(); pe.skipNodeFiles(); pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    console.log(pe.render(err)); // eslint-disable-line no-console
    const statusCode = err.status || 500;
    const html = ReactDOM.renderToStaticMarkup(<Html
        title="Internal Server Error"
        description={ err.message }
        style={ errorPageStyle._getCss() } > {
            ReactDOM.renderToString(
                <ErrorPage error={ err } />)
        }
    </Html>
    );
    res.status(statusCode);
    res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */

app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
});

                /* eslint-enable no-console */
