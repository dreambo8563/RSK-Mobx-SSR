/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import React, { Component, PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Test.css';
// // import Link from '../Link'
// // import history from './../../core/history'
// import { observer } from 'mobx-react'

// @observer
// class Test extends Component {
//     render() {
//         return (
//             <div className={s.good}>
//                 <div className={s.bad}>test info</div>
//                 {JSON.stringify(this.props) }
//             </div>
//         );
//     }
// }
// Test.propTypes = {
//     data: PropTypes.any,
// };

// export default withStyles(s)(Test);

import React, { Component, PropTypes } from 'react';
import { dropDownMenu } from './../DecoratorHelper/DropDownMenuDecorator/DropDownMenuDecorator'

class DropDownButton extends Component {
    static propTypes = {
        children: PropTypes.any,
    };
    render() {
        const { ...prop } = this.props
        return (<div {...prop}>HOC button
            {this.props.children}
        </div>);
    }
}

class DropContent extends Component {
    render() {
        return <div>pop area</div>;
    }
}

export default dropDownMenu(DropContent)(DropDownButton)
