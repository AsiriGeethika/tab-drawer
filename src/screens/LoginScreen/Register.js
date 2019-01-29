import { StyleSheet, View,TouchableOpacity, TextInput, Button, Text, Alert, ScrollView } from 'react-native';
import React, { Component} from 'react';
import CustomHeader from '../../components/Header/Header';


class Register extends Component { 
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super()
    this.state = {
        name: '',
        username: '',
        email: '',
        telephone: '',
        address: '',
        password: ''
    }
  }
 
UserRegistrationFunction = () =>{
 
  fetch('http://10.10.24.184/UserP/user_registration.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name : this.state.name,
        username: this.state.username,
        email: this.state.email,
        telephone: this.state.telephone,
        address: this.state.address,
        password: this.state.password
  
    })
    
  
  }).then((response) => response.json())
        .then((responseJson) => {
  // Showing response message coming from server after inserting records.
          Alert.alert(responseJson);  
        }).catch((error) => {
          console.error(error);
        });
      }

  render() {
    return (
      <ScrollView style={styles.Main}>
        <CustomHeader/>
      <View style={styles.MainContainer}>
      <Text style= {styles.title}>Customer Registration</Text>
      <TextInput
          placeholder="Enter Your Name"
          onChangeText={name => this.setState({name : name})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
        <TextInput
          placeholder="Enter User Name"
          onChangeText={name => this.setState({username : username})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TextInput
          placeholder="Enter User Email"
          onChangeText={email => this.setState({email : email})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TextInput 
          placeholder="Enter Contact No"
          onChangeText={contact => this.setState({telephone : telephone})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />

        <TextInput 
          placeholder="Enter User Address"
          onChangeText={address => this.setState({address : address})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        
 
        <TextInput
          placeholder="Enter User Password"
          onChangeText={password => this.setState({password : password})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          />
 
        <TouchableOpacity  style={styles.button} onPress={this.UserRegistrationFunction}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity> 
      </View>       
      </ScrollView>
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
