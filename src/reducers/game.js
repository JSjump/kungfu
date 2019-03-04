import {ADD_GAME, SET_GAMES, GAME_FETCHED} from '../constants';
const games = ( state=[], action={} ) => {//reducer 中的state就是其自身所对应管理的state!不是整个状态树！
    console.log('statestate',state);
    switch (action.type) {
        case SET_GAMES:
            return action.games;
        case ADD_GAME:
            return [
                ...state,
                action.game,
            ]
        default: return state;
    }
};

export default games;
