import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import PizzaScreen from "./Screens/PizzaScreen"
import AllPizzaScreen from "./Screens/AllPizzaScreen"
import AllSushiScreen from "./Screens/AllSushiScreen"
import AllDrunkScreen from "./Screens/AllDrunkScreen"
import AllScreen from "./Screens/AllScreen"
import ShopScreen from './Screens/ShopScreen';
import BottomTabs from './Components/BottomTabs';
import SearchScreen from './Screens/SearchScreen';
import AllDesertScreen from "./Screens/AllDesertScreen"
import DesertScreen from './Screens/DesertScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Pizza" component={PizzaScreen} />
          <Stack.Screen name="Desert" component={DesertScreen} />
          <Stack.Screen name='AllPizza' component={AllPizzaScreen} />
          <Stack.Screen name='AllSushi' component={AllSushiScreen} />
          <Stack.Screen name='AllDrunk' component={AllDrunkScreen} />
          <Stack.Screen name='AllDesert' component={AllDesertScreen} />
          <Stack.Screen name='Screen' component={AllScreen} />
          <Stack.Screen name='Shop' component={ShopScreen} />
          <Stack.Screen name='Search' component={SearchScreen} />
        </Stack.Navigator>
        <BottomTabs />
      </NavigationContainer>
  );
}
