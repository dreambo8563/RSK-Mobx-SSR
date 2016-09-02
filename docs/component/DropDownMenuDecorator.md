## 针对特定文字或者button
当mouseover的时候会展示一定的悬浮内容

## 需要两个组建配合
 - 被hover的文字或者button
 - 需要展示的内容组建

 ## 实例

 ```js

import React, { Component, PropTypes } from 'react';
import { dropDownMenu } from './../DecoratorHelper/DropDownMenuDecorator/DropDownMenuDecorator'

class DropContent extends Component {
    render() {
        return <div>pop area</div>;
    }
}

@dropDownMenu(DropContent)
class DropDownButton extends Component {
    static propTypes = {
        children: PropTypes.any,
    };
    render() {
        const { ...prop } = this.props
        return (<div {...prop}>HOC button
            {this.props.children}
        </div>);
    }
}


export default DropDownButton
 ```