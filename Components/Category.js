import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Category() {
 return (
  <View style={s.body}>
   <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
   >

    <CategoryCard
     id="0"
     title="Пицца"
     image="https://cdn-icons-png.flaticon.com/512/1404/1404945.png"
    />

    <CategoryCard
     id="1"
     title="Cуши"
     image="https://o.remove.bg/downloads/0327adb8-a20f-4782-adba-ca3dbd8d079c/250-2504018_sushi-icon-icon-removebg-preview.png"
    />

    <CategoryCard
     id="2"
     title="Напитки"
     image="https://o.remove.bg/downloads/68e4d587-261a-4172-a2d0-8a5fce67d5e1/1880417-removebg-preview.png"
    />

    <CategoryCard
     id="3"
     title="Десерты"
     image="https://cdn-icons-png.flaticon.com/512/7182/7182828.png"
    />

   </ScrollView>

  </View>
 )
}

const s = StyleSheet.create({
 body: {
  marginLeft: 20
 }
})