import React, { Component } from 'react'
import Artwork from './artwork'
import SongTitle from './song_title'
import ArtistTitle from './artist_title'
import Playlist from './add-on/playlist'
import './../css/index.css'
// import logoIcon from './../images/logo_icon.png'
import aftownWhiteIcon from '../svg/aftown-icon-white.svg'
import axios from 'axios'

class Player extends Component {
    constructor(props, state) {
        super(props, state);

        this.audio = new Audio();

        this.state = {
            audio: null,
            isPlaying: false,
            isPaused: false,
            currentlyPlaying: {},
            currentTime: null,
            song: {
                artist: {},
                cover: 'default.png',
                filename: ''
            }
        }
    }

    componentDidMount() {
    }

    componentWillMount() {
        const uri = "https://aftownmusic.com/api/v1/songs/173";
        // const uri = "https://aftownmusic.test/api/v1/songs/33";

        axios.get(uri)
            .then(response => {
                this.setState({ song: response.data })
                this.store(this.state.song)
            })
            .catch(error => console.log(error))   
    }

    render() {
        const songsURI = "http://streams.aftownmusic.com"
        const styles = {
            volumeBar: {
                width: '89%'
            },
            progressBar: {
                width: '87%'
            }
        }

        const {song} = this.state;

        console.log(this.audio);

        console.log('song', song);
        this.audio.src = `${songsURI}/${song.filename}`;
        // this.audio.play()

        return (
            <div className="player-wrapper">
                <Playlist />
            
                <div className="player">
                    <div className="progress">
                        <div style={styles.progressBar} className="progress-bar"></div>
                    </div>
            
                    <div className="controls-wrapper">
                        <div className="controls">
                            <a id="rewind"><i className="control icon-control-rewind"></i></a>
                            <a className="control icon-control-play active" id="play"><i></i></a>
                            {/* <a id="pause"><i className="control icon-control-pause active"></i></a> */}
                            <a id="forward"><i className="control icon-control-forward"></i></a>
                            <a id="repeat"><i className="control icon-loop"></i></a>
                            <a id="playlist-toggler"><i className="control icon-playlist"></i></a>
                        </div>
                    </div>
            
                    <div className="play-area">
                        <div className="artwork-wrapper">
                            <Artwork />
                        </div>
            
                        <div id="remaining" className="time">0:40</div>
            
                        <div className="track-info">
                            <SongTitle />
                            <ArtistTitle />
                        </div>
            
                        <div className="shuffle-indicator">
                            <i className="control icon-shuffle" />
                        </div>
            
                        <div id="total" className="time">3:45</div>
            
                        <div className="aftown-logo">
                            <img src={aftownWhiteIcon} alt="" width="30px" />
                        </div>
                    </div>
            
                    <div className="volume-wrapper">
                        <a><i className="control icon-volume-off"></i></a>
                        <a><i className="control icon-volume-1"></i></a>
                        <a><i className="control icon-volume-2"></i></a>
                        <div className="volume">
                            <div id="volume-bar" className="volume-bar" style={styles.volumeBar} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player;