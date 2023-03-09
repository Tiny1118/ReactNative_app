import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  
  return (
    <View style={s.body}>
      <Text>Search</Text>
    </View>
  )
}
const s = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  }
})