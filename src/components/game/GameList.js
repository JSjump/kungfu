import React from 'react';
import PropTypes from 'prop-types';
import GameCard from './GameCard';
const GameList = ({games,deleteGame}) => {
    const emptyMessage = (
        <p>there are no games yet in your collection.</p>
    );
    const gamesList = (
            <div className="ui four cards">
                {games.map(game => <GameCard deleteGame={deleteGame} game={game} key={game._id}/>)}
            </div>
    );
    return (
        <div>
            {games.length === 0 ?  emptyMessage:gamesList }
        </div>
    )
};
GameList.propTypes = {
games:PropTypes.array.isRequired,
deleteGame:PropTypes.func.isRequired,
};

export default GameList;
