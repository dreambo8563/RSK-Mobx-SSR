/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Navigation.css'
import Link from '../Link'

import history from './../../core/history'


class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  }

  jump() {
    history.push('/detail/gogogogo')
  }
  render() {
    const { className } = this.props
    return (
      <div className={cx(s.root, className) } role="navigation">
        <Link className={s.link} to="/about"> About
        </Link>
        <Link className={s.link} to="/contact"> Contact
        </Link>
        <Link className={s.link} to="/detail/88"> Detail
        </Link>
        <div onClick={this.jump}>
          jump to "/detail/gogogogo"
        </div>
        <span className={s.spacer}>|</span>
        <Link className={s.link} to="/login"> Log in
        </Link>
        <Link className={s.link} to="/contact/name"> contact Name
        </Link>
        <span className={s.spacer}>or</span>
        <Link className={cx(s.link, s.highlight) } to="/register"> Sign up
        </Link>
      </div>
    )
  }
}

export default withStyles(s)(Navigation)
