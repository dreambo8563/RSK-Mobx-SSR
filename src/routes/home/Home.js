/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import { observer, propTypes } from 'mobx-react'
import { userInfo } from './../../models/UserInfo'
// import { syncStoreStates } from './../../models/syncStore';

const title = 'React Starter Kit';

// function Home({ news }, context) {
//   context.setTitle(title);
//   return (
//     <div className={s.root}>
//       <div className={s.container}>
//         <h1 className={s.title}>React.js News</h1>
//         <ul className={s.news}>
//           {news.map((item) => (
//             <li key={item.id} className={s.newsItem}>
//               <a href={item.link} className={s.newsTitle}>{item.title}</a>
//               <span className={s.newsDesc} >
//                 {item.body}
//               </span>
//             </li>
//           ))
//           }
//         </ul>
//       </div>
//     </div>
//   );
// }


@observer
class Home extends Component {
  static propTypes = {
    data: propTypes.arrayOrObservableArray,
  }
  componentWillMount() {
    this.context.setTitle(title);
    console.log(userInfo.news)
  }
  // componentDidMount() {
  //   console.log(userInfo.news)
  // }

  delete(id) {
    console.log('delete', id)
    userInfo.deleteNewsById(id);
  }
  render() {
    const { data } = this.props
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>React.js News</h1>
          <ul className={s.news}>
            {data.map((item) => (
              <li key={item.id} className={s.newsItem}>
                <a href={item.link} className={s.newsTitle}>{item.title}</a>
                <span className={s.newsDesc} >
                  {item.body}
                </span>
                <button onClick={() => this.delete(item.id) }>delete this one </button>
              </li>
            ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

// Home.propTypes = {
//   news: propTypes.arrayOrObservableArray,
// };
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
