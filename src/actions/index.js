import { SET_GAMES,SAVE_GAME} from '../constants';
export const setGames = (games) => {
    return {
        type:SET_GAMES,
        games
    }
}
export const fetchGames = () => {
    return dispatch => {
        console.log(1111111111)
        fetch('/api/games')
            .then(res => res.json())
            .then(data =>dispatch(setGames(data.games)));
    }
}

export const saveGame = (data) => {
    return dispatch => {
        fetch('/api/games',{
            method: 'post',
            body: JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
}