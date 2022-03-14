import React, { Component } from 'react'
import ChallengeInput from './ChallengeInput';
import Info from './Info';
import Score from './Score';
const initialState = {
  result :null 
}
class SpeedCheck extends Component {
    //challenge ="www.scolgecen.com";
    challenge ="Merhamet capcanlı bir kuştu insan kalplerinde.";
    state = initialState
    setResult = (result) =>{
      this.setState({
        result
      })
    }
  render() {
    console.log(this.state);
    const {result} = this.state;
    return (
        <React.Fragment>
            <Info challenge = {this.challenge} />
            <hr />
            <ChallengeInput challenge = {this.challenge} setResult={this.setResult} />
            <hr />

            { result !==null ? <Score score={this.state.result} /> : ""}
        </React.Fragment>
    )
  }
}
export default SpeedCheck;