import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import BookItem from "./BookItem";

const mockBooks = [
  { 
    rank: 1,
    title: "GATHERING PREY",
    author: "John Sandford",
    book_image: "https://user-images.githubusercontent.com/14357415/35627610-c2f590ee-06dc-11e8-8aec-423156c820db.png"
  },
  {
    rank: 2,
    title: "MEMORY MAN",
    author: "David Baldacci",
    book_image: "https://user-images.githubusercontent.com/14357415/35627611-c31c56a2-06dc-11e8-8b2c-9ce70e0779df.png"
  }
];

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this._addKeysToBooks(mockBooks) };
  }
  
  _renderItem = ({ item }) => {
    return (
      <BookItem
        coverURL={item.book_image}
        title={item.key}
        author={item.author}
      />
    );
  };
  
  _addKeysToBooks = books => {
    // take the API response and add a key property to the object
    return books.map(book => {
      return Object.assign(book, { key: book.title });
    });
  };
  
  render() {
    return <FlatList data={this.state.data} renderItem={this._renderItem} />;
  }
}

const styles = StyleSheet.create({ container: { flex: 1, paddingTop: 22 } });

export default BookList;