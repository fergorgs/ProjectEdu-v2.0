import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation'
import LessonHeader from '../../../LessonHeader.js'

//Project Cost Management - Module Control Costs - Tools and Techniques
class PCM_ControlCostToolsScreen extends React.Component {
     
    render() {
  
    return (
    //Swiper for the Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Tools and Techniques */}
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
            Tools and Techniques
          </Text>
        </View>
        
      </View>
      {/*1th Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center",}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
        
        <Text style={styles.textTitle}>
           Tools and Techniques
        </Text>
        <Text style={styles.textInfo}>
            Earned Value Management(EVM)
        </Text>
        <Text style={styles.textInfo}>
            Forecasting
        </Text>
        <Text style={styles.textInfo}>
           To-Complete Performance Index (TCPI)
        </Text>
        <Text style={styles.textInfo}>
           Perfomance Reviews
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 300, 
                height: 300
              }}
              source={{uri: 'https://optimalidm.com/wp-content/uploads/2019/05/tools-techniques-optimal-idm-1.bmp'}}
          />
        </View>
        
      </View>
      {/*2th Screen */}   
       <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Earned Value Management
          </Text>
          <Text style={styles.textInfo}>
            A technique which helps the project management team
            to assess and measure the project performance e progres.
          </Text>
          <Text style={styles.textInfo}>
            Compares the amount of work that was planned with whats was
            actualy accomplished to determine if cost and schedule performance
            is as planned.
          </Text>
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:350,
                    height:200,
                    marginTop:20
                }}
                source={{uri: 'https://www.projectengineer.net/wp-content/uploads/2016/06/earned-value-management-forecasting.png'}}
            />
        </View>  
    </View>
        {/*3rd Screen */}
         <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Forecasting 
          </Text>
          <Text style={styles.textInfo}>
            Develop a forecast for the estimate at completion(EAC)
            that may differ from the budget at completion(BAC) based
            on the project perfomance.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://22xmcq37bnw82iclyj35wony-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/sales-forecasting-metrics-1024x768.jpg'}}
            />
        </View>  
    </View>
    {/*4th Screen */}
     <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            To-Complete Perfomance Index(TCPI)
          </Text>
          <Text style={styles.textInfo}>
            The calculated projection of cost perfomance that must
            be achieved on the remaining work to meet a specified
            management goal, such as the Budget At Completion (BAC) or
            the Estimate at Completion (EAC).
          </Text>
          <Text style={styles.textInfo}>
            TCPI(under budget) = (BAC-EV)/(BAC-AC)
          </Text>
          <Text style={styles.textInfo}>
            TCPI(over budget) = (BAC-EV)/(EAC-AC)
          </Text>
          <Text style={styles.textInfo}>
            A good TCPI is lower than 1
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:300,
                    height:100,
                }}
                source={{uri: 'https://previews.123rf.com/images/morganka/morganka1509/morganka150900233/46009357-close-up-of-female-accountant-or-banker-making-calculations-savings-finances-and-economy-concept.jpg'}}
            />
        </View>  
    </View>
    {/*5th Screen */}
     <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Perfomance Reviews
          </Text>
          <Text style={styles.textInfo}>
            Compare cost perfomance over time, and the estimates
            of funds needed, to complete the remaining work.
          </Text>
          <Text style={styles.textInfo}>
            Determines whether project performance is improving, or
            worsening over time, by periodically analyzing project
            results.
          </Text>

        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:200,
                    height:150,
                }}
                source={{uri: 'https://cdn-images-1.medium.com/max/1200/1*qkrjlbEBCHmiybWMKGkmvw.png'}}
            />
              <Image
                resizeMode = "contain"
                style={{
                    width:200,
                    height:150,
                }}
                source={{uri: 'https://cdn.wallstreetmojo.com/wp-content/uploads/2018/12/Variance-Analysis.jpg'}}
            />
        </View>  
        
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:300,
                    height:150,
                }}
                source={{uri: 'https://i.udemycdn.com/course/750x422/1025206_6a33_6.jpg'}}
            />
        </View>  
    </View>

                

      {/*Last Screen - Project Cost Management - Module Control Costs - Tools and Techniques  */}
      <View style={{
       flex:1,
       width:Dimensions.get("window").width,
       justifyContent: 'center',
       alignItems:"center",
       marginTop:-70,
       backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-90, alignItems:"center",}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button - Project Cost Management - Module Control Costs - Outputs */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("PCM_ControlCostOutputs")}>
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

    
export default PCM_ControlCostToolsScreen