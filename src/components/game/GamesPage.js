import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import GameList from './GameList';
import { fetchGames } from '../../actions/index';

class GamesPage extends Component {
    componentDidMount() {
        this.props.fetchGames();
    }

    render() {
        return (
            <div>
                <GameList games={this.props.games}></GameList>
            </div>
        );
    }
}
GamesPage.propTypes = {
    games:PropTypes.array.isRequired,
    fetchGames:PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
    return {
        games: state.games
    };
};

export default connect(mapStateToProps,{fetchGames})(GamesPage);
