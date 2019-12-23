import React, { Component } from "react"
import BoardClass from "../boardClass"
import "../components/board.css"

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game : this.props.game,
      fields: this.props.game.board.fields,
      rows_columns: "",
      gameover : ""
    }
  }

  claimField(){
    this.state.game.claim_field(0)
    this.setState({fields: this.props.game.board.fields})
  }

  render(){
    return(
      <div className="board-grid">
        <button onClick={() => this.claimField(0)}>
        {this.state.fields[0]}
        </button>
        <button>
        {this.state.fields[1]}
        </button>
        <button>
        {this.state.fields[2]}
        </button>
        <button>
        {this.state.fields[3]}
        </button>
        <button>
        {this.state.fields[4]}
        </button>
        <button>
        {this.state.fields[5]}
        </button>
        <button>
        {this.state.fields[6]}
        </button>
        <button>
        {this.state.fields[7]}
        </button>
        <button>
        {this.state.fields[8]}
        </button>
      </div>
    )
  }
}

export default Board;
