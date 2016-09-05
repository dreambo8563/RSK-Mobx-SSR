import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class ImageContainer extends Component {

    static propTypes = {
        imageUrl: PropTypes.string,
        href: PropTypes.string,
    };

    @observable imageStatus = null

    handleImageLoaded() {
        this.imageStatus = 'loaded'
    }

    handleImageErrored() {
        this.imageStatus = 'failed to load'
    }

    render() {
        const { href, ...prop } = this.props
        return (
            <a href={href} style={{ display: 'inline-block' }}>
                <img
                    role="presentation"
                    onLoad={:: this.handleImageLoaded}
                onError = {:: this.handleImageErrored }
                {...prop}
                />
            </a>

        );
    }
}
export default ImageContainer;
