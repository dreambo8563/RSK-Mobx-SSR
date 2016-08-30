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
import s from './Detail.css';
import { userInfo } from './../../models/UserInfo'

const title = 'Detail page with params';

class Detail extends Component {

  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  };

  static propTypes = {
    id: PropTypes.string,
  };

  componentWillMount() {
    this.context.setTitle(title);
  }
  postTest() {
    console.log('post test now')
  }
  preventForm() {
    // e.preventDefault();
  }
  render() {
    return (
      <div>
        this is the params got from path {this.props.id}
        <form ref="myForm" action="/signin" method="post">
          <label>name: </label>
          <input name="name" />
          <label>password: </label>
          <input type="password" name="pwd" />
          <button onClick={:: this.preventForm} type="submit">submit</button>
        </form>
      <button onClick={:: this.postTest}>POST test</button >
        { userInfo.loginErr ? 'error here' : 'no error' }
      </div >
    );
  }

}

export default withStyles(s)(Detail);
