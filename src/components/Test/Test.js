
import React, { Component, PropTypes } from 'react';
// import Navigation from './../ComposedComponent/Navigation/Navigation'
// import BaseButton from './../BaseComponent/BaseButton/BaseButton'
// import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Test.css'
import { dialog } from './../DecoratorHelper/DialogDecorator/DialogDecorator'


@dialog(s.container)
class Test extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
    }
    render() {
        return (
            <div>
                <input onChange={:: this.props.onClose} type ="text" />
                <input type="text" />
            </div >
        )
    }
}

export default Test

