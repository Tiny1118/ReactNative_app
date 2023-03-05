import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoryCard({ id, title, image }) {
 return (
  <View style={s.body}>


   <TouchableOpacity>
    <View style={s.card}>
     <Image source={{
      uri: image,
     }}
      style={s.cardImage}
     />
     <Text style={s.cardText}>{title}</Text>
    </View>
   </TouchableOpacity>


  </View>
 )
}

const s = StyleSheet.create({
 body: {
  paddingRight: 20,
  paddingVertical: 20
 },
 card: {
  width: 180,
  height: 55,
  borderColor: "#e4e4e4",
  borderWidth: 1,
  backgroundColor: '#fff',
  borderRadius: 6,
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 15
 },
 cardImage: {
  width: 40,
  height: 40,
 },
 cardText: {
  fontSize: 18,
  marginLeft: 20
 }
})