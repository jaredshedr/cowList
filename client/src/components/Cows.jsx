import React from 'react';
import Cow from './Cow.jsx';


class Cows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render () {
    return (
      <ol>
        {this.props.cows.map((cow, index) => <Cow onCowClick={this.props.onCowClick} key={index} cow={cow}/>)}
      </ol>
    )
  }
}


export default Cows