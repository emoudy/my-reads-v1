import React from 'react'
import MyReads from './MyReads'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";

class BooksApp extends React.Component {

  state = {
     books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
    // .then((books) => {
    //   this.setState(() => ({
    //     books
    //   }))
    // })
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
  //MyReads Main
      //<div>
        <Route exact path='/' render={() => (
          <MyReads>
            books = {this.state.books}
          </MyReads>
            //updateCategory = {this.state.books}
        )} />

    //Search Button
      //   <Route exact path='/search' render={({history}) => (
      //     <SearchPage
      //       updateCategory = {this.state.books}
      //       onHomePage = history.push('/') 
      //     ></SearchPage>
      //   )} />
      //</div>
    );
  }
}

export default BooksApp
