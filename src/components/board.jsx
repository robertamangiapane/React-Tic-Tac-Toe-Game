import React, { Component } from "react"
import "../components/board.css"
import Turn from '../components/turn'
import Result from '../components/result'

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game : this.props.game,
      fields: this.props.game.board.fields,
      turn: this.props.game.turn,
      result: this.props.game.result,
      // rows_columns: "",
      // gameover : "",
      claimField : this.claimField.bind(this),
    }
  }

  claimField(item){
    this.state.game.claim_field(item)
    this.setState({fields: this.props.game.board.fields, turn: this.props.game.turn, result: this.props.game.result})
    console.log(this.props.game.turn)

  }

  render(){
    return(
      <div>
        <div className="game-turn">
        <Turn turn={this.state.turn}/>
        </div>
        <div className="game-result">
        <Result result={this.state.result}/>
        </div>
        <div className="board-grid">
          <button onClick={() => this.claimField(0)}>
          {this.state.fields[0]}
          </button>
          <button onClick={() => this.claimField(1)}>
          {this.state.fields[1]}
          </button>
          <button onClick={() => this.claimField(2)}>
          {this.state.fields[2]}
          </button>
          <button onClick={() => this.claimField(3)}>
          {this.state.fields[3]}
          </button>
          <button onClick={() => this.claimField(4)}>
          {this.state.fields[4]}
          </button>
          <button onClick={() => this.claimField(5)}>
          {this.state.fields[5]}
          </button>
          <button onClick={() => this.claimField(6)}>
          {this.state.fields[6]}
          </button>
          <button onClick={() => this.claimField(7)}>
          {this.state.fields[7]}
          </button>
          <button onClick={() => this.claimField(8)}>
          {this.state.fields[8]}
          </button>
        </div>
      </div>

    )
  }
}

export default Board;
