/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import Home from './Home';
import fetch from '../../core/fetch';
import { userInfo } from './../../data/models/UserInfo'


export default {

  path: '/',

  async action() {
    const Home = await new Promise((resolve) => {
      require.ensure([], (require) => resolve(require('./Home').default));
    });
    // avoid the duplicated requrest from client
    if (userInfo.news.length === 0) {
      const resp = await fetch('http://jsonplaceholder.typicode.com/posts',
        {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
      console.log('browser', process.env.BROWSER);
      const data = await resp.json();
      userInfo.news = data;

      if (!data) throw new Error('Failed to load the news feed.');
    }

    // to reproduce the warning
    // userInfo.fetchNews();

    return <Home />;
  },

};
