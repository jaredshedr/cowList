import React from 'react';


let Cow = function ({cow, onCowClick}) {
  return (
    <>
      <li onClick={(event) => onCowClick(cow.cow_id)}>{cow.name}</li>
    </>
  )
}


export default Cow