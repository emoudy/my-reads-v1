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
    console.log('componentDidMount happened');
  }

  updateShelf = (book, newShelf) => {
    this.setState ({ book: newShelf });
    BooksAPI.update(book, newShelf)
    this.forceUpdate();
    console.log('updateShelf happened');
  }

  render() {
    return (
       <div>
        <Route exact path='/' render={() => (
          <MyReads
            books = {this.state.books}
            
            onShelfChange = {(book, newShelf) => {
              this.updateShelf(book, newShelf)
            }}
          ></MyReads>
        )} />

        <Route exact path='/search' render={() => (
          <Search
            books = {this.state.books}
            onShelfChange = {(book, newShelf) => {
              this.updateShelf(book, newShelf)
            }}
          ></Search>
        )} />

      </div>
    );
  }
}

export default BooksApp
