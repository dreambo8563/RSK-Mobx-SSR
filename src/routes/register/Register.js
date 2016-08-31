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
import { observer } from 'mobx-react'
import Carousel from './../../components/Carousel/Carousel'

const title = 'New User Registration';


@observer
class Register extends Component {
  componentWillMount() {
    this.context.setTitle(title);
  }

  render() {
    return (
      <div>
        <Carousel>
          <h1 style={{ width: '400px' }}>hah</h1>
        </Carousel>
      </div>
    );
  }
}

Register.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Register);
