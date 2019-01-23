import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class DrawerScreen4 extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
        <View style={StyleSheet.container}>
        <CustomHeader/>
        <View style={StyleSheet.cont}>
        <Text style= {styles.TextComponentStyle}>Categories</Text>
        <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Cloth')}>
            <Text  style= {styles.Textstyle}>Clothing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Food')}>
            <Text  style= {styles.Textstyle}>Food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Fin')}>
            <Text  style= {styles.Textstyle}>Finance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Serv')}>
            <Text  style= {styles.Textstyle}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Other')}>
            <Text  style= {styles.Textstyle}>Other</Text>
        </TouchableOpacity>
        
        </View>
        </View>
         )
     }
}
 
export default DrawerScreen4;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextComponentStyle: {
        fontSize: 28,
        fontWeight: '600',
        color: "#004D40",
        textAlign: 'center', 
        marginBottom: 30,
        padding : 10,
    },
    Textstyle: {
        fontSize: 20,
        fontWeight: '300',
        color: "#004D40",
        textAlign: 'center', 
        marginBottom: 30,
        padding : 10,
    },

});