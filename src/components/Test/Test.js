
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Test.css'
import { httpGetJSON } from './../../core/HTTPUtils';
import { observer } from 'mobx-react'
import { observable } from 'mobx';


@observer
class Test extends Component {
    async componentDidMount() {
        const data = await httpGetJSON('http://jsonplaceholder.typicode.com/posts');
        this.content = Array.from(data)
    }
    @observable content = []
    contentRender() {
        return this.content.map((item, index) => <div key={index}>{item.title}</div>)
    }

    render() {
        return (
            <div>
                { this.contentRender() }
            </div>

        );
    }
}

export default withStyles(s)(Test)
