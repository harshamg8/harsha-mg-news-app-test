import {createStackNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen'

const AppStack = createStackNavigator({
    Home:HomeScreen,
    Details:DetailsScreen
})

export default AppContainer = createAppContainer(AppStack)
