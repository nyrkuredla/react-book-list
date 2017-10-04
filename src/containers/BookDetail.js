import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';


class BookDetail extends Component {

  render() {
    console.log("bookdetail props", this.props)
    if(!this.props.book.title) {
      return (
        <div className="title mx-auto">Select a book to get started!</div>
      )
    }
    return (
      <div className="card col-md-6">
        <div className="card-block mx-auto">
          <h3 className="card-title title">{this.props.book.title}</h3>
          <p className="card-text">{this.props.book.pages} pages</p>
          <p className="card-text"><em>Author: </em> {this.props.book.author}</p>
          <p className="card-text"><em>Price: </em> ${this.props.book.price} USD</p>
          <p className="card-text"><em>Published: </em> {this.props.book.published_date} by {this.props.book.publisher}</p>
          <p className="card-text"><em>Genre: </em> {this.props.book.category.join(", ")} </p>
        </div>
      </div>
    );
  }
}

//activeBook reducer creates activeBook state.
function mapStateToProps(state) {
  console.log(state);
  return {
    book: state.activeBook,
  };
}


export default connect(mapStateToProps)(BookDetail);
