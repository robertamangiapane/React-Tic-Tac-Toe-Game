import React, { Component } from "react"
import "../components/board.css"

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game : this.props.game,
      fields: this.props.game.board.fields,
      turn: this.props.game.turn,
      result: this.props.game.result,
      claimField : this.claimField.bind(this),
    }
  }

  claimField(item){
    if (this.state.result === "Next round") {
      this.state.game.claim_field(item)
      this.setState({
        fields: this.props.game.board.fields,
        turn: this.props.game.turn,
        result: this.props.game.result
      })
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.game !== prevProps.game) {
      this.setState({
        game: this.props.game,
        fields: this.props.game.board.fields,
        turn: this.props.game.turn,
        result: this.props.game.result
      })
    }
  }

  createGrid(){
    var grid = []

    for (let i = 0; i < 9; i++) {
      grid.push(<button key={i} onClick={() => this.claimField(i)}>
      {this.state.fields[i]}
      </button>)
    }
    return grid
  }

  render(){
    return(
      <div>
        <div className="board-grid">
        <div className="board-fields">
          {this.createGrid()}
        </div>
        </div>
      </div>

    )
  }
}

export default Board;
