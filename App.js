
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
import Select from './src/authScreen/login/Select';

import STabScreen1 from './src/Sup.screens/tabscreen/HomeScreen';
import STabScreen4 from './src/Sup.screens/tabscreen/Notification';
import STabScreen3 from './src/Sup.screens/tabscreen/OrdersScreen';
import STabScreen2 from './src/Sup.screens/tabscreen/ProfileScreen';
import SDrawerScreen2 from './src/Sup.screens/drawerScreen/AboutUs';
import SDrawerScreen4 from './src/Sup.screens/drawerScreen/Categories';
import SDrawerScreen1 from './src/Sup.screens/drawerScreen/WishList';
import SDrawerScreen3 from './src/Sup.screens/drawerScreen/Settings';
import SupRegister from './src/Sup.screens/LoginScreen/Register';
import SDrawerNav from './src/Sup.navigation/drawerNavigation/DrawerNavigator';
import createAd from './src/Sup.screens/tabscreen/createAd';

export default class App extends Component{
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({  
  Login:{screen:Login},
  Selection:{screen:Select},
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

  SHome: {screen:STabScreen1},
  Smsg:{screen:STabScreen4},
  Sorders:{screen:STabScreen3},
  Sprof:{screen:STabScreen2},
  Sabout:{screen:SDrawerScreen2},
  Scategories:{screen:SDrawerScreen4},
  Swish: {screen:SDrawerScreen1},
  Ssettings:{screen:SDrawerScreen3},
  Sreg:{screen:SupRegister},
  SDrawerNav:{screen:SDrawerNav},
  Ad:{screen:createAd},
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
