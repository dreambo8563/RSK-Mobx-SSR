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
import Test from './../../components/Test/Test'
import Carousel from './../../components/ComposedComponent/Carousel/Carousel'
import ImageContainer from './../../components/BaseComponent/ImgContainer/ImgContainer'
// import ImageWithStatusText from './../../components/BaseComponent/ImgContainer/ImgContainer'

const title = 'Detail page with params';

// Test section
//---------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------

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
    // console.log('post test now')
  }
  preventForm() {
    // e.preventDefault();
    this.refs.myForm.submit()
  }
  bodyinfo = [{
    name: 'zhangsan',
    age: '18',
    address: 'beijing',
  }, {
      name: 'lisi',
      age: '18',
      address: 'beijing',
    }, {
      name: 'wangwu',
      age: '18',
      address: 'beijing',
    }]


  render() {
    return (
      <div>
        <Test items={this.bodyinfo} />
        <Carousel className={s.test}>
          <div style={{ display: 'inline-block' }}>
            <ImageContainer
            style={{ padding: '10px', margin: '20px', borderWidth: '20px' }}
              href="www.baidu.com"
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" />
          </div>

          <ImageContainer
            href="www.baidu.com"
            src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" />
          <ImageContainer
            href="www.baidu.com"
            src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" />
          <ImageContainer
            href="www.baidu.com"
            src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" />
          <ImageContainer
            href="www.baidu.com"
            src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png" />
        </Carousel>

        this is the params got from path {this.props.id}
        <form ref="myForm" action="/signin" method="post">
          <label>name: </label>
          <input name="name" />
          <label>password: </label>
          <input type="password" name="pwd" />
          <button onClick={:: this.preventForm} type ="button">submit</button>
        </form>
      <button onClick={:: this.postTest}>POST test</button >
        { userInfo.loginErr ? 'error here' : 'no error' }
      </div >
    );
  }

}

export default withStyles(s)(Detail);
