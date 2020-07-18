import React from 'react'
import MyReads from './MyReads'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";

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

  updateBook(id, newShelf){
    BooksAPI.update(BooksAPI.get(id), newShelf)
    // .then((book) => {
    //   this.setState(newShelf)
    // })
  }

  render() {
    return (
       <div>
        <Route exact path='/' render={() => (
          <MyReads
            books = {this.state.books}
            onChangeShelf = {this.updateBook}
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
