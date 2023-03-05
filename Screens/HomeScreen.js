import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/Ionicons"
import CategoryCard from '../Components/CategoryCard'
import PizzaCard from '../Components/PizzaCard'
import HomeCards from '../Components/HomeCards'
import SushiRow from '../Components/SushiRow'
import PizzaRow from '../Components/PizzaRow'

export default function HomeScreen() {
 const navigation = useNavigation()
 useLayoutEffect(() => {
  navigation.setOptions({
   headerShown: false
  })
 }, [])


 return (
  <View style={s.body}>
   <ScrollView horizontal={false} >

    {/*    <SafeAreaView style={{ backgroundColor: '#fff', shadowColor: '#ccc', shadowOpacity: '20', }}>

    <View style={{ flexDirection: 'row', paddingBottom: "14", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: "12" }}>

     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={{ width: 50, height: 50, borderRadius: '50%', }} source={{
       uri: 'https://i.pinimg.com/originals/7e/a9/09/7ea9095f3babe6c7e35c85c177d920e5.jpg'
      }} />
      <View style={{ marginLeft: 6 }}>
       <Text>Deliver Now</Text>
       <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Current Location
        <Icon name='chevron-down' size={20} color='#ff6600' />
       </Text>
      </View>
     </View>

     <Icon name='person-circle-sharp' color="#ff6600" size={60} />

    </View>

    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 10, paddingHorizontal: 12 }}>
     <View style={{ flexDirection: 'row', backgroundColor: '#e6e6e6', width: '86%', height: 50, alignItems: 'center', paddingHorizontal: 10 }}>
      <Icon name='search-outline' size={20} color="#ff6600" style={{ marginRight: 8 }} />
      <TextInput
       style={{ height: 40 }}
       placeholder='Restaurants and cuisines'
       keyboardType='defult'
      />
     </View>
     <Icon name='settings-outline' color="#ff6600" size={20} />
    </View>

   </SafeAreaView>

   <ScrollView>

    <Category />

    <FeaturedRow
     id='1'
     title='Featured'
     description="Paid placements from our partners"
    />

    <FeaturedRow
     id='2'
     title='Tasty Discounts'
     description="Evryone been enjoys these juicy discounts!"
    />

    <FeaturedRow
     id='3'
     title='Offers near you'
     description="Why not support your local restaurant tonight!"
    />

   </ScrollView> */}

    <View style={s.top}>
     <Image
      source={require("../assets/images/logo.png")}
      style={s.topImg}
     />
     <Text style={s.topText}>Куда пицца</Text>
    </View>

    {/* Category Row */}
    <CategoryCard />

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

    <PizzaRow />

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




   </ScrollView>
  </View >
 )
}

const s = StyleSheet.create({
 top: {
  paddingTop: 30,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  paddingLeft: 20
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