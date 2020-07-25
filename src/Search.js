import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import { Link } from "react-router-dom";

class Search extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange : PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  clearQuery = () => {
    this.updateQuery('')
  }

	updateQuery = (query) => {
    console.log('updateQuery happened');
    this.setState(() => ({
      query: query.trim()
    }))
  }

	render(){
		const { query } = this.state
		const { books, onShelfChange } = this.props

		const searchResults = query === ''
      ? books
      : books.filter((b) => (
          b.title.toLowerCase().includes(query.toLowerCase())
    ))

		return(
			<div>

				<div className = "topnav">
          <h1>MyReads</h1>
          <Link
            to = '/'
            className = 'link'
          >Home</Link>
        </div>

        <div>
          <input
            className='searchInput'
            type='text'
            placeholder='Search Books'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          ></input>
        </div>

	      <div className = "book-shelf">
          <h2>Search Results</h2>
		        {searchResults.length !== books.length && (
		      	<div className='showing-books'>
			      	<span>Now showing {searchResults.length} of {books.length}</span>
			      	<button onClick={this.clearQuery}>Show all</button>
			      	</div>
		      )}
          <ol>
            {searchResults.map((book) => (
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

			</div>
		)
	}
}

export default Search