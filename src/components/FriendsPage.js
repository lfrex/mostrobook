import React from 'react';

const FriendsPage = (props) => {
    console.log(props);
    return (
   <div>
       {props.potentialFriends.map(friend => (
           <div key={friend.cell} >
               <img src={friend.picture.thumbnail} />
               <h3>{friend.name.first} {friend.name.last}</h3>
               <p>{friend.login.username}</p>
               <button onClick={() => props.addFriend(friend)}>Add Friend</button>
            </div>
       ))}
   </div>
       )
}

export default FriendsPage;