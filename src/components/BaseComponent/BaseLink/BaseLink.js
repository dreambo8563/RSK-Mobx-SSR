import React, { PropTypes, Component } from 'react';

class BaseLink extends Component {
    static propTypes = {
        to: PropTypes.string.isRequired,
        onClick: PropTypes.func,
    };
    render() {
        const { to, ...prop } = this.props
        return (
            <a {...prop} href={to} >
            </a>
        );
    }
}

export default BaseLink;
