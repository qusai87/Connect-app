// app/welcome.js
import React, { Component } from 'react';
import Carousel from 'react-native-looped-carousel';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class Welcome extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props);
    this.data = {};
    
    this.state = {
      size: { width, height },
    };
  }
  
  onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }
  
  render() { 
     const { navigate } = this.props.navigation;
    return (
        <View style={styles.container} onLayout={this.onLayoutDidChange}>
        <Carousel
          delay={5000}
          style={this.state.size}
          bullets
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[styles.container, this.state.size]}>
             <Text>MM</Text>
              <Image 
                style={{
                  width: 300,
                  height: 200,
                }}
                resizeMode={'contain'}
                source={{ uri: 'https://unsplash.it/200/300' }}
              />
              <Text>Chat with local people that matters to you!</Text>
          </View>
          <View style={[styles.container, this.state.size]}>
              <Text>Lets make a short story</Text>
          </View>
          <View style={[styles.container, this.state.size]}>
              <Text>Lets make a short story</Text>
          </View>
          <View style={[styles.container, this.state.size]}>
              <Text>Thomas is a designer</Text>
          </View>
          <View style={[styles.container, this.state.size]}>
              <Text>He started looking for someone nearby..</Text>
          </View>
          <View style={[styles.container, this.state.size]}>
              <Text>Wohhoo!</Text>
              <Text>Thomas found someone can help, and he started a chat with him!</Text>
          </View>
          <View style={[styles.container, this.state.size]}>
              <Text>Done!</Text>
              <Text>
                Thomas invite him to a cup of coffee!, to talk about his interesting website!
              </Text>
          </View>
          <View style={[styles.container, this.state.size]}>
            <Button
              title="Start now"
              onPress={() =>
                navigate('Main', { name: 'Jane' })
              }
            />
          </View>
        </Carousel>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
});

export default Welcome;

