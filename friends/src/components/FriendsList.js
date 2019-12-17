import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Friend from './Friend';
import FriendForm from './FriendForm';

class FriendsList extends React.Component {
  state = {
    friends : []
  }
  
  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        //console.log('Friends Data', res)
        this.setState({
          friends: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    //console.log('Friends State', this.state.friends)
    return(
      <div>
        <h1>Friends List</h1>
        {this.state.friends.map(item => <Friend item={item} />)}
        <h2>Add a Friend</h2>
        <FriendForm state={this.state.friends} />
      </div>
    )
  };
};

export default FriendsList;