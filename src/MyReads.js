import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
// import ImageInput from './ImageInput'
// import serializeForm from 'form-serialize'
 import { Link } from "react-router-dom";
 //BrowserRouter as Router, Route, 

class MyReads extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    shelf: ''
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   const values = serializeForm(e.target, { hash: true })

  //   if (this.props.onCreateContact) {
  //     this.props.onCreateContact(values)
  //   }
  // }


  clearQuery = () => {
    this.updateQuery('')
  }


  render(){

    const { books } = this.props
    const { query } = this.state

    const currentlyReadingShelf = books === ''
      ? books
      : books.filter((b) => (
          b.shelf.includes('currentlyReading')
      ))

    const wantToReadShelf = books === ''
      ? books
      : books.filter((b) => (
          b.shelf.includes('wantToRead')
      ))

    const readShelf = books === ''
      ? books
      : books.filter((b) => (
          b.shelf.includes('read')
      ))


    return(
      <div>
        
        <div className = "topnav">
          <h1>MyReads</h1>
          <Link
            to = '/search'
            className = 'link'
          >Search Books</Link>
        </div>
        
        <div className = "book-shelf">
          <h2>Currently Reading</h2>
          <ol>
            {currentlyReadingShelf.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks? `url(${book.imageLinks.thumbnail})`: '' }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select value = {book.shelf} onChange = {(event) => this.props.onChangeShelf(book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                  <div className="book-category">{book.shelf}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className = "book-shelf">
          <h2>Want To Read</h2>
          <ol>
            {wantToReadShelf.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks? `url(${book.imageLinks.thumbnail})`: '' }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select value = {book.shelf} onChange = {(event) => this.updateBook(event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                  <div className="book-category">{book.shelf}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className = "book-shelf">
          <h2>Read</h2>
          <ol>
            {readShelf.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks? `url(${book.imageLinks.thumbnail})`: '' }}>
                    </div>
                    <div className="book-shelf-changer">
                      <select value = {book.shelf} onChange = {(event) => this.updateBook(event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                  <div className="book-category">{book.shelf}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

      </div>
    );
  }
}

export default MyReads










