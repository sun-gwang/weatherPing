/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import { Component, Fragment} from 'react';
import Profile from './src/screens/profile'
import Button from './src/components/Button';
import HomeScreen from './src/screens/HomeScreen';

class App extends Component {
    render() {

    return (
      <>
        <SafeAreaView>
          <HomeScreen />
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    
  },
  
});

export default App;
