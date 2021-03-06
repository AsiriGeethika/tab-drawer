import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,Text,StyleSheet,TouchableOpacity,} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class STabScreen2 extends Component{
  constructor(props){
    super(props);

} 
     render(){
        return(
            <ScrollView style={styles.container1}>
        <CustomHeader/>
          <ImageBackground source={require('./../../Images/slide1.jpeg')} style={styles.banner}>
              <View style={styles.container}>
                  <Text style={styles.txt1}>My Account</Text>
              </View>
        </ImageBackground>
        </ScrollView>
         )
     }
}
export default STabScreen2;
const styles = StyleSheet.create({
  container1: {
      flex: 1,
      backgroundColor: '#fff',  
    },
    banner:{
      width: '100%',
      height: 250,
      alignItems: 'center',
      justifyContent: 'center',  
    },
    txt1:{
      fontFamily: 'Cochin',
      fontSize: 26,
      color: '#fff',
      fontWeight: '700',
    },
    btn1:{
      marginTop: 30,
      marginBottom: 20,
      marginLeft: 20,
      marginRight: 20,
      padding: 5,
      backgroundColor: 'rgba(234, 162, 162,0.8)',

    },
    buttonText:{
      fontFamily: 'Cochin',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    },
    cont:{
      flex: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
      container:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#ffccbc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius:3,
        elevation:1,
        alignSelf:'center',
        padding: 25,
        backgroundColor: 'rgba(234, 162, 162,0.5)',
        marginBottom: 50,
        marginTop: 50,
      },
    
});