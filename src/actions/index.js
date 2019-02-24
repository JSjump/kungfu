import { SET_GAMES} from '../constants';
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
