import React from 'react';
import { Alert } from 'react-native';
import {Header,Icon} from 'react-native-elements'

class LessonHeader extends React.Component{

render() {

    return (
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
                {text: 'OK', onPress:  () => this.props.navigation.navigate("ListCostManagement")},
              ],
              {cancelable: false},
            ),
            }}
            centerComponent={{ text: this.props.centerText, style: { color: '#fff' } }}
        />
    )
  }
}

export default LessonHeader