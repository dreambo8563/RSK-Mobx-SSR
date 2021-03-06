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
// import fetch from '../../core/fetch';
import { userInfo } from './../../models/UserInfo'
// import { updateStore } from './../../models/syncStore'
import { httpGetJSON } from './../../core/HTTPUtils'


export default {

  path: '/',

  async action() {
    const Home = await new Promise((resolve) => {
      require.ensure([], (require) => resolve(require('./Home').default));
    });
    // avoid the duplicated requrest from client
    // console.log('synced', !!userInfo.synced)
    if (!userInfo.synced) {
      // const resp = await fetch('http://jsonplaceholder.typicode.com/posts',
      //   {
      //     method: 'get',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //     },
      //   });
      // console.log('browser', process.env.BROWSER);
      // const data = await resp.json();

      const data = await httpGetJSON('http://jsonplaceholder.typicode.com/posts');
      // console.log(data)
      userInfo.news = Array.from(data)
      // make it available to client side when state sync
      // updateStore({ userInfo })
      // console.log(userInfo.news)
      if (!data) throw new Error('Failed to load the news feed.');
    }

    // recover the noFetch status
    userInfo.syncRecover();

    // to reproduce the warning
    // userInfo.fetchNews();

    return <Home data={userInfo.news} />;
  },

};
