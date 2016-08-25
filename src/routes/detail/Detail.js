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

  render() {
    return (
      <div>
        this is the params got from path {this.props.id}
        <form action="/signup" method="post">
          <label>name: </label>
          <input name="name" />
          <label>password: </label>
          <input type="password" name="pwd" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }

}

export default withStyles(s)(Detail);
