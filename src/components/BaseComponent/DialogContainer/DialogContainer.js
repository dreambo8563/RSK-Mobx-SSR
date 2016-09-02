import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DialogContainer.css';
import cx from 'classnames'

class DialogContainer extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.any,
        onClose: PropTypes.func,
    }
    render() {
        const { className, onClose, children, ...prop } = this.props
        return (
            <div className={cx(className, s.container) } {...prop}>
                <div onClick={onClose} className={s.closeBtn}>X</div>
                {children}
            </div>
        );
    }
}

export default withStyles(s)(DialogContainer);
