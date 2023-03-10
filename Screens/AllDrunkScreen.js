import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import DrunkCard from '../Components/DrunkCard'

export default function AllDrunkScreen() {
 const navigation = useNavigation()
 useEffect(() => {
  navigation.setOptions({
   title: "Все Пиццы"
  })
 }, [])

 return (
  <View style={s.body}>
   <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>

    <DrunkCard
     id="0"
     title="Mirinda"
     price="199 ₽"
     image="https://www.pngitem.com/pimgs/m/292-2924390_mirinda-orange-flavour-250ml-hd-png-download.png"
    />

    <DrunkCard
     id="1"
     title="Pepsi MAX"
     price="99 ₽"
     image="https://cdn.shopify.com/s/files/1/2332/2107/products/pepsi-max.jpg?v=1617960266"
    />

    <DrunkCard
     id="2"
     title="Pepsi"
     price="99 ₽"
     image="https://dostavo4ka.uz/upload-file/2021/07/01/6222/750x750-e67fdad5-0604-41bf-8e41-0a514960f1d5.jpg"
    />

    <DrunkCard
     id="3"
     title="Pepsi Дикая вишня"
     price="99 ₽"
     image="https://d9ae6ad5-3627-4bf2-85a7-22bbd5549e94.selcdn.net/uploads/picture/picture/86258/large_file.jpeg"
    />

    <DrunkCard
     id="0"
     title="Mirinda"
     price="199 ₽"
     image="https://www.pngitem.com/pimgs/m/292-2924390_mirinda-orange-flavour-250ml-hd-png-download.png"
    />

    <DrunkCard
     id="1"
     title="Pepsi MAX"
     price="99 ₽"
     image="https://cdn.shopify.com/s/files/1/2332/2107/products/pepsi-max.jpg?v=1617960266"
    />

    <DrunkCard
     id="2"
     title="Pepsi"
     price="99 ₽"
     image="https://dostavo4ka.uz/upload-file/2021/07/01/6222/750x750-e67fdad5-0604-41bf-8e41-0a514960f1d5.jpg"
    />

    <DrunkCard
     id="3"
     title="Pepsi Дикая вишня"
     price="99 ₽"
     image="https://d9ae6ad5-3627-4bf2-85a7-22bbd5549e94.selcdn.net/uploads/picture/picture/86258/large_file.jpeg"
    />

   </ScrollView>

  </View>
 )
}

const s = StyleSheet.create({
 body: {
  paddingBottom: 80
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
  height: 100
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