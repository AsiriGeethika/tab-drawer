import React from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import {Icon} from 'native-base';
import colors from '../../styles/colors';
import STabScreen1 from '../../Sup.screens/tabscreen/HomeScreen';
import STabScreen2 from '../../Sup.screens/tabscreen/ProfileScreen';
import STabScreen3 from '../../Sup.screens/tabscreen/OrdersScreen';


const TabNavigation = createMaterialTopTabNavigator({
    Home:{
        screen:STabScreen1,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="home"
                    size={20}
                    color={tintColor} />
            )
        }
    },

    Profile:{
        screen:STabScreen2,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-person"
                    size={30}
                    color={tintColor} />
            )
        }
    },

    Orders:{
        screen:STabScreen3,
        navigationOptions: {
            tabBarLabel: "",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-cart"
                    size={20}
                    color={tintColor} />
            )
        }
    },
},

{
    tabBarPosition:'bottom',
    // initialRouteName:'Notice',
    animationEnabled:true,
    tabBarOptions: {
        showIcon:true,
        // labelStyle: {
        //   fontSize: 12,
        // },
        // tabStyle: {
        //   width: 100,
        // },
        style: {
          backgroundColor: '#33b5e5',
          height:60,

        },
      }
});

export default createStackNavigator({ TabNavigation }, {headerMode:"none"});