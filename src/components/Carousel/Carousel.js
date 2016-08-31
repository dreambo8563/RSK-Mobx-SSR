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
import s from './Carousel.css';
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'


@observer
class Carousel extends Component {

    componentDidMount() {
        this.startPlay()
    }

    componentWillUnmount() {
        this.destroyTimer()
    }
    @observable currentIndex = 0;

    @computed get leftValue() {
        // 400 is the width of the visible area
        return (-this.currentIndex * 400)
    }

    imgData = [
        {
            imgSrc: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png',
            alt: 'hah',
        },
        {
            imgSrc: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png',
            alt: 'hah',
        },
        {
            imgSrc: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png',
            alt: 'hah',
        },
    ]

    startPlay() {
        this.handler = setInterval(() => {
            if (this.currentIndex >= (this.imgData.length - 1)) {
                this.currentIndex = 0
            } else {
                this.currentIndex++
            }
        }, 3000)
    }
    destroyTimer() {
        window.clearInterval(this.handler)
    }
    changeImage(index) {
        this.currentIndex = index;
        this.destroyTimer();
        this.startPlay()
    }
    //     <li key={index}>
    //     <img alt={item.alt} src={item.imgSrc} />
    // </li>
    imgRender() {
        return this.imgData.map((item, index) => {
            const child = this.props.children && React.cloneElement(
                this.props.children,
                { key: index }
            );
            return child
        })
    }

    dotRender() {
        return this.imgData.map(
            (item, index) => (
                <li
                    key={index}
                    onClick={() => this.changeImage(index) }
                    className={index === this.currentIndex ? s.active : ''}>
                </li>
            ))
    }
    render() {
        return (
            <div className={s.wrap} >
                <ul className={s.list} style={{ left: this.leftValue }}>
                    { this.imgRender() }
                </ul>
                <ul className={s.btn} >
                    {this.dotRender() }
                </ul>
            </div >
        );
    }
}

Carousel.propTypes = {
    children: PropTypes.element,
};

export default withStyles(s)(Carousel);
