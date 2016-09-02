import React, { Component, PropTypes } from 'react';

class Navigation extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.oneOfType(
            [
                PropTypes.element,
                PropTypes.array,
            ]).isRequired,
    }
    render() {
        const { className, children, ...prop } = this.props
        return (
            <div className={className} {...prop}>
                {children}
            </div>
        );
    }
}

export default Navigation
