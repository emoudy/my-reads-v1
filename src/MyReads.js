import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import ImageInput from './ImageInput'
// import serializeForm from 'form-serialize'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MyReads extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  
  // state = {
  //   query: ''
  // }
  
  // updateShelf = (query) => {
  //   this.setState(() => ({
  //     query: query.trim()
  //   }))
  // }
  
  // clearQuery = () => {
  //   this.updateQuery('')
  // }


  render(){

    const { books } = this.props
    // const { query } = this.state

    // const allBooks = books
    //= query === '' ? books : books
      // : books.filter((b) => (
      //     b.title.toLowerCase().includes(query.toLowerCase())
      // ))
    
    return(
      <div>
        <ol>
          {books.map((book) => (
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks? `url(${book.imageLinks.thumbnail})`: '' }}></div>
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


  // render() {



    // return (
      // <div>
        // <ol className="books-grid">
          // {allBooks.map((book) => (
          //   <li>
          //     <div className="book">
          //       <div className="book-top">
          //         // <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks? `url(${book.imageLinks.thumbnail})`: '' }}></div>
          //         // <div className="book-shelf-changer">
          //           // <select value = {query} onChange = {(event) => this.updateShelf(event.target.value)}>
          //           //   <option value="move" disabled>Move to...</option>
          //           //   <option value="currentlyReading">Currently Reading</option>
          //           //   <option value="wantToRead">Want to Read</option>
          //           //   <option value="read">Read</option>
          //           //   <option value="none">None</option>
          //           // </select>
          //         // </div>
          //       // </div>
          //       <div className="book-title">{book.title}</div>
          //       <div className="book-authors">{book.authors}</div>
          //     </div>
          //   </li>
          // ))}
        // </ol>
      // </div>
  //   );
  // }








