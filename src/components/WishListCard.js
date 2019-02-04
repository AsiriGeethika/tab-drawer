import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,StyleSheet,Text,Image,ScrollView,TouchableOpacity} from 'react-native';
import {Button,Body,Left,Icon,Right} from "native-base";
import CustomImage from './CustomImage';
import axios from 'axios';
const host = require('./../../src/config/config')

const data=[
    {
        photoUrl:'csfsd.png',
        name:'Ladies Shoes',
        newPrice:'1750 LKR'
    },

    {
        photoUrl:'csfsd.png',
        name:'Nike Sports Shoes',
        newPrice:'1750 LKR'
     },

    {
        photoUrl:'csfsd.png',
        name:'Nike Sports Shoes',
        newPrice:'1750 LKR'
    }
]

class ViewCard extends Component{
    constructor(props){
        super(props);
        this.state={
            // photoUrl:'',
            // name:'',
            // newPrice:''
        }
    }

    componentDidMount(){
        this.getSingleJob()
    }
    
    getSingleJob(){
          fetch(host.config.hostname+'/api/wishList/WishLists/2', {
            method: 'GET',
           headers: {
              'Content-Type': 'application/json'
            },    
        }).then((response) => {
            console.log(response);
            return response.json()
        })
          .then((res) => {
                console.log(res)
                this.setState({data:res})
            })
     .done();
      
      }

     render(){
        let View_Card=data.map((val, key)=>{
            return(
                <View key={key} style={styles.col2}  >
                    <CustomImage imageSource={require('./../Images/Shoe.jpg')}/>
                    <Text style={styles.item}>{val.name}</Text>
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
  