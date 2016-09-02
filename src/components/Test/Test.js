
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
