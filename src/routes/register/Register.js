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
import { observable } from 'mobx'
import cx from 'classnames'

const title = 'New User Registration';
const imgData = [
  {
    imgSrc: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png',
    alt: 'hah',
  },
  {
    imgSrc: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png',
    alt: 'hah',
  },
  {
    imgSrc: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png',
    alt: 'hah',
  },
]

@observer
class Register extends Component {


  componentWillMount() {
    this.context.setTitle(title);
  }
  componentDidMount() {
    this.handle = setInterval(() => {
      if (this.currentIndex >= 2) {
        this.currentIndex = 0
      } else {
        this.currentIndex++
      }
    }, 8000)
  }

  componentWillUnmount() {
    window.clearInterval(this.handle)
  }
  @observable currentIndex = 0;

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <div className={s.carousel}>
            {imgData.map(
              (item, index) =>
                <img
                  className={
                    this.currentIndex === index ? cx(s.current, s.defaultImg) : cx(s.defaultImg)
                  }
                  key={index} src={item.imgSrc}
                  alt={item.alt} />)
            }
          </div>
        </div>
      </div>
    );
  }
}

Register.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Register);
