import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoryCard() {
 return (
  <View style={s.body}>

   <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
   >

    <TouchableOpacity>
     <View style={s.card}>
      <Image source={{
       width: 45,
       height: 45,
       uri: "https://cdn-icons-png.flaticon.com/512/1404/1404945.png"
      }} />
      <Text style={s.cardText}>Пицца</Text>
     </View>
    </TouchableOpacity>

    <TouchableOpacity>
     <View style={s.card}>
      <Image source={{
       width: 45,
       height: 45,
       uri: "https://o.remove.bg/downloads/e427a269-750c-4663-8e17-d26cf29480ff/png-transparent-sushi-makizushi-cucumber-nori-cafe-icon-sushi-grill-rice-logo-red-thumbnail-removebg-preview.png"
      }} />
      <Text style={s.cardText}>Суши</Text>
     </View>
    </TouchableOpacity>

    <TouchableOpacity>
     <View style={s.card}>
      <Image source={{
       width: 45,
       height: 45,
       uri: "https://cdn-icons-png.flaticon.com/512/7182/7182828.png"
      }} />
      <Text style={s.cardText}>Десерты</Text>
     </View>
    </TouchableOpacity>

   </ScrollView>

  </View>
 )
}

const s = StyleSheet.create({
 body: {
  paddingLeft: 20,
  paddingVertical: 20
 },
 card: {
  width: 160,
  height: 55,
  borderColor: "#e4e4e4",
  borderWidth: 1,
  backgroundColor: '#fff',
  borderRadius: 6,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
  marginRight: 20
 },
 cardText: {
  fontSize: 18,
  marginLeft: 12
 }
})