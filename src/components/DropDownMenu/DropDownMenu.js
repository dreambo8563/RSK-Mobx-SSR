/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DropDownMenu.css';
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class DropDownMenu extends Component {
    @observable show = false;
    showMenu() {
        this.show = true
    }
    hideMenu() {
        this.show = false
    }
    render() {
        return (
            <div
                onMouseOver={::this.showMenu}
    onMouseLeave = {::this.hideMenu }
    className = { s.dropDownButton } >
    dropDown
                { this.show ? (<div className={s.menuContent}>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</div>) : undefined
}
            </div >
        );
    }
}

export default withStyles(s)(DropDownMenu);
