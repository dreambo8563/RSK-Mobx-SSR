/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import Contact from './Contact';
import { observable } from 'mobx';

export default {

  path: '/contact',

  async action() {
    const Contact = await new Promise((resolve) => {
      require.ensure([], (require) => resolve(require('./Contact').default));
    });
    const timerData = observable({
    secondsPassed: 0,
})

setInterval(() => {
    timerData.secondsPassed++
}, 1000)
    return <Contact timerData={timerData} />;
  },

};
