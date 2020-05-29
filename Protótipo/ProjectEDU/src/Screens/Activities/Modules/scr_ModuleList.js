import React, { Component } from 'react';
import {StyleSheet,Text,ScrollView, Image,FlatList,TouchableOpacity,Dimensions,View} from 'react-native';
import {Header} from 'react-native-elements'
import ModuleIcon from './ModuleIcon.js'
import {data} from './data.js'

export default class scr_ModuleList extends Component {

  constructor(props) {
        super(props);
        this.state = {

          mainData: data,
        };
      }

  componentWillMount(){

    this.setState({subModules: this.state.mainData.map((subModule, index) =>
    
      obj = {
        id:index,
        name:subModule.moduleContent,
        concepts:subModule.concepts,
        exercises:subModule.exercise
        //navegation:"subModules"
      }  
    )})
  }
  

  clickEventListener = (item) => {

    //console.log("item.name: " + item.name)
    //console.log("item.concepts: " + item.concepts)
    //console.log("item.exercises: " + item.exercises)

    this.props.navigation.navigate('subModules', {
      moduleTitle:item.name,
      subTopics:item.concepts,
      subActivities:item.exercises
    });
  }

    

  render() {

    return (
      <ScrollView>
        {/*Screen Header Information */}
        <Header
            backgroundColor = '#1e272e'
            barStyle = 'light-content'
            leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            onPress: () => this.props.navigation.navigate("Activities"),
            }}
            centerComponent={{ text: 'Test Module', style: { color: '#fff' } }}
        />
        {/*Renders Module List Activities with a FlatList */}
        <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.subModules}
          keyExtractor= {(item) => {
            return (item.id).toString();
          }}
          renderItem={({item}) => {
          return (
            <ModuleIcon Item={item} ClickEventListener={this.clickEventListener}/>
          )}}/>
      </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  logoImage:{
    width: 200,
    height: 200
  },
  containerLogo:{
    alignItems:"center",
    margin: 10,
  },
  container:{
    flex:1,
    backgroundColor:"#636e72"
  },
  contentList:{
    flex:1,
    paddingBottom:20
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },
  imagePlay:{
    width:60,
    height:60,
  },
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:11,
    flex:1,
    alignSelf:'center',
    color:"#000000",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonPlay: {
    marginTop:10,
    marginBottom: 10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  followButtonText:{
    color: "#dcdcdc",
    fontSize:12,
  },

});  

  