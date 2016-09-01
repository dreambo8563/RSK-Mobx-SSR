/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Contact from './Contact';
import DropDownMenu from './../../components/DropDownMenu/DropDownMenu'
import Tabs from './../../components/Tabs/Tabs'
import Test from './../../components/Test/Test'
import { testInstance } from './../../models/testModel'
import { updateStore } from './../../models/syncStore'

export default {

  path: '/contact',

  // async action() {
  //   const Contact = await new Promise((resolve) => {
  //     require.ensure([], (require) => resolve(require('./Contact').default));
  //   });


  //   return <Contact />;
  // },
  async action({ next }) {
    const component = await next();
    return component;
  },
  children: [
    {
      path: '/', // Same as /parent
      action: () => <Contact />,
    },
    {
      path: '/name',
      action: () => {
        updateStore({ testInstance })
        testInstance.noFetch = false;
        // console.log(context.query.tab, 'in name router')
        return (
          <div>
            <h1>good</h1>
            <DropDownMenu>

              <h1>good</h1>


            </DropDownMenu>
            <Tabs>
              <Test />
              <Test />
              <Test />
            </Tabs>
          </div >
        )
      },
    },
  ],

};
