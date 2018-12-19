import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,Text,StyleSheet,TouchableOpacity,} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class TabScreen2 extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
            <ScrollView style={styles.container1}>
        <CustomHeader/>
          <ImageBackground source={require('./../../Images/prof.png')} style={styles.banner}>
              <View style={styles.container}>
                  <Text style={styles.txt1}>My Account</Text>
                  <View style={styles.cont}>
                  <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Orders')}>
                    <Text style={styles.buttonText}>Orders</Text>
                  </TouchableOpacity>
            <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Wish')}>
              <Text style={styles.buttonText}>Wish List</Text>
            </TouchableOpacity>
            </View>
              </View>
        </ImageBackground>
        </ScrollView>
         )
     }
}
 
export default TabScreen2;


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
        padding: 25,
        marginBottom: 30,
        marginTop: 30,
      },
});