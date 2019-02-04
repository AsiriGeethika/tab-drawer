//category category page

import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,Text,StyleSheet,TouchableOpacity,AsyncStorage,ActivityIndicator} from 'react-native';
import CustomHeader from '../../components/Header/Header';
// import FoodView from '../../components/foodView/FoodView';
import SelectItemView from '../../components/selectItemView/SelectItemView';
 
class SelectItem extends Component{
constructor(props){
    super(props);
    this.state=({
        name:'',
        id:'',
        isLoading:true
    })


}

componentDidMount(){
    console.log("SelectItems ******");
    this.getData()
}

// async getData(){
//     console.log("I am in select Item ");
// }

async getData(){

    console.log("I am in selectItem in getData");
    try{
        let name=await AsyncStorage.getItem("category_name");
        let id=await AsyncStorage.getItem("category_id");
        console.log("get async storage "+name+" "+id);
        this.setState({
            name:name,
            id:id,
            isLoading:false
        })
        console.log("get async storage in state in select item "+this.state.name+" "+this.state.id+" "+this.state.isLoading);


    }catch(error){
        console.log("in dataHandler at selectItem ",error);
    }
}

render(){
    // console.log("this.state.isLoading "+this.state.name)
    // console.log("this.state.isLoading "+this.state.isLoading)
    var name=this.state.name
    if(this.state.isLoading){
    // if(true){
        console.log("Name ********** !!!!!!!!!!!!");

        return(
            <View>
                <ActivityIndicator size="large" color="red" />
            </View>

        )
    }else{

    return(
        <View style={styles.container1}>
            <CustomHeader/>

            <ScrollView>

              <ImageBackground source={require('./../../Images/cate.jpg')} style={styles.banner}>
              <View style={styles.container}>
                  <Text style={styles.txt1}>{name}</Text>
                  <View style={styles.cont}>
                    <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Subscribe</Text>
                    </TouchableOpacity>
                  </View>
              </View>
        </ImageBackground>

          <SelectItemView />

            </ScrollView>
            
        </View>        
     )
    }
 
}
}
 
export default SelectItem;


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
          backgroundColor: 'rgba(170, 169, 177,0.5)',
          marginBottom: 50,
          marginTop: 50,
        },
      
});