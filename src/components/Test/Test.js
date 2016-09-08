
import React, { Component, PropTypes } from 'react';
import { tabelHelper } from './../DecoratorHelper/TableDecorator/TableDecorator'

@tabelHelper
class TableItem extends Component {
    static propTypes = {
        item: PropTypes.object,
    }
    render() {
        const { name, age, address } = this.props.item
        return (
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{address}</td>
            </tr>
        );
    }
}

export default TableItem
