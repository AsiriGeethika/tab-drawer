import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,StyleSheet,Text,Image,ScrollView,TouchableOpacity} from 'react-native';
import {Button,Body,Left,Icon,Right} from "native-base";
import CustomImage from './CustomImage';


const data=[
    {
       rate:'50',
       photoUrl:'csfsd.png',
       name:'Ladies Shoes',
       startDate:'15th Dec',
       endDate: '31st Dec',
       oldPrice: '3500 LKR',
       newPrice:'1750 LKR'
    },

    {
        rate:'20',
        photoUrl:'csfsd.png',
        name:'Nike Sports Shoes',
        startDate:'15th Dec',
        endDate: '31st Dec',
        oldPrice: '3500 LKR',
        newPrice:'1750 LKR'
     },

     {
        rate:'30',
       photoUrl:'csfsd.png',
       name:'Nike Sports Shoes',
       startDate:'15th Dec',
       endDate: '31st Dec',
       oldPrice: '3500 LKR',
       newPrice:'1750 LKR'
     }
]

class ViewCard extends Component{
    constructor(props){
        super(props);
    } 

     render(){
        let View_Card=data.map((val, key)=>{
            return(
            //     <View key={key} style={styles.item} >
            //       {/* <View style={styles.col1}> */}
            //     <Text style={styles.add}>{val.offer}</Text>
            //     {/* <CustomImage imageSource={require('../Images/shirt.jpg')}/> */}
            //     <Text style={styles.item}>{val.name}</Text>
            //     <Text>{val.duration}</Text>
            //     <Text style={styles.add2}>{val.savePrice}</Text>
            //     <Text></Text>
            // {/* </View> */}
            //     </View>

                <View key={key} style={styles.col2}  >
                <Text style={styles.add}>{val.rate}% Off</Text>
                <CustomImage imageSource={require('./../Images/Shoe.jpg')}/>
                <Text style={styles.item}>{val.name}</Text>
                <Text>From {val.startDate} To {val.endDate}</Text>
                <Text style={styles.add1}>{val.oldPrice}</Text>
                <Text style={styles.add2}>{val.newPrice}</Text>
                
                </View>
            )
            
        
        })

        return(
            <ScrollView>
                {View_Card}
            </ScrollView>
         )
     }
}
 
export default ViewCard;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#0B0943', 
    },
    container1:{
        flex: 2,
        flexDirection: 'column',
        flexWrap: 'wrap',
        margin: 5,
        marginBottom: 5,
        
    },
    container2:{
        flex: 2,
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginBottom: 5,
        margin: 5, 
    },
    col1:{
      flex: 1,
      padding:5,
      borderColor:'#0B0682',
      borderWidth: 2,
      marginBottom: 10,
      width:'100%',
      alignItems: 'center',
      backgroundColor: '#fff',
      
    },
    col2:{
      flex: 1,
      padding:5,
      borderColor:'#0B0682',
      borderWidth: 2,
      marginBottom: 10,
      width:'100%',
      alignItems: 'center',
      backgroundColor: '#fff',
      
    },
    contentBanner:{
        width: '100%',
        alignItems: 'center',
        justifyContent:'center',
        padding: 5,
    },
    add:{
      fontFamily: 'Cochin',
      fontSize: 30,
      color: '#fff',
      fontWeight: 'bold',
      alignItems: 'flex-start',
      backgroundColor: '#d50000',
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 10,
      paddingTop:10,
      marginBottom: 10,
      marginTop: 5,
      
    },
    add1:{
      fontFamily: 'Cochin',
      fontSize: 20,
      color: '#3E4551',
      fontWeight: 'bold',
      textDecorationLine: 'line-through', 
      textDecorationStyle: 'solid',
      alignItems: 'center',
      paddingBottom: 5,
      
    },
    add2:{
      fontFamily: 'Cochin',
      fontSize: 20,
      color: '#d50000',
      fontWeight: 'bold',
      alignItems: 'center',
      paddingBottom: 5,
    },
    item:{
      fontFamily: 'Cochin',
      fontSize: 18,
      color: '#1C2331',
      fontWeight: '500',
      alignItems: 'center',
      paddingBottom: 5,
      marginTop: 10,
    },
  
  });
  