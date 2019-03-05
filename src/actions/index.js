import { SET_GAMES ,ADD_GAME, GAME_FETCHED,UPDATE_GAME,GAME_DELETED} from '../constants';
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
const gameUpdate = (game) =>{
    return {
        type: UPDATE_GAME,
        game
    }
}

export const updateGame = (data) => {
    return dispatch => {
        return fetch(`/api/games/${data._id}`,{
            method: 'put',
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(res => res.json())
            .then(data => dispatch(gameUpdate(data.game)))
    }
}
const gameDeleted= (id) => {
    return {
        type: GAME_DELETED,
        id
    }
}
export const deleteGame = (id)=> {
    return (dispatch) => {
        fetch(`/api/games/${id}`,{
            method: 'delete',
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res=>res.json())
            .then(data=>dispatch(gameDeleted(id)))
    }
}
