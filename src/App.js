import React, { Component } from 'react';
import logo from './logo.svg';
import cat from './octocat.png'
import './App.scss';
import ChatWindow from './ChatWindow';
import ChatLog from './ChatLog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>



        <h1>Stukent Chat App</h1>
          <div className="Chat">


          <ChatWindow />

          </div>

          <div className="gitHub">
          <img src={cat} className="Git" alt="octocat" />
          <p> Remember to use Github to save all of your progress so that you do not regret it later! </p>
          </div>

          <div className="footer">
          All &copy;Copyrights reserved by Stukent 2017
          </div>

      </div>
    );
  }
}

export default App;
