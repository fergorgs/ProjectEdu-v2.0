import { createStackNavigator} from 'react-navigation';
import ListSubModuleScreen from './scr_subModuleList';
import topicSwiperScreen from './scr_topicSwiper';
//Instroduction screens
import IntroductionTheoryScreen from './Module3/ProjectCostManagement/Introduction/IntroductionTheory';
import IntroductionAcitivitiesScreen from './Module3/ProjectCostManagement/Introduction/IntroductionActivities';
import IntroductionVideoScreen from './Module3/ProjectCostManagement/Introduction/IntroductionVideo';
//Estimating screens
import TypesOfCostsScreen from './Module3/ProjectCostManagement/Estimating/TypesCost';
import EstimatingInputsScreen from './Module3/ProjectCostManagement/Estimating/Inputs';
import EstimatingToolsScreen from './Module3/ProjectCostManagement/Estimating/Tools';
import EstimatingOutputsScreen from './Module3/ProjectCostManagement/Estimating/Outputs';
import EstimatingActivitiesScreen from './Module3/ProjectCostManagement/Estimating/EstimatingActivities';
//Budgeting screens
import BudgetingIntroductionScreen from './Module3/ProjectCostManagement/Budgeting/Introduction'
import BudgetingInputsScreen from './Module3/ProjectCostManagement/Budgeting/Inputs'
import BudgetingToolsScreen from './Module3/ProjectCostManagement/Budgeting/Tools'
import BudgetingOutputsScreen from './Module3/ProjectCostManagement/Budgeting/Output'
import DetermineBudgetActivitiesScreen from  "./Module3/ProjectCostManagement/Budgeting/DetermineBudgetActivities";
import DetermineBudgetTheoryScreen from './Module3/ProjectCostManagement/Budgeting/DetermineBudgetTheory'
//Controlling screens
import ControllingIntroductionScreen from './Module3/ProjectCostManagement/Controlling/ControlIntro'
import ControllingInputsScreen from './Module3/ProjectCostManagement/Controlling/ControlInputs'
import ControllingToolsScreen from './Module3/ProjectCostManagement/Controlling/ControlTools'
import ControllingOutputsScreen from './Module3/ProjectCostManagement/Controlling/ControlOutputs'
import ControlCostsActivitiesScreen from './Module3/ProjectCostManagement/Controlling/ControlCostActivities'
import ControlCostsTheoryScreen from './Module3/ProjectCostManagement/Controlling/ControlCostsTheory'

//Stack Navigator for Module 3
//Composed by the following screens:
// List Cost Management
// Introduction Video
// introduction Theory
// Introduction Activities
// Estimating Theory
// Estimating Activities
// Determine Budget Theory
// Determine Budget Activities
// Control Costs Theory
// Control Costs Activities
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
  //INTRODUCTION---------------------------------------------
  //---------------------------------------------------------
  IntroductionTheory: {
    screen: IntroductionTheoryScreen,
    navigationOptions : {
      title:"IntroductionTheory",
    }
  },
  IntroductionVideo: {
    screen: IntroductionVideoScreen,
    navigationOptions : {
      title:"Introduction Video",
    }
  },
  IntroductionActivities: {
    screen:IntroductionAcitivitiesScreen,
    navigationOptions : {
      title:"Introduction Activities",
    }
  },

  //ESTIMATING COSTS------------------------------------------
  //----------------------------------------------------------
  EstimatingTypesCost: {
    screen: TypesOfCostsScreen,
    navigationOptions : {
      title:"EstimatingTypesCost",
    }
  },
  EstimatingInput: {
    screen: EstimatingInputsScreen,
    navigationOptions : {
      title:"EstimatingInput",
    }
  },
  EstimatingTools: {
    screen: EstimatingToolsScreen,
    navigationOptions : {
      title:"EstimatingTools",
    }
  },
  EstimatingOutputs: {
    screen: EstimatingOutputsScreen,
    navigationOptions : {
      title:"EstimatingOutputs",
    }
  },
  EstimatingActivities: {
    screen: EstimatingActivitiesScreen,
    navigationOptions : {
      title:"Estimating Activities",
    }
  },

  //BUDGETING-------------------------------------------------
  //----------------------------------------------------------
  BudgetingIntro: {
    screen: BudgetingIntroductionScreen,
    navigationOptions : {
      title:"BudgetingIntro",
    }
  },
  BudgetingInputs: {
    screen: BudgetingInputsScreen,
    navigationOptions : {
      title:"BudgetingInputs",
    }
  },
  BudgetingTools: {
    screen: BudgetingToolsScreen,
    navigationOptions : {
      title:"BudgetingTools",
    }
  },
  BudgetingOutputs: {
    screen: BudgetingOutputsScreen,
    navigationOptions : {
      title:"BudgetingOutputs",
    }
  },
  DetermineBudgetActivities: {
    screen: DetermineBudgetActivitiesScreen,
    navigationOptions : {
      title:"Determine Budget Activities",
    }
  },
  //CONTROLING------------------------------------------------
  //----------------------------------------------------------
  ControllingIntro: {
    screen: ControllingIntroductionScreen,
    navigationOptions : {
      title:"ControllingIntro",
    }
  },
  ControllingInputs: {
    screen: ControllingInputsScreen,
    navigationOptions : {
      title:"ControllingInputs",
    }
  },
  ControllingTools: {
    screen: ControllingToolsScreen,
    navigationOptions : {
      title:"ControllingTools",
    }
  },
  ControllingOutputs: {
    screen: ControllingOutputsScreen,
    navigationOptions : {
      title:"ControllingOutputs",
    }
  },
  ControlCosts: {
    screen: ControlCostsTheoryScreen,
    navigationOptions : {
      title:"Control Costs Theory",
    }
  },
  ControlCostsActivities: {
    screen: ControlCostsActivitiesScreen,
    navigationOptions : {
      title:"Control Costs Activities",
    }
  },
},
{
  initialRouteName: 'ListSubModule',
  headerMode: 'none'
});