import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Image,ImageBackground,AsyncStorage,ActivityIndicator} from 'react-native';
import CustomHeader from '../../components/Header/Header';
 
class TabScreen3 extends Component{
constructor(props){
    super(props);
    this.state=({
        data:null,
        isLoading:true
    })

}
componentDidMount(){
    this.getuser_id();
}

async getuser_id(){    
    console.log("wishlist in getuser_id");
    try{
      var user_details=await AsyncStorage.getItem("user_details");


      console.log("wishlist in getuser_id $$$$$$ ");  
    console.log("wishlist in getuser_id user_details "+ user_details)

    this.setState({
      user_details:user_details,
    })

    console.log("wishlist in getuser_id user_details in state ", this.state.user_details);

    

  }catch(error){
      console.log("in dataHandler login token set ",error);
  }

  this.getOrderlist();
  
}

getOrderlist(){
    console.log("view wish list");

    var user_id=JSON.parse(this.state.user_details).id
    console.log("add Wish List_User_id  "+user_id);

    console.log("view wish list");


   
      fetch(`http://10.10.24.184:8080/api/order/Orders/${user_id}`, {
        method: 'GET',
   
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log("in show wishlist ",responseJson)
    this.orderlistHandler(responseJson);
  })
  }

  orderlistHandler(data){
      console.log("I am in wishlistHandler ", data)
      this.setState({
        data:data,
        isLoading:false
    })

    console.log("show Wishlist in state ",this.state.data);
  }

  deleteorderlist(){
      alert("Pending delete wait for Gera API")
  }

    render(){
        if(this.state.isLoading){
            return(
                <ScrollView style={styles.container1}>
                <CustomHeader/>
           <ImageBackground source={require('./../../Images/OrderScreen.jpg')} style={styles.banner}>
               <View style={styles.container}>
                   <Text style={styles.txt1}>Orders</Text>
                   <View style={styles.cont}>
                   <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Profile')}>
                     <Text style={styles.buttonText}>Profile</Text>
                   </TouchableOpacity>
             <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Wish')}>
               <Text style={styles.buttonText}>Wish List</Text>
             </TouchableOpacity>
             </View>
               </View>
         </ImageBackground>
                <View>
                        <ActivityIndicator size="large" color="red" />
                    </View>
                </ScrollView>  

            )
        }else{
            console.log("View Card is else");
            let View_Card=this.state.data.map((val, key)=>{
        // let View_Card=data.map((val, key)=>{
            return(
                 <View key={key} style={styles.col2}  >
                <Text style={styles.add}>{val.discount}% Off</Text>
                {/* <CustomImage imageSource={require('./../Images/Shoe.jpg')}/> */}
                {/* <CustomImage imageSource={require('https://drive.google.com/file/d/1Sa-95G3S_u7IRRuU1N0rrrxBopwv1lpP/view?usp=sharing')}/> */}
                
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                <Text style={styles.item}>{val.name}</Text>
                {/* str.substring(1, 4); */}
                <Text>From {val.startDate.substring(0,10)} To {val.endDate.substring(0,10)}</Text>
                <Text style={styles.add1}>{val.oldPrice}</Text>
                <Text style={styles.add2}>{val.newPrice}</Text>

                <TouchableOpacity style={{backgroundColor:'red'}}
                    onPress={()=>this.deleteorderlist()}
                >
                    <Text>
                        Delete from order list
                    </Text>
                </TouchableOpacity>
                
                </View>
            )
        })
    
        return(
            <ScrollView style={styles.container1}>
            <CustomHeader/>
           <ImageBackground source={require('./../../Images/OrderScreen.jpg')} style={styles.banner}>
               <View style={styles.container}>
                   <Text style={styles.txt1}>Orders</Text>
                   <View style={styles.cont}>
                   <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Profile')}>
                     <Text style={styles.buttonText}>Profile</Text>
                   </TouchableOpacity>
             <TouchableOpacity style={styles.btn1} onPress={() => this.props.navigation.navigate('Wish')}>
               <Text style={styles.buttonText}>Wish List</Text>
             </TouchableOpacity>
             </View>
               </View>
         </ImageBackground>
            <ScrollView>
                    {View_Card}
                </ScrollView>
            </ScrollView>  
            
         )
        }
     
    }


    }
     
export default TabScreen3;

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
        color: '#000000',
        fontWeight: '900',
      },
      btn1:{
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        padding: 5,
        backgroundColor: 'rgba(166, 239, 30,0.8)',
      },
      buttonText:{
        fontFamily: 'Cochin',
      fontSize: 16,
      color: '#000000',
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
          backgroundColor: 'rgba(166, 239, 30,0.5)',
          marginBottom: 50,
          marginTop: 50,
      },
    })