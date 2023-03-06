import { StyleSheet, View, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function BottomTabs() {
 const navigation = useNavigation()
 return (
  <View>
   <View style={s.bottomTab}>
    <Icon name="home-outline" size={25} onPress={() => { navigation.navigate("Home") }} />
    <Icon name="search-outline" size={25} />
    <Icon name="cart-outline" onPress={() => { navigation.navigate("Shop") }} size={25} />
    <Icon name='person-outline' size={25} />
   </View>
  </View>
 )
}
const s = StyleSheet.create({
 bottomTab: {
   width: '100%',
   height: 80,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-around',
   position: 'absolute',
   bottom: 0,
   zIndex: 99,
   backgroundColor: '#fff'
 }
});

