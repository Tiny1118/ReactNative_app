import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/Ionicons"
import Category from '../Components/Category'
import FeaturedRow from '../Components/FeaturedRow'

export default function HomeScreen() {
 const navigation = useNavigation()

 useLayoutEffect(() => {
  navigation.setOptions({
   headerShown: false
  })
 }, [])


 return (
  <View style={{ backgroundColor: '#fff', height: '100%' }}>
   <SafeAreaView style={{ backgroundColor: '#fff', shadowColor: '#ccc', shadowOpacity: '20', }}>

    <View style={{ flexDirection: 'row', paddingBottom: "14", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: "12" }}>

     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image style={{ width: "50", height: "50", borderRadius: '50%', }} source={{
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

    {/* Search */}
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

   {/* Body */}
   <ScrollView>
    {/* Category */}
    <Category />

    {/* Featured */}
    <FeaturedRow
     id='1'
     title='Featured'
     description="Paid placements from our partners"
    />

    {/* Tasty Discount */}
    <FeaturedRow
     id='2'
     title='Tasty Discounts'
     description="Evryone been enjoys these juicy discounts!"
    />

    {/* Offers near you */}
    <FeaturedRow
     id='3'
     title='Offers near you'
     description="Why not support your local restaurant tonight!"
    />

   </ScrollView>
  </View>
 )
}

const s = StyleSheet.create({
})