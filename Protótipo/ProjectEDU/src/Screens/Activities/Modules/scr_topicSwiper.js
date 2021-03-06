import React from 'react';
import {  View,StyleSheet,Dimensions,Image,Text,Alert,TouchableHighlight} from 'react-native';
import {Header,Icon} from 'react-native-elements'
import Swiper from 'react-native-swiper';
import { createDrawerNavigator} from 'react-navigation'
import TopicPage from './TopicPage'
import TopicTitle from './TopicTitle'
import TopicEnd from './TopicEnd'

//Project Cost Management - Module Estimating - Inputs
class  PCM_EstimatingInputsScreen extends React.Component {

  // finishSubTopic(mainTopic, subTopic){

  //   mainTopicIsValid = false
  //   subTopicIsValid = false

  //   //checks if the maintopic and subtopic are non null
  //   if(mainTopic == null || subTopic == null){
  //     alert("Faild to update data base\nMain Topic or Sub Topic null")
  //     return
  //   }

  //   //checks if the main topic exists in the data base and gets its reference
  //   let userid = firebase.auth().currentUser.uid
  //   let userRef = firebase.database().ref("/module3/Project Cost Management/" + userid)

  //   userRef.once('value', (snapshot) => {
  //     if (snapshot.hasChild(mainTopic))
  //       mainTopicIsValid = true
  //   });

  //   if(!mainTopicIsValid){
  //     alert("\nMain topic is undefined\n(" + mainTopic + ") is not a valid argument")
  //     return
  //   }

  //   let topicRef = firebase.database().ref("/module3/Project Cost Management/" + userid + "/" + mainTopic)
    
    
  //   //checks if the sub topic exists in the data base and gets its reference
  //   topicRef.once('value', (snapshot) => {
  //     if (snapshot.hasChild(subTopic))
  //       subTopicIsValid = true
  //   });

  //   if(!subTopicIsValid){
  //     alert("\nSub topic is undefined\n(" + subTopic + ") is not a valid argument")
  //     return
  //   }

  //   let subTopicRef = firebase.database().ref("/module3/Project Cost Management/" + userid + "/" + mainTopic + "/" + subTopic)

  //   //marks the subtopic as completed
  //   subTopicRef.update({checkmark: true})

  //   //checks if all subtopics are completed
  //   allChecked = true
    
  //   topicRef.orderByChild("id").on("child_added", (data) => {
  //     if(data.val().displayTitle != null && !data.val().checkmark){
  //       allChecked = false
  //     }
  //   })

  //   //marks the main topic as completed, if all the subtopics have been completed
  //   topicRef.update({checkmark: allChecked})

  //   this.props.navigation.navigate("ListCostManagement")
  // }
     
    render() {

    const { params } = this.props.navigation.state;
    const topicTitle = params ? params.topicTitle : null;
    const iconcept = params ? params.iconcept : null;

    const temp = iconcept.map((page) => {

      return <TopicPage headerText={topicTitle} pageContent={page} navigation={this.props.navigation}></TopicPage>
    })

    const pages = [<TopicTitle topicTitle={topicTitle}></TopicTitle>]

    for(i = 0; i < temp.length; i++){
      pages.push(temp[i])
    }

    pages.push(<TopicEnd navigation={this.props.navigation}></TopicEnd>)
  
    return (
    //Swiper for the Screens
    <Swiper
        showsButtons={false} 
        autoplay={false}
        loop = {true}
    >
      {pages}

    </Swiper>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:Dimensions.get("window").width,
        //justifyContent: 'center',
        alignItems:"center",
        //marginTop:-20
    },
    containerProgress:{
      marginTop:5,
      alignItems: 'center',
    },
      textInfo:{
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
        fontSize:15,
        marginTop:0,
        marginBottom: 5
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
  
export default PCM_EstimatingInputsScreen