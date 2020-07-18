import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import ImageInput from './ImageInput'
// import serializeForm from 'form-serialize'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyReads extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }


  render(){

    const { books } = this.props
    
    return(
      <div>
        <ol>
          {books.map((book) => (
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks? `url(${book.imageLinks.thumbnail})`: '' }}>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default MyReads








