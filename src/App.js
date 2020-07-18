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
    console.log(BooksAPI.get('sJf1vQAACAAJ'))
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  searchBookShelves = (title) => {
    BooksAPI.search(title)
  }

  updateCategory(){
    // BooksAPI.update()
    // .then((books) => {
    //   this.setState(() => ({
    //     books
    //   }))
    // })
  }

  render() {
    return (
       <div>
        <Route exact path='/' render={() => (
          <MyReads
            books = {this.state.books}
            // onSearch = {(title) => {
            //   this.searchBookShelves(title)
            // }}
          ></MyReads>
            //updateCategory = {this.state.books}
        )} />

        <Route exact path='/search' render={() => (
          <Search
            books = {this.state.books}
            //updateCategory = {this.state.books}
            //onHomePage = history.push('/') 
          ></Search>
        )} />

      </div>
    );
  }
}

export default BooksApp
