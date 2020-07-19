import React from 'react'
import MyReads from './MyReads'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BooksApp extends React.Component {

  state = {
     books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  updateShelf = (book) => {
    this.setState((currentState) => ({
      books: currentState.books.filter((b) => {
        return b.shelf != book.shelf
      })
    }))
    BooksAPI.update(book, this.state.book.shelf)
  }

  render() {
    return (
       <div>
        <Route exact path='/' render={() => (
          <MyReads
            books = {this.state.books}
            onChangeShelf = {this.updateShelf}
          ></MyReads>
        )} />

        <Route exact path='/search' render={() => (
          <Search
            books = {this.state.books}
          ></Search>
        )} />

      </div>
    );
  }
}

export default BooksApp
