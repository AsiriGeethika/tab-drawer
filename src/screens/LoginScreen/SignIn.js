import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity,TextInput, View, Alert, Button, Text} from 'react-native';
import { StackNavigator } from 'react-navigation';

 
class LoginActivity extends Component {
  static navigationOptions = {
    header: null,
  };
 
  constructor(props) {
    super(props)
    this.state = {
      UserEmail: '',
      UserPassword: ''
    }
  }
 
UserLoginFunction = () =>{
  const { UserEmail }  = this.state ;
  const { UserPassword }  = this.state ;
 
    fetch('http://10.10.27.61/UserP/User_Login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        email: UserEmail,
        password: UserPassword
      })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate('Second', { Email: UserEmail });
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
 
  }
 
  render() {
    return (
 
<View style={styles.MainContainer}>
        
        <Text style= {styles.TextComponentStyle}>User Login</Text>
        <TextInput 
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Email"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
 
          onChangeText={UserPassword => this.setState({UserPassword})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
 
          secureTextEntry={true}
        />
 
 <TouchableOpacity style={styles.button} onPress={this.UserLoginFunction}>
            <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Button title="Back to Home" 
            onPress={()=>this.props.navigation.navigate('Home')}
            style={styles.btn}/>


      
  
 
</View>
            
    );
  }
}
 
// Creating Profile activity.
class ProfileActivity extends Component
{
 
  // Setting up profile activity title.
   static navigationOptions =
   {
      header: null,
    
   };
    
 
   render()
   {
 
     const {goBack} = this.props.navigation;
 
      return(
         <View style = { styles.MainContainer }>
 
            <Text style = {styles.TextComponentStyle}> { this.props.navigation.state.params.Email } </Text>
 
            <Button title="Click here to Logout" onPress={ () => goBack(null) } />
 
         </View>
      );
   }
}
 
export default MainProject = StackNavigator(
{
   First: { screen: LoginActivity },
   
   Second: { screen: ProfileActivity }
 
});
 
const styles = StyleSheet.create({
 
MainContainer :{
alignItems: 'center',
justifyContent: 'center',
flex:1,

backgroundColor: '#80DEEA',
},
 
TextInputStyleClass: {
width: 380,
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',
 
 // Set border Radius.
 borderRadius: 5 ,
 
},
 
TextComponentStyle: {
  fontSize: 28,
  fontWeight: '600',
  color: "#004D40",
  textAlign: 'center', 
  marginBottom: 30
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