import React from 'react';

let Model = function ({deleteBtn, backBtn, cow}) {
  return (
    <>
    <div className='model'>
      <span className='cow-name'><b>{cow.name}</b></span>
      <span className='cow-description'>{cow.description}</span>
    </div>
      <button onClick={backBtn} className='button'>Back</button>
      <button className='button'>Edit</button>
      <button onClick={() => deleteBtn(cow.cow_id)} className='button'>Delete</button>
    </>
  )
}


export default Model