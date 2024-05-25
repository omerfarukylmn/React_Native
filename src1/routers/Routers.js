import {NavigationContainer} from '@react-navigation/native';
import Menü from '../screens/Menü';
import SignIn from '../screens/SignIn';
import Lahmacun from '../screens/Lahmacun';
import Adana from '../screens/Adana';
import Etsis from '../screens/Etsis';
import Iclikofte from '../screens/Iclikofte';
import Mantı from '../screens/Mantı';
import EtliPide from '../screens/EtliPide';
import Yapraksarma from '../screens/Yapraksarma';
import Beyti from '../screens/Beyti';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Routers() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="Menü"
        component={Menü}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen name="Lahmacun" component={Lahmacun} />
      <Stack.Screen name="Adana" component={Adana} />
      <Stack.Screen name="Etsis" component={Etsis} />
      <Stack.Screen name="Iclikofte" component={Iclikofte} />
      <Stack.Screen name="Mantı" component={Mantı} />
      <Stack.Screen name="EtliPide" component={EtliPide} />
      <Stack.Screen name="Yapraksarma" component={Yapraksarma} />
      <Stack.Screen name="Beyti" component={Beyti} />
    </Stack.Navigator>
  );
}
