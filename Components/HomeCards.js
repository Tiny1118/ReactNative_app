import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

export default function HomeCards() {
 return (
  <View style={s.body}>
   <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
   >


    <View style={s.card}>
     <Image style={s.card_img} source={require("../assets/img1.png")} />
     <Text style={s.card_text}>3 средние пиццы от 999 рублей</Text>
    </View>

    <View style={s.card}>
     <Image style={s.card_img2} source={require("../assets/img2.png")} />
     <Text style={s.card_text}>Кэшбек 10% на самовывоз (доставка)</Text>
    </View>

    <View style={s.card}>
     <Image style={s.card_img} source={require("../assets/img1.png")} />
     <Text style={s.card_text}>3 средние пиццы от 999 рублей</Text>
    </View>

    <View style={s.card}>
     <Image style={s.card_img2} source={require("../assets/img2.png")} />
     <Text style={s.card_text}>Кэшбек 10% на самовывоз (доставка)</Text>
    </View>

   </ScrollView>
  </View>
 )
}
const s = StyleSheet.create({
 body: {
  backgroundColor: "#F0F0F0",
  paddingLeft: 20
 },
 card: {
  width: 280,
  height: 320,
  backgroundColor: "#FF7010",
  borderRadius: 10,
  marginRight: 20,
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden'
 },
 card_img: {
  borderRadius: 10
 },
 card_img2: {
  marginTop: 60,
  marginLeft: 20
 },
 card_text: {
  width: "60%",
  color: "#fff",
  fontSize: 20,
  fontWeight: "600",
  position: 'absolute',
  bottom: 20,
  left: 20
 }
})