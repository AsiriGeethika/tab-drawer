import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
import CategoryView from '../../components/categoryView/CategoryView'
 
class DrawerScreen4 extends Component{
constructor(props){
    super(props);

} 

componentDidMount(){
    console.log("Category  ******");
    console.log(this.props.navigation);
}
     render(){
         console.log("Hello I am in Categories");
         console.log(this.props.navigation);
        return(
        <View style={StyleSheet.container}>
        <CustomHeader/>
        <ScrollView>
            {/* <ImageBackground source={require('./../../Images/Background.jpg')} style={{width:'100%', height:'100%'}}> */}
                

                <CategoryView />
            {/* </ImageBackground> */}
        </ScrollView>
        </View>
         )
     }
}
 
export default DrawerScreen4;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /*banner:{
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems:'stretch',
    },*/
    TextComponentStyle: {
        fontSize: 28,
        fontWeight: '800',
        color: "#fff",
        textAlign: 'center', 
        marginBottom: 5,
        padding : 10,
    },
    Textstyle: {
        fontSize: 20,
        alignItems: 'center',
        fontWeight: '600',
        color: "#fff",
        textAlign: 'center', 
        margin: 10,
        padding : 10,
    },
    cont:{
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#ffccbc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius:3,
        elevation:1,
        alignSelf:'center',
        padding: 5,
        width: '70%',
        backgroundColor: 'rgba(130, 138, 139,0.5)',
        marginBottom: 30,
        marginTop: 30,
    },
    btnn:{
        width: '70%',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#fff',
        margin: 10,
        borderRadius: 5,
    },

});