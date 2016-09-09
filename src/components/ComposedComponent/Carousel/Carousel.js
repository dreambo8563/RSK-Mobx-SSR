
import React, { Component, PropTypes } from 'react';
// import Navigation from './../ComposedComponent/Navigation/Navigation'
// import BaseButton from './../BaseComponent/BaseButton/BaseButton'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Carousel.css'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'
import cx from 'classnames'

@observer
class Carousel extends Component {

    static propTypes = {
        children: PropTypes.oneOfType(
            [
                PropTypes.element,
                PropTypes.array,
            ]).isRequired,
    };
    componentDidMount() {
        this.contentDimension.width = this.refs.content0.getBoundingClientRect().width
        this.contentDimension.height = this.refs.content0.getBoundingClientRect().height
        this.startPlay();
    }

    componentWillUnmount() {
        this.destroyTimer()
    }
    @observable currentIndex = 0;
    @observable contentDimension = { width: 0, height: 0 }

    @computed get leftValue() {
        // 400 is the width of the visible area
        return (-this.currentIndex * this.contentDimension.width)
    }
    cloneWithState(element, index) {
        return React.cloneElement(
            element,
            { key: index, ref: `content${index}`, style: { float: 'left' } }
        );
    }
    startPlay() {
        this.handler = setInterval(() => {
            if (this.currentIndex >= (React.Children.count(this.props.children) - 1)) {
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
    dotRender() {
        return React.Children.map(this.props.children,
            (item, index) => (
                <li
                    key={index}
                    onClick={() => this.changeIndex(index) }
                    className={index === this.currentIndex ? cx(s.dot, s.active) : s.dot}>
                </li>
            ))
    }
    contentRender() {
        return this.props.children && React.Children.map(this.props.children, this.cloneWithState);
    }

    render() {
        const { children } = this.props
        return (
            <div
                style={{ width: this.contentDimension.width, height: this.contentDimension.height }}
                className={s.wrapper}>
                <div
                    style={{
                        width: this.contentDimension.width * React.Children.count(children),
                        height: this.contentDimension.height, marginLeft: this.leftValue,
                    }}
                    className={s.content}>

                    {this.contentRender() }
                </div>

                <div className={s.dotSection}>
                    {this.dotRender() }
                </div>

            </div >

        )
    }
}

export default withStyles(s)(Carousel)

