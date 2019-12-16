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

  render(){
    return(
      <div className="board-grid">
        <button>
        {this.state.fields[0]}
        </button>
        <button>
        field
        </button>
        <button>
        field
        </button>
        <button>
        field
        </button>
        <button>
        field
        </button>
        <button>
        field
        </button>
        <button>
        field
        </button>
        <button>
        field
        </button>
        <button>
        field
        </button>
      </div>
    )
  }
}

export default Board;
