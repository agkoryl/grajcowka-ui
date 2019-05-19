import { SET_GAMES } from "../constants";


import { get } from '../../api/methods';



export const populateGames = (token) => {
    return async (dispatch) => {
        get('/api/games', {}, token)
        .then( 
            games => dispatch(setGames(games))
        ).catch(error => console.error(error))
    }
  }

export const setGames = (games) => ({
    type: SET_GAMES,
    games
})