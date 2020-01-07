import React, { Component } from "react"

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game : this.props.game,
      player : this.props.player,
      result: this.props.game.result,
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.game !== prevProps.game) {
      this.setState({
        game: this.props.game,
        result: this.props.game.result,
        player : this.props.player,
      })
    }
    console.log(this.state.game)
  }

  render(){
    if( this.props.game.turn === this.state.player.name) {

      return(
        <div>
        Player{this.state.player.name}'s turn
        </div>
      )} else {
        return (
          <div className="display-none">
          Player{this.state.player.name}'s turn
          </div>
        )
      }
  }
};

export default Player;
