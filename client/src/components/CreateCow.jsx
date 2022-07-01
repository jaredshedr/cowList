import React from 'react';

class CreateCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.addNew = this.addNew.bind(this);
  }

  addNew (e) {
    event.preventDefault();
    this.props.addCow(e.target[0].value, e.target[1].value)
  }


  render () {
    return (
      <form onSubmit={this.addNew}>
        <input placeholder='Cow Name'></input>
        <input placeholder='Description'></input>
        <button>Please God Add Me</button>
      </form>
    )
  }
}


export default CreateCow