import React, {Component} from 'react';
import './App.css';

import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import FriendsPage from './components/FriendsPage';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Octavio Villalpando",
        username: "Mostro",
        image: "https://i.pinimg.com/564x/68/ee/c7/68eec72db45045c5e5d3eee08e992531.jpg",
        friendList: ["Leo", "Raul", "Karen"]
      },
      potentialFriends: [],
      apiDataLoaded: false
    }
  }

  componentDidMount = async () => {
    const friendOne = await axios.get("https://randomuser.me/api/");
    const friendTwo = await axios.get("https://randomuser.me/api/");
    const friendThree = await axios.get("https://randomuser.me/api/");
    const friendFour = await axios.get("https://randomuser.me/api/");
    const friendFive = await axios.get("https://randomuser.me/api/");

    const friends = [friendOne.data.results[0], 
    friendTwo.data.results[0],
    friendThree.data.results[0],
    friendFour.data.results[0],
    friendFive.data.results[0] 
    ];

    this.setState({
      potentialFriends: friends,
      apiDataLoaded: true
    })    
  }

  render() {
    return (
      <div className="App">
       <nav>
         <Link to="/">Profile</Link>
         <Link to="/users">Users</Link>
       </nav>
       <h1>MostroBook</h1>
       <Route exact path="/" render={() => (
         <Profile user={this.state.user} />
       )} />
       <Route path="/users" render={() => (
         <FriendsPage potentialFriends={this.state.potentialFriends}/>
       )} /> 
      </div>
    );
  } 
}

export default App;
