import { createStackNavigator} from 'react-navigation-stack';
import ListSubModuleScreen from './scr_subModuleList';
import topicSwiperScreen from './scr_topicSwiper';

export default createStackNavigator({
  
  ListSubModule: {
    screen: ListSubModuleScreen,
    navigationOptions : {
      title:"ListSubModule",
    }
  },
  TopicSwiper: {
    screen: topicSwiperScreen,
    navigationOptions: {
      title: "Topic Swiper"
    }
  },
 },
{
  initialRouteName: 'ListSubModule',
  headerMode: 'none'
});