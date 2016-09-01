/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import ExcelTable from './../../components/ExcelTable/ExcelTable'
// import SimpleChartComponent from './../../components/Chart/Chart'

// import Content from './Content';
// import fetch from '../../core/fetch';

export default {

  path: '/content',

  async action(context) { // eslint-disable-line react/prop-types
    // const resp = await fetch('/graphql', {
    //   method: 'post',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     query: `{content(path:"${path}"){path,title,content,component}}`,
    //   }),
    //   credentials: 'include',
    // });
    // if (resp.status !== 200) throw new Error(resp.statusText);
    // const { data } = await resp.json();
    // if (!data || !data.content) return undefined;
    console.log('before require');
    try {
      var SimpleChartComponent = await new Promise((resolve) => {
        require.ensure([], (require) =>
          resolve(require('./../../components/Chart/Chart').default));
      });

      // the config structure for the excel
      var config = {
        type: 'vertical', // horizontal
        data: [
          { header: 'aaa', value: [1, 2, 3, 4, 5, 6, 6, 6, 6] },
          { header: 'aaa', value: [1, 2, 3, 4, 5, 6, 6, 6, 6] },
        ],
      }
    } catch (e) {
      console.log(context)
      console.log(e)
    }
    return (<div >
      <SimpleChartComponent />
      <ExcelTable data={config} />
    </div >);
    // const ExcelTable = await new Promise((resolve) => {
    //   require.ensure([], (require) =>
    //     resolve(require('./../../components/ExcelTable/ExcelTable').default));
    // });

  },

};
