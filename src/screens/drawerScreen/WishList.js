import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class DrawerScreen1 extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
        <View style={StyleSheet.container}>
        <CustomHeader/>
        <View style={StyleSheet.cont}>
        <Text>Wish List</Text>
        </View>
        </View>
         )
     }
}
 
export default DrawerScreen1;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        },
});