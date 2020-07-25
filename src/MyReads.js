import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
// import ImageInput from './ImageInput'
// import serializeForm from 'form-serialize'
 import { Link } from "react-router-dom";
 // 

class MyReads extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange : PropTypes.func.isRequired
  }

  render(){
    const { books, onShelfChange } = this.props
    
    const shelves = [
      {
        title: 'Currently Reading', 
        category: 'currentlyReading'
      },
      {
        title: 'Want to Read', 
        category: 'wantToRead'
      },
      {
        title: 'Read', 
        category:'read'
      }
    ]

    return(
      <div>

        <header className = "topnav">
          <h1>MyReads</h1>
          <Link
            to = '/search'
            className = 'link'
          >Search Books</Link>
        </header>

        {shelves.map(s => {
          const shelfTitle = s.title;
          const shelfType = s.category;
          const booksResults = 
            books.filter((book) => 
              book.shelf.includes(shelfType)
            );
          
          return (
            <div className = "book-shelf">
              
              <h1 key={shelfTitle}>{shelfTitle}</h1>
            
              <ol>
                {booksResults.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks? `url(${book.imageLinks.thumbnail})`: '' }}>
                        </div>
                        <div className="book-shelf-changer">
                          <select 
                            defaultValue = {book.shelf}
                            onChange = {(event) => onShelfChange(book, event.target.value)}>
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
          )
        })}

      </div>
    )
  }
}

export default MyReads