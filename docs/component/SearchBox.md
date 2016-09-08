## 基本需求
- 一个input 输入搜索关键词
- 一个button 进入其他搜索结果页面
- 输入过程显示部分搜索结果

### 利用现有基本组建可以合成

### 实例

```js

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

```

>注意：这里对e.target做了异步操作，所以必须加persist方法，否则error