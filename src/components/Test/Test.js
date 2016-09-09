
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Test.css';
import Container from './../BaseComponent/Container/Container';
import BaseButton from './../BaseComponent/BaseButton/BaseButton';
import cx from 'classnames';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { httpGetJSON } from './../../core/HTTPUtils';


class TableItem extends Component {
    static propTypes = {
        item: PropTypes.object,
    }
    render() {
        const { title, id, userId } = this.props.item
        return (
            <div>
                <div className={cx(s.inlineBlock, s.red) }>{title}</div>
                <div className={cx(s.inlineBlock, s.gray) }>{id}</div>
                <div className={cx(s.inlineBlock, s.green) }>{userId}</div>
            </div>
        );
    }
}


@observer
class SearchBox extends Component {

    async getResult(e) {
        if (typeof parseInt(e.target.value, 10) === 'number') {
            e.persist()
            const data = await httpGetJSON('http://jsonplaceholder.typicode.com/posts')
            this.result = Array.from(data).slice(0, parseInt(e.target.value, 10))
        }
    }

    @observable result = [];
    render() {
        return (
            <Container>
                <Container className={s.SearchSection}>
                    <input onInput={(e) => this.getResult(e) } type ="text" />
                    <BaseButton>Search</BaseButton>
                </Container>
                {this.result.length > 0 ? <Container className={cx(s.SearchSection) }>
                    {this.result.map((item, index) => <TableItem key={index} item={item} />) }
                </Container> : undefined}
            </Container>

        );
    }
}

export default withStyles(s)(SearchBox)
