import React from 'react';

let Model = function ({cow}) {
  return (
    <div className='model'>
      <span className='cow-name'><b>{cow.name}</b></span>
      <span className='cow-description'>{cow.description}</span>
    </div>
  )
}


export default Model