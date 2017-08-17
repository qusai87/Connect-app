import WelcomeScreen from './Welcome';
import MainScreen from './Main';

import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: MainScreen },
});

export default App;