import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Player from "../components/Player";
import Header from "../components/Header";
import AddPlayerForm from "../components/AddPlayerForm";
import "../App.css";

class Scoreboard extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(
            function(player, index) {
              return (
                <Player
                  name={player.name}
                  score={player.score}
                  key={player.name}
                  onScoreChange={delta => this.onScoreChange(index, delta)}
                  onRemove={() => this.onRemovePlayer(index)}
                />
              );
            }.bind(this)
          )}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state
});

export default connect(mapStateToProps)(Scoreboard);
