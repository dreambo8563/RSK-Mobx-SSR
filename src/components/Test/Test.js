
import React, { Component, PropTypes } from 'react';
import Navigation from './../ComposedComponent/Navigation/Navigation'
import BaseButton from './../BaseComponent/BaseButton/BaseButton'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Test.css'
import Container from './../BaseComponent/Container/Container'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

const xClass = {
    width: '100px',
    height: '200px',
    color: 'red',
}

const itemClass = {
    color: 'blue',
}

const config = {
    cc: 'ddd',
}

@observer
class Test extends Component {
    @observable selectedIndex = 0
    @observable tabContent = (<div></div>)
    output() {
        this.selectedIndex = 0
        this.contentRender()
    }
    output1() {
        this.selectedIndex = 1
        this.contentRender()
    }
    contentRender() {
        switch (this.selectedIndex) {
            case 0: this.tabContent = (<h1>0000</h1>); break
            case 1: this.tabContent = (<h1>11111</h1>); break
            default: this.tabContent = (<h1>4444</h1>); break
        }
    }
    render() {
        return (
            <div>
                <Navigation className={s.good}>
                    <BaseButton onClick={:: this.output}>US</BaseButton>
                    <BaseButton className={s.bad} onClick={:: this.output1}>CN</BaseButton >
                    <BaseButton>UK</BaseButton>
                 </Navigation >
                 <Container className={s.container}>
                     {this.tabContent }
                 </Container>
            </div >
        )
    }
}

export default withStyles(s)(Test)
