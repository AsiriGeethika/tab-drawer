
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
import ViewCard from './src/components/ViewCard';
import ItemDetails from './src/screens/itemDetails/ItemDetails';
import Category1 from './src/screens/categories/Food';
import Category3 from './src/screens/categories/Service';
import Category2 from './src/screens/categories/Clothing';
import Category4 from './src/screens/categories/Finance';
import Category5 from './src/screens/categories/Others';


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
  ItemDetails:{screen:ItemDetails},
  Signin:{screen : SignIn},
  ViewCard:{screen:ViewCard},
  About:{screen:DrawerScreen2},
  Orders:{screen:TabScreen3},
  Wish:{screen:DrawerScreen1},
  Profile:{screen:TabScreen2},
  Categories:{screen:DrawerScreen4},
  Food: {screen:Category1},
  Cloth:{screen:Category2},
  Serv : {screen:Category3},
  Fin:{screen:Category4},
  Other:{screen:Category5},

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
