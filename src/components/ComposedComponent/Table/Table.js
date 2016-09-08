
import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles'
// import s from './Table.css'
import { observer } from 'mobx-react'


@observer
class Table extends Component {
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
                    {this.props.data.map((item, index) => (<tr key={index}>

                        {Object.keys(item).map((itemKey, keyIndex) => (
                            <td key={keyIndex} >
                                {item[itemKey]}
                            </td>)) }
                    </tr>)) }
                </tbody>
            </table>
        );
    }
}

export default Table
