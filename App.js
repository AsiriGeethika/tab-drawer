
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './src/authScreen/login/Login';
import ForgotPassword from './src/authScreen/forgotPassword/ForgotPassword';
import TabNavigator from './src/navigation/tabNavigation/TabNavigator';
import DrawerNavigator from './src/navigation/drawerNavigation/DrawerNavigator';
import Register from './src/screens/LoginScreen/Register';
import SignIn from './src/screens/LoginScreen/SignIn';
import DrawerScreen2 from './src/screens/drawerScreen/AboutUs';
import TabScreen3 from './src/screens/tabscreen/OrdersScreen';
import DrawerScreen1 from './src/screens/drawerScreen/WishList';
import TabScreen2 from './src/screens/tabscreen/ProfileScreen';
import DrawerScreen4 from './src/screens/drawerScreen/Categories';

export default class App extends Component{
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({  
  Login:{screen:Login},
  DrewerNav:{screen:DrawerNavigator},
  Reg:{screen: Register},
  Signin:{screen : SignIn},
  About:{screen:DrawerScreen2},
  Orders:{screen:TabScreen3},
  Wish:{screen:DrawerScreen1},
  Profile:{screen:TabScreen2},
  Categories:{screen:DrawerScreen4},

},
    navigationOptions={
      headerMode:'none'
})

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
