import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation'
import LessonHeader from '../../../LessonHeader.js'

//Project Cost Management - Module Control Costs - Outputs
class PCM_ControlCostOutputsScreen extends React.Component {
     
    render() {
  
    return (
    //Swiper for the Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
    {/*Initial Screen - Outputs */}
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
            Outputs
          </Text>
        </View>
        
      </View>
      
      {/*1th Screen */}
      <View style={styles.container}>
        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>

        <Text style={styles.textTitle}>
          Outputs
        </Text>
        <Text style={styles.textInfo}>
          Work Perfomance Information
        </Text>
        <Text style={styles.textInfo}>
          Cost Forecasts
        </Text>
        <Text style={styles.textInfo}>
          Change Requests
        </Text>
        <Text style={styles.textInfo}>
          Project Management Plan Updates
        </Text>
        <Text style={styles.textInfo}>
          Project Document Updates
        </Text>
        <View style={styles.containerImages}>
          <Image
              resizeMode='contain'
              style={{
                width: 250, 
                height: 250
              }}
              source={{uri: 'https://3.bp.blogspot.com/-hh062BRLH_A/Wq24w680M0I/AAAAAAAAubU/oWO9r7S4oY8Yn-bgojyMwjaixWJq-P_ngCLcBGAs/s320/SETA%2B12.fw.png'}}
          />
        </View>
      </View>
      {/*2th Screen */}
      <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Work Perfomance Information
          </Text>
          <Text style={styles.textInfo}>
            The calculated CV, SV,CPI, SPI, SPI, TCPI, and
            VAC,for WBS components, in particular the work 
            packages and control accounts, are documented and
            communicated to stakeholders.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:5
                }}
                source={{uri: 'https://2.bp.blogspot.com/_sUIZr_HLePk/SrN7yywdyCI/AAAAAAAAA9k/jdP2od6csKw/s400/Performance_Reports_Lumaxart.jpg'}}
            />
        </View>  
    </View>
    {/*3rd Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Cost Forecasts
          </Text>
          <Text style={styles.textInfo}>
            Either, a calculated Estimate At Completion(EAC)
            value, or a bottom-up EAC value is documented, and
            communicated to stakeholders.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:30
                }}
                source={{uri: 'http://185.87.220.131/~nozeyparkers/wp-content/uploads/2016/02/forecast.jpg'}}
            />
        </View>  
    </View>
    {/*4th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Change Requests
          </Text>
          <Text style={styles.textInfo}>
            An analysis of project perfomance, may result
            in a change request to the cost baseline, or other
            components of the project management plan.
          </Text>
        <View style={styles.containerImages}>
            <Image
                resizeMode = "contain"
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://cccapplyproject.org/images/Backlog-Grooming.png'}}
            />
        </View>  
    </View>

    {/*5th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Control Costs' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Project Management Plan Updates
          </Text>
          <Text style={styles.textInfo}>
            Changes to the cost baseline are incorporated, in
            response to approved changes in scope, activity
            resources, control thresholds or cost estimates.
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:300,
                    marginTop:50
                }}
                source={{uri: 'https://img.bhs4.com/b3/8/b38e8d919b5d030413b4b3428277c38bdf3da6bb_large.jpg'}}
            />
        </View>  
    </View>

    {/*6th Screen */}
    <View style={styles.container}>

        <View style = {{ alignItems:"center"}}>
          <LessonHeader centerText='Determine the Budget' navigation={this.props.navigation}/>
        </View>
          
          <Text style={styles.textTitle}>
            Project Document Updates
          </Text>
          <Text style={styles.textSubTitle}>
            It includes:
          </Text>
          <Text style={styles.textInfo}>
            Cost estimates
          </Text>
          <Text style={styles.textInfo}>
            Basis of estimates
          </Text>
        <View style={styles.containerImages}>
            <Image
                style={{
                    width:350,
                    height:200,
                    marginTop:50
                }}
                source={{uri: 'https://executivecareerbrand.com/wp-content/uploads/2018/06/update-1672346_640.png'}}
            />
        </View>  
    </View>

      {/*Last Screen - Project Cost Management - Module Control Costs - Outputs */}
      <View style={{
        flex:1,
        width:Dimensions.get("window").width,
        justifyContent: 'center',
        alignItems:"center",
        marginTop:-70,
        backgroundColor:"#97CAE5"
      }}>
        <View style = {{marginTop:-90, alignItems:"center",}}>
          <LessonHeader centerText='Activities' navigation={this.props.navigation}/>
        </View>
        
        <View style = {{alignItems:"center",marginTop:40}}>
          <Icon 
              name='work'
              size = {300}
          />
        </View>
          {/*Button Project Cost Management - Module Control Costs - Activities */}
          <TouchableHighlight style={[styles.buttonContainer, styles.activitiesButton]} 
            onPress={() => this.props.navigation.navigate("ControlCostsActivities")}>
              <Text style={styles.buttonText}>Continue to Activities</Text>
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

    
export default PCM_ControlCostOutputsScreen