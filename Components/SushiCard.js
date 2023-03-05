import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SushiCard({ id, title, info, price, image }) {
 const navigation = useNavigation()
 return (
  <View style={s.body}>

   <TouchableOpacity onPress={() => navigation.navigate("Sushi", {
    id, title, info, price, image
   })}>
    <View style={s.card}>
     <Image source={{
      uri: image
     }}
      style={s.cardImg}
     />
     <View style={s.textBox}>
      <Text style={s.title}>{title}</Text>
      <Text style={s.info}>{info}</Text>
      <TouchableOpacity>
       <View style={s.cardBtn}>
        <Text style={s.btnText}>{price}</Text></View>
      </TouchableOpacity>
     </View>
    </View>
   </TouchableOpacity>

  </View>
 )
}


const s = StyleSheet.create({
 body: {
  paddingHorizontal: 20,
  paddingTop: 20
 },
 card: {
  width: '100%',
  height: 'auto',
  backgroundColor: '#fff',
  borderColor: "#e4e4e4",
  borderWidth: 1,
  backgroundColor: '#fff',
  borderRadius: 12,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 10,
  paddingVertical: 12
 },
 cardImg: {
  width: 100,
  height: 100,
  borderRadius: 12
 },
 textBox: {
  marginLeft: 10
 },
 title: {
  maxWidth: 200,
  fontSize: 14,
  fontWeight: '600',
  color: '#191919'
 },
 info: {
  maxWidth: 200,
  fontSize: 11,
  color: '#191919',
  paddingVertical: 8,
  paddingBottom: 10
 },
 cardBtn: {
  width: 100,
  height: 30,
  backgroundColor: '#FFEEE2',
  borderRadius: 6,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
 },
 btnText: {
  color: '#FF7010',
  fontWeight: '600'
 }
})