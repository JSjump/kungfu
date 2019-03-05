import {ADD_GAME, SET_GAMES, GAME_FETCHED,UPDATE_GAME,GAME_DELETED} from '../constants';
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
        case UPDATE_GAME:
            return state.map(item => {
                if(item._id === action.game._id) return action.game;
                return item;
            })
        case GAME_DELETED:
            return state.filter(item => {
               return item._id !== action.id
            })
        case GAME_FETCHED:
            const index = state.findIndex(item => item._id === action.game._id);
            if(index > -1){
                 return state.map(item => {
                     if(item._id === action.game._id) return action.game;
                     return item;
                 })
            }else{
                return [
                    ...state,
                    action.game
                ]
            }
        default: return state;
    }
};

export default games;
