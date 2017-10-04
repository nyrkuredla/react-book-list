import React, { Component } from 'react';
import BookList from '../containers/BookList'
import '../styles/App.css';

class App extends Component {
  render() {
    console.log('app state', this.state)
    return (
      <div className="App">
        <BookList />
      </div>
    );
  }
}

export default App;
