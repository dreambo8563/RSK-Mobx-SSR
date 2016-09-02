import React, { Component, PropTypes } from 'react';
import DialogContainer from './../../BaseComponent/DialogContainer/DialogContainer'
import Overlay from './../../BaseComponent/Overlay/Overlay'
import { observer } from 'mobx-react'

export const dialog = constainerClass =>
    Target =>
    @observer class ComposedComponent extends Component {
        static propTypes = {
            onClose: PropTypes.func,
        }
        render() {
            return (
                <div>
                    <Overlay />
                    <DialogContainer onClose={:: this.props.onClose} className={constainerClass}>
                    <Target onClose={:: this.props.onClose} />
                    </DialogContainer>
                </div >
            )
    }
}
