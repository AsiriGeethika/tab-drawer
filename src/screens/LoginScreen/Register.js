import { StyleSheet, View,TouchableOpacity, TextInput, Button,KeyboardAvoidingView, Text, Alert, ScrollView } from 'react-native';
import React, { Component} from 'react';
import CustomHeader from '../../components/Header/Header';


class Register extends Component { 
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super()
    this.state = {
        Name: '',
        Username: '',
        Email: '',
        Telephone: '',
        Address: '',
        Password: '',
        UserRoll:''
    }
  }
 
UserRegistrationFunction = () =>{
 
  fetch('http://10.10.24.184:8080/api/auth/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name : this.state.Name,
        username: this.state.Username,
        email: this.state.Email,
        telephone: this.state.Telephone,
        address: this.state.Address,
        password: this.state.Password,
        userRoll:"customer"
  
    })
    
  
  }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.success === true)
          {
            Alert.alert(JSON.stringify(responseJson.message));
              this.props.navigation.navigate('Profile'); 
          }
          else{
            Alert.alert(JSON.stringify(responseJson.message));
              this.props.navigation.navigate('Reg');
          }  
        }).catch((error) => {
          console.error(error);
        });
      }

  render() {
    return (
      //<KeyboardAvoidingView>
      <ScrollView style={styles.Main}>
        <CustomHeader/>
      <View style={styles.MainContainer}>
      <Text style= {styles.title}>Customer Registration</Text>
      <TextInput
          placeholder="Enter Your Name"
          onChangeText={name => this.setState({Name : name})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
        <TextInput
          placeholder="Enter User Name"
          onChangeText={username => this.setState({Username : username})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TextInput
          placeholder="Enter User Email"
          onChangeText={email => this.setState({Email : email})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TextInput 
          placeholder="Enter Contact No"
          onChangeText={telephone => this.setState({Telephone : telephone})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TextInput 
          placeholder="Enter User Address"
          onChangeText={address => this.setState({Address : address})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        
 
        <TextInput
          placeholder="Enter User Password"
          onChangeText={password => this.setState({Password : password})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          />
 
        <TouchableOpacity  style={styles.button} onPress={this.UserRegistrationFunction}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity> 
      </View>       
      </ScrollView>
      //</KeyboardAvoidingView>
    );
  }
}
export default Register;
 
const styles = StyleSheet.create({ 
Main:{
  flex: 1,
  backgroundColor: '#fff',
},
MainContainer :{
  alignItems: 'center',
  justifyContent: 'center',
  flex:1,
  backgroundColor: '#fff',
}, 
TextInputStyleClass: {
  textAlign: 'center',
  marginBottom: 7,
  height: 40,
  width: 380,
  borderWidth: 1,
  borderColor: '#2196F3',
  borderRadius: 5 ,
},
title:{
  marginTop: 70,
  fontSize: 28, 
  fontWeight: '600',
  color: "#004D40", 
  textAlign: 'center', 
  marginBottom: 30,
},
buttonText: {
  fontSize: 18,
  fontWeight: '600',
  color: '#ffffff',
  textAlign: 'center',
  marginVertical:8,
},
button: {
  backgroundColor: '#1c313a',
  width: 300,
  borderRadius: 25,
  height: 40,
  marginVertical: 20, 
}
});
