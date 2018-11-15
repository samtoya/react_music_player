import React from 'react'
import PropTypes from 'prop-types'
import aftownDefault from './../images/default.png';
// import artDefault from './../images/art-default.png'
// import logoIcon from './../images/logo_icon.png'

const Artwork = (props) => {
    const artworkURI = "//artworks.aftownmusic.com";
    
    const styles = {
        width: '50px',
        height: '50px'
    };

    return (
        <img src={aftownDefault}
            width={styles.width} height={styles.height} id="artwork"
            alt="" className="art" />
    )
}

Artwork.propTypes = {
    required: PropTypes.object,
}

export default Artwork;