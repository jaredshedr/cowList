import React from 'react';

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    }

    this.changeDescription = this.changeDescription.bind(this);
  }

  changeDescription (e) {
    this.setState({
      description: e.target.value
    })
  }


  render () {
    if (this.props.editBool) {
      return (
        <>
        <div className='model'>
          <span className='cow-name'><b>{this.props.cow.name}</b></span>
          <input onChange={this.changeDescription} placeholder='New Description'></input>
        </div>
          <button onClick={() => this.props.onEditSave(this.props.cow.cow_id, this.state.description)} className='button'>Save</button>
        </>
      )
    } else {
      console.log(this.props.cow)
      return (
        <>
        <div className='model'>
          <span className='cow-name'><b>{this.props.cow.name}</b></span>
          <span className='cow-description'>{this.props.cow.description}</span>
        </div>
          <button onClick={this.props.backBtn} className='button'>Back</button>
          <button onClick={this.props.editBtn} className='button'>Edit</button>
          <button onClick={() => this.props.deleteBtn(this.props.cow.cow_id)} className='button'>Delete</button>
        </>
      )
    }
  }
}


export default Model