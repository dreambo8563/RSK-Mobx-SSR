import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

export const dropDownMenu = PopComponent =>
    Target =>
    @observer class DropDownMenuDecorator extends Component {
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
