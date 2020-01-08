import React, { Component } from "react"
import playerO from "../playerO.png"
import playerX from "../playerX.png"

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game : this.props.game,
      turn: this.props.game.turn,
      result: this.props.game.result,
    };

    this.claimField = this.claimField.bind(this)
  }

  claimField(item){
    if (this.state.result === "Next round") {

      this.state.game.claim_field(item)
      this.setState({
        game : this.props.game,
        turn: this.props.game.turn,
        result: this.props.game.result,
      })
    }
  }

  drawFields(i) {
    var imgO = ""

    if(this.state.game.board.fields[i] === "O") {

        imgO = <div className="img"> <img src={playerO} alt=""/> </div>

    } else if (this.state.game.board.fields[i] === "X") {

      imgO = <div className="img"> <img src={playerX} alt=""/> </div>

    }
    return imgO
  }

  componentDidUpdate(prevProps){
    if (this.props.game !== prevProps.game) {
      this.setState({
        game: this.props.game,
        turn: this.props.game.turn,
        result: this.props.game.result
      })
    }
  }

  createGrid(){
    var grid = []

    for (let i = 0; i < 9; i++) {
      grid.push(<button key={i} onClick={() => this.claimField(i)}>
      {this.drawFields(i)}
      </button>)
    }
    return grid
  }

  render(){
    return(
      <div>
        <div className="board-grid">
        <div className="board-fields" onClick = {this.props.handler}>
          {this.createGrid()}
        </div>
        </div>
      </div>

    )
  }
}

export default Board;
