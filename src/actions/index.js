export const fetchGames = () => {
    return dispatch => {
        console.log(1111111111)
        fetch('/api/games');
    }
}
