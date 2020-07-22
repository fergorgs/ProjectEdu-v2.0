import { createStackNavigator} from 'react-navigation';
import ListSubModuleScreen from './scr_subModuleList'
import ProjectCostManagementScreen from "./ProjectCostManagement"
import MaintenanceModule3Screen from './MaintenanceModule3'

export default createStackNavigator({

  //Stack Navigator with all Module 3 Main Screens
  
  Module: {
    screen: ListSubModuleScreen,
    navigationOptions : {
      title:"Module",
    }   
  },
  ProjectCostManagement: {
    screen: ProjectCostManagementScreen,
    navigationOptions : {
      title:"Project Cost Management",
    }   
  },
  MaintenanceModule3: {
    screen: MaintenanceModule3Screen,
    navigationOptions : {
      title:"Maintenance Module 3",
    }   
  },
},
{
  initialRouteName: 'Module',
  headerMode: 'none'
});