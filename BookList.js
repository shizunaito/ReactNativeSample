import React, { Component } from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import BookItem from "./BookItem";
import NYT from "./NYT";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  
  componentDidMount() {
    this._refreshData();
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
  
  _refreshData = () => {
    NYT.fetchBooks().then(books => {
      this.setState({ data: this._addKeysToBooks(books) });
    });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({ container: { flex: 1, paddingTop: 22 } });

export default BookList;