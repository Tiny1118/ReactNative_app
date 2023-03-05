import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

export default function SushiScreen() {
 const navigation = useNavigation()
 useEffect(() => {
   navigation.setOptions({
    title: title
   })
 }, [])
 
 const { params: {
  id,
  title,
  info,
  price,
  image
 }} = useRoute()

 return (
  <View>
   <Text>{title}</Text> 
   <Text>{price}</Text>
   <Text>{info}</Text>
  </View>
 )
}