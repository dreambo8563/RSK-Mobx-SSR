
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Test.css';
import Container from './../BaseComponent/Container/Container';
import BaseButton from './../BaseComponent/BaseButton/BaseButton';
import cx from 'classnames';
import { observable,toJS } from 'mobx';
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

// export default withStyles(s)(SearchBox)

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
@observer
export default class SimpleLineChart extends Component {

  componentDidMount() {
    this.data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];
  }
  @observable data = []
  render() {
    return (
      <LineChart
        width={600}
        height={300}
        data={toJS(this.data) }
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
