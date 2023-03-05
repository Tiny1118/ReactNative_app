import { View, Text } from 'react-native'
import React from 'react'
import SushiCard from './SushiCard'

export default function SushiRow() {
  return (
    <View>

     <SushiCard 
      id="0"
      title="Филадельфия кранч"
      info="Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чипсы..."
      price="475 ₽"
      image="https://api.horoshiki.ru/storage/products/195/catalog/DSC05495.png?ts=1636616889391515"
     />

     <SushiCard 
      id="1"
      title="Филадельфия крем-брюле"
      info="Сливочный сыр, семга татаки с тростниковым сахаром, соус унаги"
      price="395 ₽"
      image="https://api.horoshiki.ru/storage/products/176/catalog/6014%205-2.png?ts=1613802853881315"
     />

     <SushiCard 
      id="2"
      title="Супер Филадельфия"
      info="Действительно много семги, сливочный сыр, огурец, рис, нори."
      price="425 ₽"
      image="https://api.horoshiki.ru/storage/products/82/catalog/DSC08012-2.png?ts=1615983511789615"
     />

     <SushiCard 
      id="3"
      title="Тигр мама"
      info="Тигровая креветка, огурец, авокадо, соус Айоли, рис, икра..."
      price="525 ₽"
      image="https://api.horoshiki.ru/storage/products/173/catalog/DSC02293_6.png?ts=1615793089144615"
     />

    </View>
  )
}