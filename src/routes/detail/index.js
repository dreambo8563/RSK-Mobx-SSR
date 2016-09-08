/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
// import Login from './Login';
import { updateStore } from './../../models/syncStore'
import { userInfo } from './../../models/UserInfo'

export default {

  path: '/detail/:id',

  async action(context) {
    const Detail = await new Promise((resolve) => {
      require.ensure([], (require) => resolve(require('./Detail').default));
    });
    // updateStore({ userInfo })
    // userInfo.noFetch = false;
    return (<div>
      <Detail id={context.params.id} />
    </div>);
  },

};
