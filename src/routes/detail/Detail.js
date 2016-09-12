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
import { observable, toJS } from 'mobx'
import { observer } from 'mobx-react'
import Button from 'antd/lib/button';
import DatePicker from 'antd/lib/date-picker';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import * as ant from 'antd/dist/antd.css'
// import ImageWithStatusText from './../../components/BaseComponent/ImgContainer/ImgContainer'

const title = 'Detail page with params';

// Test section
//---------------------------------------------------------------------------------------

@observer
class SimpleLineChart extends Component {

  componentDidMount() {
    this.data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];
  }
  @observable data = []
  render() {
    return (
      <LineChart
        width={600}
        height={300}
        data={toJS(this.data)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}


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
        <SimpleLineChart />
        <DatePicker />
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
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
