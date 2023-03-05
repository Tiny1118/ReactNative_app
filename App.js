import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import PizzaScreen from "./Screens/PizzaScreen"
import AllPizzaScreen from "./Screens/AllPizzaScreen"
import AllSushiScreen from "./Screens/AllSushiScreen"
import AllDrunkScreen from "./Screens/AllDrunkScreen"
import AllScreen from "./Screens/AllScreen"




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pizza" component={PizzaScreen} />
        <Stack.Screen name='AllPizza' component={AllPizzaScreen} />
        <Stack.Screen name='AllSushi' component={AllSushiScreen} />
        <Stack.Screen name='AllDrunk' component={AllDrunkScreen} />
        <Stack.Screen name='Screen' component={AllScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const s = StyleSheet.create({

});
