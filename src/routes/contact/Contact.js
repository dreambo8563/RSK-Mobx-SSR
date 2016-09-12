/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import history from './../../core/history'
import s from './Contact.css'
import Test from './../../components/Test/Test'
import Carousel from './../../components/ComposedComponent/Carousel/Carousel'
import { observer } from 'mobx-react'
import { testInstance } from './../../models/testModel'


const title = 'Contact Us'

// function Contact (props, context) {
//   context.setTitle(title)
//   return (
//     <div className={s.root}>
//       <div className={s.container}>
//         <h1>{title}</h1>
//         <input>
//         </input>
//       </div>
//     </div>
//   )
// }

// Contact.contextTypes = { setTitle: PropTypes.func.isRequired }

@observer
class Contact extends Component {

  componentWillMount() {
    this.context.setTitle(title);
  }

  componentDidMount() {
    // testInstance.count();
    this.unlisten = history.listenBefore((location) => {
      console.log(location)
      if (location.pathname !== '/contact') {
        return 'Are you sure you want to leave this page?'
      }
      return true
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  render() {
    return (
      <Carousel >
        <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" alt="dd" />
        <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" alt="dd" />
        <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" alt="dd" />
        <img src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" alt="dd" />
      </Carousel>
    )
  }
}

Contact.propTypes = {
  data: PropTypes.object,
};

Contact.contextTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default withStyles(s)(Contact);
