/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.css';

const title = 'New User Registration';


class Register extends Component {
  componentWillMount() {
    this.context.setTitle(title);
  }
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }
}

Register.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Register);
