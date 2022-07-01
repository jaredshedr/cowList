import React from 'react';
import Cows from './Cows.jsx';
import CreateCow from './CreateCow.jsx'
import Model from './Model.jsx'
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      currentCow: '',
      cowBool: false
    }

    this.addCow = this.addCow.bind(this);
    this.onCowClick = this.onCowClick.bind(this);
    this.backBtn = this.backBtn.bind(this);
    this.deleteBtn = this.deleteBtn.bind(this);
  }

  componentDidMount () {
    axios.get('/api/cows')
      .then((response) => {
        this.setState({
          cows: response.data
        })
      })
      .catch((err) => {
        console.log('error loading', err);
      })
  }

  addCow (name, description) {
    if(name === '') {return;}
    let tempCow = {name:name, description:description};
    axios.post('/api/cows', tempCow)
      .then((response) => {
        this.setState({
          cows: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  onCowClick (cowNum) {
    // send down to cow
    // when click on name invoke
    // this changes a state boolean to true which will update the render with new info
    let allCows = this.state.cows;
    let selectedCow = undefined;

    for (let cow of allCows) {
      if (cow.cow_id === cowNum) {
        selectedCow = cow;
      }
    }

    this.setState({
      currentCow: selectedCow,
      cowBool: true
    })
  }

  backBtn () {
    this.setState({
      cowBool: false
    })
  }

  deleteBtn (cowId) {

    axios.delete('/api/cows',{ data: {cowId: cowId} })
      .then((response) => {
        this.setState({
          cows: response.data,
          cowBool: false
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render () {

    if (this.state.cowBool) {
      return (
        <div>
          <Model deleteBtn={this.deleteBtn} backBtn={this.backBtn} cow={this.state.currentCow}/>
        </div>
      )
    } else {
      return (
        <div>
          <CreateCow addCow={this.addCow}/>
          <Cows onCowClick={this.onCowClick} cows={this.state.cows}/>
        </div>
      )
    }
  }
}

export default App