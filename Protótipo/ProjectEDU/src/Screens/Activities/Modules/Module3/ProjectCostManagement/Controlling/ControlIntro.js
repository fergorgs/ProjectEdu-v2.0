import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation'
import LessonHeader from '../../../LessonHeader.js'

//Project Cost Management - Module Control Costs - Introduction
class  PCM_ControlCostIntroScreen extends React.Component {
    
  render() {
  
    return (
      //Swiper for the Screens
      <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Introduction */}
    <View style={{
           flex:1,
           width:Dimensions.get("window").width,
           justifyContent: 'center',
           alignItems:"center",
           marginTop:-70,
           backgroundColor:"#0abde3"
        }}>
          <View style = {{alignItems:"center"}}>
            <Text style = {{textAlign:"center",fontSize:40}}>
              Introduction
            </Text>
          </View>
          
        </View>
      
      {/*1th Screen */}
      <View style={styles.container}>

          <View style = {{ alignItems:"center"}}>
            <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
          </View>
          
          <Text style={styles.textTitle}>
             Controlling the Costs
          </Text>
          <Text style={styles.textInfo}>
            Provides the means to recognize variance, from the plan
            in order to take corrective action, and minimize risk.
          </Text>
          <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://managecasa.com/wp-content/uploads/2018/09/canstockphotocosts-700x460.jpg'}}
            />
          </View>  
  
        </View>
        
        {/*2th Screen */}
        <View style={styles.container}>
          <View style = {{ alignItems:"center"}}>
            <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
          </View>
          
  
          <Text style={styles.textTitle}>
             Decomposition Process
          </Text>
          
          <View style = {{marginTop:40}}>
            <Text style={styles.textInfo}>
                Inputs
            </Text>
            <Text style={styles.textInfo}>
                Tools and Techniques
            </Text>
            <Text style={styles.textInfo}>
                Outputs
          </Text>
  
          </View>
      
          <View style = {{marginTop:50}}>
            <Image
                resizeMode = 'stretch'
                style={{
                    width:350,
                    height:200
                }}
                source={{uri: 'https://i0.wp.com/www.whatispmp.com/wp-content/uploads/2018/02/7-3-Control-Costs-Process-Decomposition.png?resize=800%2C330&ssl=1'}}
            />
          </View>
  
        </View>
  
      {/*Last Screen - Project Cost Management - Module Control Costs - Introduction */}
        <View style={{
          flex:1,
          width:Dimensions.get("window").width,
          justifyContent: 'center',
          alignItems:"center",
          marginTop:-60,
          backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-100, alignItems:"center",}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button - Project Cost Management - Module Control Costs - Inputs */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("PCM_ControlCostInputs")}>
              <Text style={styles.buttonText}>Continue studying</Text>
          </TouchableHighlight>
          
      </View>

        </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:Dimensions.get("window").width,
        alignItems:"center",
    },
      textInfo:
      {
        textAlign:'center',
        fontSize:20,
        margin:10,
        marginTop:20,
        color:"white",
        backgroundColor:"#54a0ff"   
      },
      textTitle:{
        textAlign:'center',
        fontSize:25,
        marginTop:10,
        marginBottom: 5
      },
      containerImages:{
        justifyContent:'space-around',
        flexDirection:'row',
        alignItems: 'center',
    },
      infoImage:{
          width: 150, 
          height: 100
      },
      textSubTitle:{
        textAlign:'center',
        fontSize:20,
        margin:5
      },
      button: {
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0
      },
      buttonPress: {
        borderRadius: 0, 
        marginLeft: 0, 
        marginRight: 0, 
        marginBottom: 0,
        backgroundColor:"#f40331"
      },
      modalContainer:{
        backgroundColor:"#ffffff",
        flex:1,
        alignItems: 'center',
        marginTop:200
      },
      infoImageOverlay:{
        width: 300, 
        height: 300,
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,
      marginBottom:40,
      width:280,
      borderRadius:30,
    },
    buttonText: {
      color: 'white',
    },
    activitiesButton: {
      backgroundColor: "#3498db",
    },
  });

    
export default PCM_ControlCostIntroScreen
  
  