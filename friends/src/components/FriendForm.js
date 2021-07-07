import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendForm = props => {
  //console.log('State FriendForm: ', props.state)

  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: ''
  })
  //console.log('NewFriend: ', newFriend)

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/friends', newFriend)
      .then(res => {
        console.log(res);
        setNewFriend({
          newFriend: res.data
        })
        setNewFriend({
          name: '',
          age: '',
          email: ''
        })
      })
      .catch(err => console.log(err))
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name='name'
        placeholder='Friends Name'
        value={newFriend.name}
        onChange={handleChange}
        
      />
      <input 
        type="text"
        name='age'
        placeholder='Friends Age'
        value={newFriend.age}
        onChange={handleChange}
      />
      <input 
        type="text"
        name='email'
        placeholder='Friends Email'
        value={newFriend.email}
        onChange={handleChange}
      />
      <button type='submit'>Add Friend</button>
    </form>
  )
};

export default FriendForm;