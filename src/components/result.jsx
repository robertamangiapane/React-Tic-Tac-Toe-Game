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
        <div>
        Result: {this.props.game.result}
        </div>
      )} else {
        return(
        <div>
        </div>
      )}
  }
};

export default Result;
