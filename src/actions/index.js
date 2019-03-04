import { SET_GAMES ,ADD_GAME, GAME_FETCHED} from '../constants';
export const setGames = (games) => {
    return {
        type:SET_GAMES,
        games
    }
}
export const fetchGames = () => {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data =>dispatch(setGames(data.games)));
    }
}


const handleResponse = res => {
    if(res.ok){
        return res.json();
    }else{
        let error = new Error(res.statusText);
        error.response = res;
        console.log('error.response',error.response)
        throw error;
    }
}
const addGame = (game) =>{
    return {
        type: ADD_GAME,
        game
    }
}
export const saveGame = (data) => {
    return dispatch => {
       return fetch('/api/games',{
            method: 'post',
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(handleResponse)
           .then(data => dispatch(addGame(data.game)))
    }
}
const gameFetch = (game) => {
return{
    type: GAME_FETCHED,
    game
}
};
export const fetchGame = (param) => {
    return dispatch => {
        fetch(`/api/games/${param}`)
            .then(res => res.json())
            .then(data => dispatch(gameFetch(data.game)))
    }
}
