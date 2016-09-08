
import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react'

export const tabelHelper = Target =>
    @observer class ComposedComponent extends Component {
    static propTypes = {
        children: PropTypes.oneOfType(
            [
                PropTypes.element,
                PropTypes.array,
            ]),
        className: PropTypes.string,
        data: PropTypes.array.isRequired,
    };
    render() {
        const { className, children } = this.props
        return (
            <table className={className}>
                <thead>
                    <tr>
                        {children}
                    </tr>
                </thead>
                <tbody >
                    {this.props.data.map((item, index) => (<Target item={item} key={index} />)) }
                </tbody>
            </table>
        )
    }
}
