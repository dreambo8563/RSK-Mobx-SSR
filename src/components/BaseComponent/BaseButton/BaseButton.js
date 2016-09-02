import React, { Component } from 'react';

class BaseButton extends Component {
    render() {
        const { ...prop } = this.props
        return (
            <button {...prop} >
            </button>
        );
    }
}

export default BaseButton;
