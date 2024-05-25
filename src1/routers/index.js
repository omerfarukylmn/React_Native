import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from './Routers';
const Stack = createNativeStackNavigator();

export default function Routers() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
