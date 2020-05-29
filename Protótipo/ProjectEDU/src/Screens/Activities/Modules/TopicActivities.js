import React from 'react';
import { View,ScrollView,StyleSheet,Image,Text,Dimensions,Alert} from 'react-native';
import {Header,Card,Button} from 'react-native-elements'
import { createSwitchNavigator} from 'react-navigation'
import Modal from 'react-native-modal'
import * as firebase from 'firebase'
import moment from 'moment'


class QuestionScreen extends React.Component {

//Receive user information from the database
// componentDidMount(){
//   let userid = firebase.auth().currentUser.uid
//   let usersRef = firebase.database().ref("/users/"+userid);
  
//   usersRef.on("value", (data) => {
//     let points = (data.val() && data.val().points)
//     this.setState({points:points})
//     this.setState({progress:data.val().progress})
//   });
// }
 //Function that analyses if the question is correct
  // onPressConfirm()
  // {
  //   //If the answer is corret go to another question
  //   if(this.state.isCorrect==true)
  //   {
  //     //this.onUpdate().then(()=>{
  //       this.finishSubTopic("Controlling", "CON_Activities")
  //     //})
  //   }
  //   //Shows a modal - Wrong Answer
  //   else
  //   {
  //     this.setState({ isVisible:true})
  //   }
  // }
   //Functions updates user information
  // onUpdate()
  // {
  //     let points = this.state.points;
  //     points = points + 200;
  //     pointsLeaderboard = (-1)*points
  //     let userid = firebase.auth().currentUser.uid
  //     let usersRef = firebase.database().ref("/users/"+userid);
  //     var usersRefLeaderboard = firebase.database().ref("/leaderbords/"+userid);
  //     usersRef.update({
  //       points:points
  //     });
  //     //Update leaderboard table
  //     usersRefLeaderboard.update({
  //       points:pointsLeaderboard
  //     })
  //       //Checkmark Module - Project Cost Management - Control Costs
  //     firebase.database().ref("/module3/Project Cost Management/" + userid + "/Controlling").update({
  //       checkmark:true
  //     })
  //     //Updating the table statistics
  //     var upStatistic = firebase.database().ref("/statistics/" +userid)
  //     upStatistic.once("value",snapshot =>
  //     {
  //         //Checks if the day exist at the table statistics
  //       if(snapshot.hasChild(moment(new Date()).format('YYYY-MM-DD')))
  //       {
  //          //Update the points
  //           let auxPoints = snapshot.child(moment(new Date()).format('YYYY-MM-DD')).val().points
  //           auxPoints = auxPoints + 200
  //           firebase.database().ref("/statistics/" +userid + "/" + moment(new Date()).format('YYYY-MM-DD'))
  //           .update({
  //             points:auxPoints
  //           })
  //       }
  //       else
  //       {
  //            //Create the day at the table statistics
  //         //Initialize table
  //         firebase.database().ref("/statistics/" +userid + "/" + moment(new Date()).format('YYYY-MM-DD'))
  //           .set({
  //             points:200,
  //             date:moment(new Date()).format('MM-DD')
  //           })
  //       }
  //     })
  // }

  moveToNextQuestion(){

    this.setState({rightIsVisible:false})

    if(this.state.curExercise == this.state.numOfExercises-1)
      this.props.navigation.navigate("Final")
    else
      this.setState({curExercise: this.state.curExercise+1})
  }

  onPressConfirm(index, target)
  {
  
    if(index == this.state.correct)
      this.setState({rightIsVisible:true})

    else
    {
      //console.log("Wrong anwser")
      //target.style = this.styles.wrongAnswer
      this.setState({wrongIsVisible:true})
    }
  }

  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;
    const topicTitle = params ? params.topicTitle : null;
    const exercises = params ? params.exercises : null;

    //exercises = [...exercises]

    exSize = 0
    for(var k in exercises)
      exSize++

    this.state = {
      curExercise:0,
      curOptionSelected:-1,
      topicTitle:topicTitle,
      exercises:exercises,
      correct:0,
      isVisible:false,
      numOfExercises: exSize,
    }
  }
   
 
  render() {

    return (
      
      <View>
        {/*--------------Lesson Header---------------*/}
            <Header
            backgroundColor = '#1e272e'
            leftComponent={{
            icon: 'clear',
            color: '#fff',
            onPress: () => Alert.alert(
                'Warning',
                'If you leave, your progress will be lost.',
                [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress:  () => this.props.navigation.navigate("ListSubModule")},
                ],
                {cancelable: false},
            ),
            }}
            centerComponent={{ text: 'Activity', style: { color: '#fff' } }}
            />

      {/*----------Lesson Body-----------*/}

      <ScrollView alwaysBounceVertical={true} bounces={true}>
        {/*Question*/}
        <Text style={styles.textTitle} >
              {this.state.exercises[this.state.curExercise].text}
        </Text>

        {/*Alternatives*/}
        {this.state.exercises[this.state.curExercise].exercices.map((alternative, index) => {

          return (
            <Card>
              <Button 
                title={alternative.subText}
                onPress = {(event) => this.onPressConfirm(index, event.target)}
                //onPress = {this.setState({curOptionSelected: index})}
                //buttonStyle={
                  //this.state.isPressed1
                    //? styles.buttonPress
                    //: styles.button
                //}
                />
            </Card>
          )
        })}

        {/*Wrong Answer Modal*/}
        <Modal isVisible={this.state.wrongIsVisible}>
          <View style={styles.modalContainer}>
            <Image
                style={styles.infoImageOverlay}
                source={{uri: 'https://media.istockphoto.com/illustrations/try-again-label-illustration-id505716206'}}
            />
            <Button
              onPress = {() => this.setState({wrongIsVisible:false})}
              buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:25 }}
              title='Go Back' 
            />
          </View>
        </Modal>

        {/*Right Answer Modal*/}
        <Modal isVisible={this.state.rightIsVisible}>
          <View style={styles.modalContainer}>
            <Image
                style={styles.infoImageOverlay}
                source={{uri: 'https://www.kindpng.com/picc/m/6-69441_transparent-certo-png-right-answer-icon-png-png.png'}}
            />
            <Button
              onPress = {() => this.moveToNextQuestion()}
              buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:25 }}
              title='Next question' 
            />
          </View>
        </Modal>
      </ScrollView>
    </View>
    );
  }
}







//Final Screen - Shows user reward for finishing the module
class FinalScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'clear',
          color: '#fff',
          //onPress: () => this.props.navigation.navigate("ListCostManagement")
          }}
          centerComponent={{ text: 'Final Report', style: { color: '#fff' } }}
        />  
        <View style = {{
            marginTop:20,
            alignItems: 'center',
            margin: 10,
        }}>
          <Image
              resizeMode = "contain"
              style={{
                width: 300, 
                height: 300,
            }}
              source={{uri: 'https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1781780/300/200/m1/fpnw/wm0/8-.jpg?1502353731&s=c8f94b3997dc579040e292f3b4a4edd2'}}
            />
        </View>
        <Text style = {{
          textAlign: 'center',
          fontSize:20,
          margin: 30,
          }}>
          You have won 200 points
        </Text>
        <Button
            onPress={() => this.props.navigation.navigate("ListSubModule")}
            buttonStyle={{borderRadius: 20, marginLeft: 20, marginRight: 20, marginTop:20,backgroundColor:'#10ac84'}}
            title='Done' />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrongAnswer: {
    backgroundColor: '#ff7f7f',
  },
  rightAnswer: {
    backgroundColor: 'green',
  },
  container: {
    //justifyContent: 'center',
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
      fontSize:20,
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
    buttonContainer:{
        alignItems:"center",
        marginBottom:15
},
});
export default createSwitchNavigator(
  {
    /*PCM_ControlCostsActivity1:      PCM_ControlCostsActivity1Screen,
    PCM_ControlCostsActivity2:      PCM_ControlCostsActivity2Screen,*/
    Question:      QuestionScreen,
    Final:          FinalScreen

  },
  {
    headerMode: 'none'
  }
);