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
     image="https://bartori.ru/files/products/27%D0%BA%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D1%8F.300x300.png?4c2fd6d1884bc30cb421993fcc7eaa00"
    />

    <CategoryCard
     id="2"
     title="Напитки"
     image="https://cdn-icons-png.flaticon.com/512/1880/1880417.png"
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