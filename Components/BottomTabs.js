import { StyleSheet, View, Text } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function BottomTabs() {
  const navigation = useNavigation()
  const [Home, setHome] = useState(true)
  const [Shop, setShop] = useState(false)
  const [Search, setSearch] = useState(false)

  const home = () => {
    setHome(true)
    setShop(false)
    setSearch(false)
    navigation.navigate("Home")
  }
  const shop = () => {
    setHome(false)
    setShop(true)
    setSearch(false)
    navigation.navigate("Shop")
  }
  const search = () => {
    setHome(false)
    setShop(false)
    setSearch(true)
    navigation.navigate("Search")
  }
  return (
    <View>
      <View style={s.bottomTab}>
        <Icon name="home-outline" color={Home === true ? "#FF7010" : "#000"} size={25} onPress={() => home()} />
        <Icon name="search-outline" color={Search === true ? "#FF7010" : "#000"} onPress={() => search()} size={25} />
        <Icon name="cart-outline" color={Shop === true ? "#FF7010" : "#000"} onPress={() => shop()} size={25} />
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

