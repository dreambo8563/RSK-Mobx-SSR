/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Tabs.css';
// import Link from '../Link'
// import history from './../../core/history'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { httpGetJSON } from './../../core/HTTPUtils'

@observer
class Tabs extends Component {

    componentDidMount() {
        this.selectedIndex = this.props.selectedTab || this.selectedIndex
        this.getTabData(this.config[this.selectedIndex].navAPI)
        console.log(this.props.children)
    }
    getTabData(api) {
        httpGetJSON(api)
            .then(data => {
                this.tabContent = data;
            })
    }
    @observable selectedIndex = 0;
    @observable tabContent = undefined
    config = [
        { navText: 'A', navLink: 'name', navAPI: 'http://jsonplaceholder.typicode.com/posts/1' },
        { navText: 'B', navLink: 'B', navAPI: 'http://jsonplaceholder.typicode.com/posts/2' },
        { navText: 'C', navLink: 'C', navAPI: 'http://jsonplaceholder.typicode.com/posts/3' },
    ]
    navRender() {
        return this.config.map(
            (item, index) => <div
                className={s.tabItem}
                key={index}
                onClick={() => this.getTabData(item.navAPI) }
                to = { item.navLink } >
                { item.navText }
            </div>)
    }
    render() {
        const child = this.props.children && React.cloneElement(
            this.props.children,
            { data: this.tabContent }
        );
        return (
            <div>
                <nav>
                    {this.navRender() }
                </nav>
                <section>
                    {child}
                </section>
            </div>
        );
    }
}
Tabs.propTypes = {
    selectedTab: PropTypes.string,
    children: PropTypes.element,
};

export default withStyles(s)(Tabs);