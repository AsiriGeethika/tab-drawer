import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,Text,StyleSheet,TouchableOpacity,} from 'react-native';
import CustomHeader from '../../components/Header/Header';
import FoodView from '../../components/foodView/FoodView';
 
class Category1 extends Component{
constructor(props){
    super(props);

} 
     render(){
        return(
        <View style={styles.container1}>
            <CustomHeader/>

            <ScrollView>

              <ImageBackground source={require('./../../Images/cate.jpg')} style={styles.banner}>
              <View style={styles.container}>
                  <Text style={styles.txt1}>Food</Text>
                  <View style={styles.cont}>
                    <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Subscribe</Text>
                    </TouchableOpacity>
                  </View>
              </View>
        </ImageBackground>

          <FoodView />

            </ScrollView>
            
        </View>
         ) 
     }
}
 
export default Category1;


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
        fontSize: 30,
        color: '#fff',
        fontWeight: '700',
      },
      btn1:{
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        backgroundColor: 'rgb(205, 14, 14)',
  
      },
      buttonText:{
        fontFamily: 'Cochin',
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
      },
      cont:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
        container:{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#ffccbc',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius:3,
          elevation:1,
          width: '70%',
          alignSelf:'center',
          padding: 25,
          backgroundColor: 'rgba(239, 105, 9,0.5)',
          marginBottom: 50,
          marginTop: 50,
        },
      
});