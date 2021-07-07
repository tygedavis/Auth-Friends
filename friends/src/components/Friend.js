import React from 'react';

const Friend = props => {
  //console.log('Props on Friend', props)
  return(
    <div className='friendCard'>
      <h3>Name: {props.item.name}</h3>
      <p>Age: {props.item.age}</p>
      <p>Email: {props.item.email}</p>
    </div>
  )
}

export default Friend