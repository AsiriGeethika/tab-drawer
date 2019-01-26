import React, { Component } from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
 
class Select extends Component{
constructor(props){
    super(props);

} 

    loginHandler=()=>{
        this.props.navigation.navigate('DrewerNav')
    }
     render(){
        return(
            <View style={styles.container}> 
                <View style={styles.header}>
                    <Image source={require('./../../Images/cart1.png')} style = {styles.img1}  />
                    <Text style={styles.txt}>OfferMe</Text> 
                    <Text style={styles.txt2}>Select your user type</Text>
                </View>

                <View style={styles.con}>
                    <TouchableOpacity style={styles.btnn} onPress={this.loginHandler}>
                        <Text style={styles.buttonText1}>Customer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnn} onPress={this.loginHandler}>
                        <Text style={styles.buttonText1}>Supplier</Text>
                    </TouchableOpacity>
                </View>    
             </View>
         )
     }
}
 
export default Select;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33b5e5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img1:{
            width:100,
            height:100
    },
    txt:{
            fontSize:50,
            marginLeft:10,
            fontWeight: "600",
            fontStyle: 'italic',
            color:'#fff'
    },
    header:{
        //flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, 
        marginTop: 50,
    },
    con:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    btnn:{
        //backgroundColor: '#fff',
        marginTop:20,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        backgroundColor: 'rgba(151, 163, 168,0.8)',
        marginLeft: 20,
        marginRight: 20,
    },
    buttonText1:{
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#0d47a1',
        fontWeight: 'bold',
        alignItems: 'center',
      },
    txt2:{
        marginTop: 50,
        fontFamily: 'Cochin',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'center',
    },
});