/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Contact.css'
import { observer } from 'mobx-react'


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
class Contact extends React.Component {
    componentWillMount () {
    this.context.setTitle(title);
  }
    render() {
        return (<span>Seconds passed: { this.props.timerData.secondsPassed } </span>)
    }
}

Contact.propTypes = {
  timerData: PropTypes.object.isRequired,
};

Contact.contextTypes = {
  setTitle: PropTypes.func.isRequired,
};

export default withStyles(s)(Contact);
