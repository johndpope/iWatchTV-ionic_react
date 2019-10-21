import React from 'react'
import propTypes from 'prop-types';

export const VideoPlayer = (props) => {
    let id = props.id

    return (
        <div style={{ height: 300, width: '100%' }}>
            <iframe title={id} src={''} />
        </div>
    )
}

VideoPlayer.propTypes = {
    id: propTypes.string.isRequired
}