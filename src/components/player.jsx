import React, { Component } from "react"

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game : this.props.game,
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.game !== prevProps.game) {
      this.setState({
        game: this.props.game,
      })
    }
  }

  render(){
    if( this.props.game.result === "Next round" && this.props.game.turn === this.props.player.name) {

      return(
        <div className="players-turn">
          Player{this.props.player.name}'s turn
        </div>
      )} else {
        return (
          <div className="display-none">
            Player{this.props.player.name}'s turn
          </div>
        )
      }
  }
};

export default Player;
