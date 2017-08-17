import {
  StackNavigator,
} from 'react-navigation';

import WelcomeScreen from './Welcome';
import MainScreen from './Main';

const App = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: MainScreen },
});

export default App;
