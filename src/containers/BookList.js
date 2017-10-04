import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
//make sure action created flows through all reducers
import { bindActionCreators } from 'redux';



class BookList extends Component {
  render() {
    let books = this.props.books;

    return (
      <div className="col-md-6">
        <ul className="list-group">
          {books.map((book) => {
            return(
              <li
                key={book.id}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item"><p className="text">{book.title}</p></li>
          )
        })}
        </ul>
    </div>
    );
  }
}

function mapStateToProps(state) {
  //what is returned will show up as props inside of BookList
  //this gives you access to books in props.. (books would be good for mapping)
  return {
    books: state.books,
  };
}

//anything returned from this function will end up as props on
//BookList Container.
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, result should be passed to
  //all of the reducers. (flows through dispatch function -- like a funnel)
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//connect all functions to container component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
