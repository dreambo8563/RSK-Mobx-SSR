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
import { setToken } from './../../core/token'

export default {

  path: '/',

  async action() {
    const Home = await new Promise((resolve) => {
      require.ensure([], (require) => resolve(require('./Home').default));
    });

    const resp = await fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await resp.json();
    setToken(data);
    if (!data) throw new Error('Failed to load the news feed.');
    return <Home news={data} />;
  },

};
