import React, { Component } from "react"

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result : this.props.result
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.result !== prevProps.result) {
      this.setState({result: this.props.result})
    }
  }

  render(){
      return(
        <div>
        Result: {this.props.result}
        </div>
      )
  }
};

export default Result;
