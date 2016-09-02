import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Overlay.css';

class Overlay extends Component {
    render() {
        return (
            <div className={s.overlay}>
            </div >
        );
    }
}

export default withStyles(s)(Overlay);
