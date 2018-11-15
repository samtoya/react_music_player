import React from 'react'
import PropTypes from 'prop-types'

const ArtistTitle = (props) => {
    return (
        <div className="artist-name ellipsis-one-line">
            <a id="name">
                Joe Mettle
            </a>
        </div>
    )
}

ArtistTitle.prototype = {
    required: PropTypes.string,
}

export default ArtistTitle;