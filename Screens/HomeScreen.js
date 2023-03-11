import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/Ionicons"
import HomeCards from '../Components/HomeCards'
import SushiRow from '../Components/SushiRow'
import PizzaRow from '../Components/PizzaRow'
import Category from '../Components/Category'
import DrunkRow from "../Components/DrunkRow"
import DesertRow from '../Components/DesertRow'

export default function HomeScreen() {
 const navigation = useNavigation()
 useLayoutEffect(() => {
  navigation.setOptions({
   headerShown: false
  })
 }, [])


 return (
  <View style={s.body}>
   <ScrollView horizontal={false}>

    <View style={s.top}>
     <Image
      source={require("../assets/logo.png")}
      style={s.topImg}
     />
     <Text style={s.topText}>Куда пицца</Text>
    </View>

    {/* Category Row */}
    <Category />
    
    {/* Home Row */}
    <HomeCards />

    {/* Pizza Row */}
    <View style={s.pizzaTop}>
     <Text style={s.pizza_text}>Пицца</Text>
     <TouchableOpacity onPress={() => navigation.navigate("AllPizza")}>
      <View style={s.topBtn}>
       <Text style={s.allText}>Все</Text>
       <Icon name='arrow-forward-circle-outline' size={26} color={'#FF7010'} />
      </View>
     </TouchableOpacity>
    </View>

    <PizzaRow id={"red"} />

    {/* Sushi Row */}
    <View style={s.pizzaTop}>
     <Text style={s.pizza_text}>Суши</Text>
     <TouchableOpacity onPress={() => navigation.navigate("AllSushi")}>
      <View style={s.topBtn}>
       <Text style={s.allText}>Все</Text>
       <Icon name='arrow-forward-circle-outline' size={26} color={'#FF7010'} />
      </View>
     </TouchableOpacity>
    </View>
    <SushiRow />

    {/* Desert Row */}
    <View style={s.pizzaTop}>
     <Text style={s.pizza_text}>Десерты</Text>
     <TouchableOpacity onPress={() => navigation.navigate("AllDesert")}>
      <View style={s.topBtn}>
       <Text style={s.allText}>Все</Text>
       <Icon name='arrow-forward-circle-outline' size={26} color={'#FF7010'} />
      </View>
     </TouchableOpacity>
    </View>
    <DesertRow />

    {/* Drunk Row */}
    <View id="red" style={s.pizzaTop}>
     <Text style={s.pizza_text}>Напитки</Text>
     <TouchableOpacity onPress={() => navigation.navigate("AllDrunk")}>
      <View style={s.topBtn}>
       <Text style={s.allText}>Все</Text>
       <Icon name='arrow-forward-circle-outline' size={26} color={'#FF7010'} />
      </View>
     </TouchableOpacity>
    </View>
    <DrunkRow />
   </ScrollView>
  </View >
 )
}

const s = StyleSheet.create({
 body: {
  marginBottom: 80
 },
 top: {
  paddingVertical: 5,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingLeft: 20,
  paddingTop: 20
 },
 topImg: {
  width: 100,
  height: 100,
  resizeMode: 'cover'
 },
 topText: {
  fontSize: 20,
  fontWeight: '500',
  marginLeft: 5
 },
 pizzaTop: {
  paddingHorizontal: 20,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 30
 },
 pizza_text: {
  fontSize: 30,
  fontWeight: '600'
 },
 topBtn: {
  width: 100,
  height: 35,
  backgroundColor: '#fff',
  borderColor: "#e4e4e4",
  borderWidth: 1,
  backgroundColor: '#fff',
  borderRadius: 6,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around'
 },
 allText: {
  fontSize: 15
 }
})