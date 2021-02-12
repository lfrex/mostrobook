import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "Octavio Villalpando",
        username: "Mostro",
        image: "https://i.pinimg.com/564x/68/ee/c7/68eec72db45045c5e5d3eee08e992531.jpg",
        friendlist: []
      },
      apiDataLoaded: false,
      potentialFriends: []
    }
  }


  render() {
    return (
      <div className="App">
        <h1>MostroBook</h1>
      </div>
    );
  } 
}

export default App;
