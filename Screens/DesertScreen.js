import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useRoute, useNavigation } from '@react-navigation/native'

export default function DesertScreen() {
 const { params: {
  id,
  title,
  info,
  price,
  image,
  full_info
 } } = useRoute()
 const [checked, setChecked] = useState(false)
 const [checked1, setChecked1] = useState(false)
 const [checked2, setChecked2] = useState(false)
 const [alert, setAlert] = useState(false)
 const [total, setTotal] = useState(price)

 const navigation = useNavigation()
 useEffect(() => {
  navigation.setOptions({
   title: title
  })
 }, [])
 function check() {
  checked === false ? setChecked(true) : setChecked(false)
  if (checked === true) {
   setTotal(total - 59)
  } else {
   setTotal(total * 1 + 59)
  }
 }
 function check1() {
  checked1 === false ? setChecked1(true) : setChecked1(false)
  if (checked1 === true) {
   setTotal(total - 59)
  } else {
   setTotal(total * 1 + 59)
  }
 }
 function check2() {
  checked2 === false ? setChecked2(true) : setChecked2(false)
  if (checked2 === true) {
   setTotal(total - 59)
  } else {
   setTotal(total * 1 + 59)
  }
 }
 function shop() {
  setAlert(true)
  setTimeout(() => {
   setAlert(false)
  }, 2000);
 }

 return (
  <View style={s.body}>
   {
    alert === true ? (
     <View style={s.alert}>
      <Text style={s.alertText}>Товар добавлен в корзину</Text>
     </View>
    ) : ""
   }
   <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >

    <View style={s.imgBox}>
     <Image source={{
      uri: image
     }}
      style={s.image}
     />
    </View>
    <Text style={s.title}>{title}</Text>
    <Text style={s.fullInfo}>{full_info}</Text>


    {/* CategoryDesert */}
    <Text style={s.categoryTitle}>Соусы</Text>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

     <View style={s.category}>

      <TouchableOpacity onPress={() => check()}>
       <View style={checked === false ? {
        width: 120,
        height: 120,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
       } : {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: '#FF7010',
        borderRadius: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginRight: 15
       }}>
        <Image source={{
         uri: "https://ezjko34.ru/upload/26fdc23dd0_60.jpg"
        }}
         style={s.CategoryImg}
        />
        <View style={checked === false ? {
         display: 'none'
        } : {
         width: 25,
         height: 25,
         borderWidth: 1,
         borderColor: '#FF7010',
         position: 'absolute',
         flexDirection: 'row',
         alignItems: 'center',
         borderRadius: 500,
         justifyContent: 'center',
         top: 10,
         right: 10
        }}>
         <Icon name='checkmark-outline' color={"#FF7010"} />
        </View>
        <Text style={s.cardText}>Сгущёнка</Text>
        <Text style={s.categoryPrice}>49 ₽</Text>
       </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => check1()}>
       <View style={checked1 === false ? {
        width: 120,
        height: 120,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
       } : {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: '#FF7010',
        borderRadius: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginRight: 15
       }}>
        <Image source={{
         uri: "https://e0.edimdoma.ru/data/ingredients/0000/1181/1181-ed4_wide.jpg?1515751150"
        }}
         style={s.CategoryImg}
        />
        <View style={checked1 === false ? {
         display: 'none'
        } : {
         width: 25,
         height: 25,
         borderWidth: 1,
         borderColor: '#FF7010',
         position: 'absolute',
         borderRadius: 500,
         flexDirection: 'row',
         alignItems: 'center',
         justifyContent: 'center',
         top: 10,
         right: 10
        }}>
         <Icon name='checkmark-outline' color={"#FF7010"} />
        </View>
        <Text style={s.cardText2}>Малиновое варенье</Text>
        <Text style={s.categoryPrice2}>49 ₽</Text>
       </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => check2()}>
       <View style={checked2 === false ? {
        width: 120,
        height: 120,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15
       } : {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: '#FF7010',
        borderRadius: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginRight: 15
       }}>
        <Image source={{
         uri: "http://admiral.xzive.ru//menu/maxi/menu11/12194155995b5806e584b506.49469298.png"
        }}
         style={s.CategoryImg}
        />
        <View style={checked2 === false ? {
         display: 'none'
        } : {
         width: 25,
         height: 25,
         borderWidth: 1,
         borderColor: '#FF7010',
         position: 'absolute',
         flexDirection: 'row',
         borderRadius: 500,
         alignItems: 'center',
         justifyContent: 'center',
         top: 10,
         right: 10
        }}>
         <Icon name='checkmark-outline' color={"#FF7010"} />
        </View>
        <Text style={s.cardText}>Сырный соус</Text>
        <Text style={s.categoryPrice}>49 ₽</Text>
       </View>
      </TouchableOpacity>

     </View>
    </ScrollView>

    <View style={s.bottom}>
     <Text style={s.price}>Итого: {total}</Text>
     <TouchableOpacity
      onPress={() => shop()}
      style={s.btn}
     >
      <Text style={s.btnText}>В корзину</Text>
     </TouchableOpacity>
    </View>

   </ScrollView>
  </View >
 )
}
const s = StyleSheet.create({
 body: {
  flexDirection: 'column',
  paddingHorizontal: 20,
  paddingVertical: 20,
  backgroundColor: '#fff'
 },
 imgBox: {
  flexDirection: 'column',
  alignItems: 'center'
 },
 image: {
  width: 280,
  height: 280,
  resizeMode: 'contain',
  borderRadius: 12
 },
 title: {
  fontSize: 18,
  fontWeight: '700',
  marginTop: 20,
  textAlign: 'left'
 },
 fullInfo: {
  marginTop: 15,
  fontSize: 12
 },
 categoryTitle: {
  fontSize: 16,
  fontWeight: '600',
  marginTop: 20
 },
 category: {
  flexDirection: 'row',
  marginTop: 12,
  paddingBottom: 80
 },
 CategoryImg: {
  width: 70,
  height: 70,
  resizeMode: 'contain'
 },
 bottom: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 30,
  marginBottom: 80
 },
 price: {
  fontSize: 18,
  color: "#FF7010",
  fontWeight: '600'
 },
 btn: {
  width: 150,
  height: 45,
  backgroundColor: '#FF7010',
  borderRadius: 6,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
 },
 btnText: {
  color: '#fff'
 },
 cardText: {
  position: 'absolute',
  bottom: -22
 },
 cardText2: {
  position: 'absolute',
  bottom: -35,
  textAlign: 'center'
 },
 categoryPrice: {
  color: '#FF7010',
  position: 'absolute',
  bottom: -40,
  fontSize: 14,
  fontWeight: '700'
 },
 categoryPrice2: {
  color: '#FF7010',
  position: 'absolute',
  bottom: -55,
  fontSize: 14,
  fontWeight: '700'
 },
 alert: {
  width: "80%",
  height: 40,
  position: 'absolute',
  left: "16%",
  top: 12,
  zIndex: 99,
  backgroundColor: '#FF7010',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 50
 },
 alertText: {
  color: '#fff'
 },
 buttons: {
  width: "100%",
  height: 45,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 20
 },
})