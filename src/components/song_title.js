import React from 'react';
import PropTypes from 'prop-types'

const SongTitle = (props) => {
    return (
        <div className="song-title ellipsis-one-line">
            <a id="title">Boo No Ni</a>
        </div>
    )
};

SongTitle.prototype = {
    required: PropTypes.string,
}

export default SongTitle;