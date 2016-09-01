import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './ExcelTable.css'

class ExcelTable extends Component {
    render() {
        const { type, data } = this.props.data;
        return (
            <div className={type === 'vertical' ? s.vertical : s.horizontal}>
                {data.map(
                    (item, index) => (
                        <div
                            key={index}
                            className={s.table}>
                            <div
                                className={s.header} >
                                {item.header}
                            </div>
                            {item.value.map(
                                (itemer, indexer) => (
                                    <div
                                        className={s.number}
                                        key={indexer}>{itemer}
                                    </div>
                                )) }
                        </div>)) }
            </div>
        )
    }
}

ExcelTable.propTypes = {
    data: PropTypes.object,
};

export default withStyles(s)(ExcelTable);

