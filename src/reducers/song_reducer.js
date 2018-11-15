// import * as actions from '../actions'
import ACTIONS from '../actions'

const fetchSong = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_SONGS:
      return {
        ...state,
        songs: state.songs.concat(songs)
      }
    default:
      return state;
  }
  return state;
};