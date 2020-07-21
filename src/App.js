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
    });
    console.log('componentDidMount happened');
  }

  updateShelf = (book, newShelf) => {
    this.setState({shelf: newShelf}, () => {
      BooksAPI.update(book, newShelf);
      console.log('setState happened');
      return BooksAPI.getAll().then(data => this.setState({ books: data }))
    })
    console.log('BooksAPI happened');
    this.forceUpdate();
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
