import React, { Component } from "react"

class Result extends Component {
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
    if( this.props.game.result !== "Next round") {
      return(
        <div className="result">
        {this.props.game.result}
        </div>
      )} else {
        return(
        <div className="display-none">
          {this.props.game.result}
        </div>
      )}
  }
};

export default Result;
