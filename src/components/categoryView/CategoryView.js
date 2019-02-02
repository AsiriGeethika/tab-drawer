import React, { Component } from 'react';
import {View,ScrollView,ImageBackground,
    Text,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    AsyncStorage
} from 'react-native';
import CustomHeader from '../../components/Header/Header';
import { withNavigation } from 'react-navigation'

class DrawerScreen4 extends Component{
constructor(props){
    super(props);
    this.state={
        data:null,
        isLoading:true
    }

}

componentDidMount(){
    console.log("CategoryView ******");
    console.log(this.props.navigation);
    this.getCategory()
}

getCategory(){
 
    fetch(' http://10.10.24.184:8080/api/home/allCategory', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }    
    }).then((response) => response.json())
      .then((res) => {
        console.log("I am in getCategory  ",res)
        this.setState({
            data:res,
            isLoading:false
        })
        console.log("Set state data ", this.state.data);
        console.log("Set state isLoading ", this.state.isLoading);
        })
        .done();
  }


    //  render(){
    //     return(
    //     <View style={StyleSheet.container}>
    //     <CustomHeader/>
    //     <ScrollView>
    //         <ImageBackground source={require('./../../Images/Background.jpg')} style={{width:'100%', height:'100%'}}>
    //             {/* <View style={styles.cont}>
    //                 <Text style= {styles.TextComponentStyle}>Categories</Text>
    //                 <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Cloth')}>
    //                     <Text  style= {styles.Textstyle}>Clothing</Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Food')}>
    //                     <Text  style= {styles.Textstyle}>Food</Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Fin')}>
    //                     <Text  style= {styles.Textstyle}>Finance</Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Serv')}>
    //                     <Text  style= {styles.Textstyle}>Services</Text>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity style={styles.btnn} onPress={() => this.props.navigation.navigate('Other')}>
    //                     <Text  style= {styles.Textstyle}>Other</Text>
    //                 </TouchableOpacity>
    //             </View> */}
    //             <Text>Work..!</Text>
    //         </ImageBackground>
    //     </ScrollView>
    //     </View>
    //      )
    //  }

    async dataHandler(name, id){
        console.log("I am at DataHandler "+name+" "+id);

        try{
            await AsyncStorage.setItem("category_name", name.toString());
            await AsyncStorage.setItem("category_id", id.toString());
            console.log("set async storage ");

        }catch(error){
            console.log("in dataHandler at CategoryView ",error);
        }
        this.props.navigation.navigate('SelectItem')
    }

     render(){
        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator size="large" color="red" />
                </View>

            )
        }else{
            console.log("getCategoryis else");
            console.log(" getCategoryis in state ", this.state.data);
            let View_Card=this.state.data.map((val, key)=>{
               return(
                   //Style here
               <View key={key} >
                    <TouchableOpacity
                        onPress={() => this.dataHandler(val.name, val.id)}
                        
                        // this.props.navigator.navigate
                    >
                        <Text>{val.name}}</Text>
                    </TouchableOpacity>
               </View>
               //style end
               )
        })
    
        return(
            <ScrollView>
                <Text>getCategoryis</Text>
                {View_Card}
            </ScrollView>
         )
        }
     
    }
}
 
export default withNavigation(DrawerScreen4);


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