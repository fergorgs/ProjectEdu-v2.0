import React from 'react';
import { ScrollView, View,StyleSheet,Text } from 'react-native';
import {Header,ListItem} from 'react-native-elements'
import NestedListView, {NestedRow} from 'react-native-nested-listview'
import * as firebase from 'firebase'

//Screen with list with the following modules for Project Cost Management
//Introduction
//Estimating Budget
//Detemine Budget
//Control Costs

class CostManagementList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listCost:[]
    }
  }
  componentDidMount()
  {
    let userid = firebase.auth().currentUser.uid
    let usersRef = firebase.database().ref("/module3/Project Cost Management/" + userid );
    usersRef.orderByChild("id").on("child_added", (data)=> {
      
      let newArr = [];
      let obj = {title: data.val().title,checkmark:data.val().checkmark}
      newArr.push(obj)

      let Aux = this.state.listCost;
      Array.prototype.push.apply(Aux,newArr)
      this.setState({listCost:Aux})
    })
  }

  selectNodeStyle(level){

    if(level == 1) 
      return styles.mainNode
    else
      return styles.subNode
  }
  
  render() {

    const list = this.state.listCost
    const data = [{title: '✓  Introduction', 
                    items: [{title: 'Introdutory video', id: 1}, 
                    {title: 'Content overall', id: 2},
                    {title: 'Activities', id: 3}]},
                  {title: 'Estimating', 
                    items: [{title: 'Types of Costs', id: 4}, 
                    {title: 'Inputs', id: 5},
                    {title: 'Tools and Techniques', id: 6},
                    {title: 'Outputs', id: 7},
                    {title: 'Activities', id: 8}]},
                  {title: 'Budgeting', 
                    items: [{title: 'Introduction', id: 9}, 
                    {title: 'Inputs', id: 10},
                    {title: 'Tools and Techniques', id: 11},
                    {title: 'Outputs', id: 12},
                    {title: 'Activities', id: 13}]},
                  {title: 'Controlling', 
                    items: [{title: 'Introduction', id: 14}, 
                    {title: 'Inputs', id: 15},
                    {title: 'Tools and Techniques', id: 16},
                    {title: 'Outputs', id: 17},
                    {title: 'Activities', id: 18}]}
                  ]

    return (
      <ScrollView >
        <Header
          backgroundColor = '#1e272e'
          leftComponent={{
          icon: 'arrow-back',
          color: '#fff',
          onPress: () => this.props.navigation.navigate("Module_3"),
          }}
          centerComponent={{ text: 'PROJECT COST MANAGEMENT', style: { color: '#fff' } }}
        />
        <NestedListView
          data={data}
          getChildrenName={(node) => 'items'}
          onNodePressed={(node) => {
            switch(node.id){

              //Introduction
              case 1:
                this.props.navigation.navigate("IntroductionVideo")
                break
        
              case 2:
                this.props.navigation.navigate('IntroductionTheory')
                break

              case 3:
                  this.props.navigation.navigate('IntroductionActivities')
                  break

              //Estimating tabs
              case 4:
                this.props.navigation.navigate("EstimatingTypesCost")
                break
        
              case 5:
                this.props.navigation.navigate('EstimatingInput')
                break

              case 6:
                  this.props.navigation.navigate('EstimatingTools')
                  break

              case 7:
                  this.props.navigation.navigate('EstimatingOutputs')
                  break

              case 8:
                  this.props.navigation.navigate('EstimatingActivities')
                  break

              //Budgeting tabs
              case 9:
                this.props.navigation.navigate("BudgetingIntro")
                break
        
              case 10:
                this.props.navigation.navigate('BudgetingInputs')
                break

              case 11:
                  this.props.navigation.navigate('BudgetingTools')
                  break

              case 12:
                  this.props.navigation.navigate('BudgetingOutputs')
                  break

              case 13:
                  this.props.navigation.navigate('DetermineBudgetActivities')
                  break

              //Controlling tabs
              case 14:
                this.props.navigation.navigate("ControllingIntro")
                break
        
              case 15:
                this.props.navigation.navigate('ControllingInputs')
                break

              case 16:
                  this.props.navigation.navigate('ControllingTools')
                  break

              case 17:
                  this.props.navigation.navigate('ControllingOutputs')
                  break

              case 18:
                  this.props.navigation.navigate('ControlCostsActivities')
                  break
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
      </ScrollView>
    );
  }
}
export default CostManagementList;

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