import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {View,StyleSheet,Text,Image} from 'react-native';
import {Button,Body,Left,Icon,Right} from "native-base";

const data=[
    {
       offer:'Buy 2 Free 1',
       image:'csfsd.png',
       name:'Nike Sports Shoes',
       savePrice:'Save 1750 LKR'
    }
]

class ViewCard extends Component{
    constructor(props){
        super(props);
    } 

     render(){
        let View_Card=data.map((val, key)=>{
            return(
                <View key={key} >
                  <View style={styles.col1}>
                <Text style={styles.add}>Buy 2 Free 1</Text>
                <CustomImage imageSource={require('../Images/shirt.jpg')}/>
                <Text style={styles.item}>Nike Sports Shoes</Text>
                <Text style={styles.add2}>Save 1750 LKR</Text>
            </View>
                </View>
            )
            
        
        })

        return(
            <View>
                {View_Card}
            </View>
         )
     }
}
 
export default ViewCard;


const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#33b5e5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
       
      },
      img1:{
        width:40,
        height:40
      },
      txt:{
        fontSize:35,
        marginLeft:10,
        fontWeight: "600",
        fontStyle: 'italic',
        color:'#fff'
      }
});