
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Test.css'
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

export default withStyles(s)(TableItem)
