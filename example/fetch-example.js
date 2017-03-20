import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  View,
  Text
} from 'react-native';

/*
{
  "title": "The Basics - Networking",
  "description": "Your app fetched this from a remote endpoint!",
  "movies": [
    { "title": "Star Wars", "releaseYear": "1977"},
    { "title": "Back to the Future", "releaseYear": "1985"},
    { "title": "The Matrix", "releaseYear": "1999"},
    { "title": "Inception", "releaseYear": "2010"},
    { "title": "Interstellar", "releaseYear": "2014"}
  ]
}
*/
class FetchExample extends Component {
  constructor(props){
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1,r2) => r1!==r2
      }),
      loaded: false,
    };

    this.fetchData();
  }//end constructor

  fetchData(){
    fetch('http://localhost:6080/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseJson.movies),
          loaded: true,
        });
      })
      .catch((error) => {
        console.error(error);
      })
      .done();
  }

  render(){
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View Style={{flex:1, paddingTop:22}}>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData.title}</Text>}
      />
      </View>
    )
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default class GettingStarted extends Component {
  render() {
    return (
      <FetchExample />
    );
  }
}


AppRegistry.registerComponent('GettingStarted', () => GettingStarted);
