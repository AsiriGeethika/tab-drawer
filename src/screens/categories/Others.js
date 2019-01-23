import React, { Component } from 'react';
import {View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class Category5 extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
        <View style={StyleSheet.container}>
        <CustomHeader/>
        <View style={StyleSheet.cont}>
        <Text style= {styles.TextComponentStyle}>Others</Text>
        <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Home')}>
            <Text  style= {styles.Textstyle}>Subscribe</Text>
        </TouchableOpacity>
        </View>
        </View>
         )
     }
}
 
export default Category5;


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