import React from 'react';
import aftownDefault from './../../images/default.png';
import aftownIcon from './../../svg/logo.svg';
// import artDefault from './../images/art-default.png'
// import logoIcon from './../images/logo_icon.png'

const Playlist = () => (
    <div className="playlist-wrapper" id="playlist-container">
        <div className="playlist-header">
            <h4><i className="icon-playlist"></i> Queue</h4>
            <div className="options">
                <a id="shuffle"><i className="control icon-shuffle"></i> Shuffle</a>
            </div>
        </div>

        <div className="playlist-body">
            <div className="playlist-tracks">
                <div className="empty">
                    <img src={aftownIcon} alt="" />
                    <p>
                        no song here <br />
                        time to get creative
                    </p>
                </div>
                {/* <div className="track">
                    <div className="artwork">
                        <img src={aftownDefault} alt="" />
                        <div className="overlay hide">
                            <i className="control icon-volume-2"></i>
                            <i className="icon-control-play"></i>
                            <i className="icon-control-pause"></i>
                            <div className="mask"></div>
                        </div>
                    </div>
                    <div className="track-details ellipsis-one-line">
                        <div className="song-title ellipsis-one-line">
                            <a>Dede (ft. Kelvynboy & King Promise)</a>
                        </div>
                        <div className="artist-info">
                            by <span className="artist-name">
                                <a>Stonebwoy</a>        
                            </span>
                        </div>
                    </div>
                    <div className="options">
                        <a>
                            <i className="icon-options"></i>
                        </a>

                        <div className="options-wrapper">
                            <div className="header">
                                <div className="artwork">
                                    <img src={aftownDefault} alt="" 
                                        className="art" />
                                </div>
                                <div className="track-details">
                                    Dede (ft. Kelvynboy &amp; King Promise) <br />
                                    by <span className="artist-name">
                                            <a>Stonebwoy</a>        
                                        </span>
                                </div>
                            </div>

                            <ul className="options-list">
                                <li>
                                    <a>
                                        <i className="icon-link"></i>
                                        get song
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="icon-info"></i>
                                        view in album
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="icon-share"></i>
                                        share
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="icon-heart"></i>
                                        love
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <i className="icon-trash"></i>
                                        remove from queue
                                    </a>
                                </li>
                            </ul>    
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
)

export default Playlist