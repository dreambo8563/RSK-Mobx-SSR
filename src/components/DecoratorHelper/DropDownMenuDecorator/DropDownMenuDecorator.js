import React, { Component } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './DropDownMenu.css';
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'


export const dropDownMenu = PopComponent =>
    Target =>
    @observer class ComposedComponent extends Component {
        @observable show = false;

        @action
        showMenu() {
            this.show = true
        }
        @action
        hideMenu() {
            this.show = false
        }
        render() {
            return (
                <Target
                    onMouseOver={::this.showMenu}
        onMouseLeave = {::this.hideMenu } >
        { this.show ? <PopComponent /> : undefined }
            </Target >
        )
        }
    }


