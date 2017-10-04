import React, { Component } from 'react';
import BookList from '../containers/BookList'
import BookDetail from '../containers/BookDetail'
import Jumbotron from './Jumbotron'
import Footer from './Footer'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Jumbotron />
        <div className="row content-wrapper">
          <BookList />
          <BookDetail />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
