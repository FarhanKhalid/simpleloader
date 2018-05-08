import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

import MyLoading from './components/myLoading.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      requestResponse: ''
    }
  }

  requestData() {
    this.setState({
      isLoading: true,
      requestResponse: ''
    })
    fetch('http://localhost:8082/sapphire/test')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          isLoading: false,
          requestResponse: responseData.message
        })
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <MyLoading show={this.state.isLoading} />
        <Text>{ this.state.requestResponse }</Text>
        <Button onPress={() => this.requestData()}
          title="Get the data!"
          color="#009900" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
