// app/index.js
import React, { Component } from 'react';
import Carousel from 'react-native-looped-carousel';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native'
import Meteor, { connectMeteor , createContainer } from 'react-native-meteor';
import ItemInfo from './ItemInfo';
import SignIn from './SignIn';
import SignOut from './SignOut';

@connectMeteor
class App extends Component {
  static navigationOptions = {
    title: 'Flora',
  };
  constructor(props) {
    super(props);
    this.data = {};
  }

  componentWillMount() {
    const SERVER_URL = 'ws://localhost:3000/websocket';
    Meteor.connect(SERVER_URL);  
  }
  render() { 
    if (this.data.user) {
      return (
        <View style={styles.container}>
          <ItemInfo />
          <SignOut />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <SignIn />
      </View>
    );
  }
  getMeteorData() {
    console.log('loading user');
    return {
      user: Meteor.user(),
    };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default createContainer(() => {
  Meteor.subscribe('items');
  return {
    count: Meteor.collection('items').find().length,
  };
}, App);

