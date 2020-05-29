import React from 'react';
import { ScrollView, View,StyleSheet,Text } from 'react-native';
import {Header,ListItem} from 'react-native-elements'
import NestedListView, {NestedRow} from 'react-native-nested-listview'
import * as firebase from 'firebase'
import { data } from './data';
import Modal from 'react-native-modal';

//Screen with list with the following modules for Project Cost Management
//Introduction
//Estimating Budget
//Detemine Budget
//Control Costs

class scr_subModuleList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theoryIsVisible: false,
      activitiesIsVisible: false,
      //listData:[],
      //checkCount: 0,
    }
  }
  
  //componentWillMount()
  //{
    // //get reference to module 3
    // let userid = firebase.auth().currentUser.uid
    // let usersRef = firebase.database().ref("/module3/Project Cost Management/" + userid );
    // usersRef.orderByChild("id").on("child_added", (data)=> {
      
    //   //get reference to each main topic in module 3
    //   let subTopicRef = firebase.database().ref("/module3/Project Cost Management/" + userid + "/" + data.val().displayTitle);
    //   let subTopics = [];

    //   //to each sub topic, creates an object and adds it to the subtopics array
    //   subTopicRef.orderByChild("id").on("child_added", (subData) => {

    //     let obj = {title: subData.val().displayTitle, checkmark: subData.val().checkmark, idName: subData.val().idName};
    //     //console.log("title: " + subData.val().displayTitle)
    //     if(obj.title != null){
    //       if(obj.checkmark)
    //         obj.title = "✓  " + obj.title
          
    //         subTopics.push(obj);
    //     }
    //   })

    //   //to each topic, creats an object with the array of subtopics previously created
    //   let obj = {title: data.val().displayTitle, checkmark: data.val().checkmark, items: subTopics}
      
    //   if(obj.checkmark)
    //         obj.title = "✓  " + obj.title

    //   //ads the new topic to topics array (list Data)
    //   let Aux = this.state.listData

    //   Aux.push(obj)

    //   this.setState({listData:Aux})
    // })

    //console.log(this.state.listData)
  //}

  selectNodeStyle(level){

    if(level == 1) 
      return styles.mainNode
    else
      return styles.subNode
  }
  

  getTheoryData(subTopics)
  {
    if(subTopics != null)
    {
      tempData = subTopics.map((subTopic, index)=> {

        if(subTopic.IConceptImpl && subTopic.exercise)
          return ({title: subTopic.concept, 
                   items: [{title: "Theory", id: index, type:"theory"}, 
                            {title: "Activities", id: index, type:"exercise"}],
                   id:null
                  })
        else if(subTopic.exercise)
          return ({title: subTopic.concept, 
            items: [{title: "Activities", id: index, type:"exercise"}],
            id:null
           })
          //return ({title: subTopic.concept, id:index, type:"exercise"})
        else
          return ({title: subTopic.concept, 
            items: [{title: "Theory", id: index, type:"theory"}],
            id:null
           })
      })

      //this.setState({theoryIsVisible: true})
      return tempData
    }
    else
      return [{title: "No theory yet for this module"}]
      //tempData = [{title:'No content yet for this module'}]
  }


  getActivitiesData(subActivities)
  {
    if(subActivities != null){
      //this.setState({activitiesIsVisible: true})
      return [{title: 'Activities'}]
    }
    else
      return [{title: "No activities for this module"}]
  }

  componentDidMount()
  {
    // const { params } = this.props.navigation.state;

    // this.setState({
    //   moduleTitle: (params ? params.moduleTitle : null),
    //   subTopics: (params ? params.subTopics : null),
    //   subActivities: (params ? params.subActivities : null),
    //   //theoryData: this.getTheoryData(subTopics),
    //   //activitiesData: this.getActivitiesData(subActivities),
    // })

    // console.log("from state: " + this.state.moduleTitle)
    // console.log("from params: " + params ? params.moduleTitle : null)
    // // const moduleTitle = params ? params.moduleTitle : null;
    // // const subTopics = params ? params.subTopics : null;
    // // const subActivities = params ? params.subActivities : null;
    
    // this.setState({
    //   theoryData: this.getTheoryData(this.state.subTopics),
    //   activitiesData: this.getActivitiesData(this.state.subActivities),
    // })
    // // this.setState({theoryData: this.getTheoryData(subTopics)})
    // // this.setState({activitiesData: this.getActivitiesData(subActivities)})
  }


  render() {

    const { params } = this.props.navigation.state;

    const moduleTitle = params ? params.moduleTitle : null;
    const subTopics = params ? params.subTopics : null;
    const subActivities = params ? params.subActivities : null;

    const theoryData = this.getTheoryData(subTopics)
    const theoryIsVisible = (theoryData != null)

    console.log("theoryData: " + theoryData)
    console.log("theoryIsVisible: " + theoryIsVisible)

    const activitiesData = this.getActivitiesData(subActivities)
    const activitiesIsVisible = (activitiesData != null)

    //^^^^^^ this whole thing should be in ComponentDidMount, but I lack both the
    //knowledge and the determination required to make it work


    //STATIC DATA ARRAY FOR REFERENCE
    //Each node is represented by an object with a title and 
    //an optional id (used to identify and navegate between topics)
    //Nodes can also have an "item" array, composed of n node objects
    //which represent sublayers of nodes

    /*const data = [{title: '✓  Introduction', 
                     items: [{title: 'Introdutory video', id: 1}, 
                      {title: 'Content overall', id: 2},
                      {title: 'Activities', id: 3}
                  ]},
                  {title: 'Estimating', 
                   items: [{title: 'Types of Costs', id: 4}, 
                      {title: 'Inputs', id: 5},
                      {title: 'Tools and Techniques', id: 6},
                      {title: 'Outputs', id: 7},
                      {title: 'Activities', id: 8}
                  ]},
                  ]*/

    return (
      <ScrollView >

        {/* Concepts division */}
          <View>
            <Header
              backgroundColor = '#1e272e'
              leftComponent={{
                icon: 'arrow-back',
                color: '#fff',
                onPress: () => this.props.navigation.navigate("Module")
              }}
              centerComponent={{ text: moduleTitle + ' topics', style: { color: '#fff' } }}
            />
            <NestedListView
              data={theoryData}
              getChildrenName={(node) => 'items'}
              onNodePressed={(node) => {

                if(node.id != null)
                {
                  if(node.type == "theory"){
                    this.props.navigation.navigate('TopicSwiper', {
                      iconcept:subTopics[node.id].IConceptImpl,
                      topicTitle:subTopics[node.id].concept
                    });
                  }
                  else
                  {
                    this.props.navigation.navigate('TopicActivities', {
                      exercises:subTopics[node.id].exercise,
                      topicTitle:subTopics[node.id].concept
                    });
                  }
                }
              }}
              renderNode={(node, level) => (
                <NestedRow
                  level={level}
                  style={this.selectNodeStyle(level)}
                >
                  <Text>{node.title}</Text>
                </NestedRow>
              )}
            />
          </View>


        {/* Activities division */}
          <View>
            <Header
              backgroundColor = '#1e272e'
              centerComponent={{ text: moduleTitle + ' activities', style: { color: '#fff' } }}
            />
            <NestedListView
              data={activitiesData}
              getChildrenName={(node) => 'items'}
              onNodePressed={(node) => {

                this.props.navigation.navigate('TopicActivities', {
                  exercises:subActivities,
                  topicTitle:moduleTitle + ' activities'
                });
              }}
              renderNode={(node, level) => (
                <NestedRow
                  level={level}
                  style={this.selectNodeStyle(level)}
                >
                  <Text>{node.title}</Text>
                </NestedRow>
              )}
            />
          </View>
      </ScrollView>
    );
  }
}
export default scr_subModuleList;

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    },

  mainNode: {
    backgroundColor: '#DCDCDC',
    borderBottomWidth: 0.5,
    borderColor: 'gray'
  },

  subNode: {
    borderBottomWidth: 0.5,
    borderColor: 'gray'
  }
});