import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useRoute, useNavigation } from '@react-navigation/native'
export default function PizzaScreen() {
  const [checked, setChecked] = useState(true)
  const [checked1, setChecked1] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)

  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      title: title
    })
  }, [])
  function check() {
    checked === false ? setChecked(true) : setChecked(false)
  }
  function check1() {
    checked1 === false ? setChecked1(true) : setChecked1(false)
  }
  function check2() {
    checked2 === false ? setChecked2(true) : setChecked2(false)
  }
  function check3() {
    checked3 === false ? setChecked3(true) : setChecked3(false)
  }
  const { params: {
    id,
    title,
    info,
    price,
    image,
    full_info
  } } = useRoute()

  return (
    <View style={s.body}>
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

        {/* CategoryPizza */}
        <Text style={s.categoryTitle}>Добавьте в Пиццу</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >

          <View style={s.category}>

            <TouchableOpacity onPress={() => check()}>
              <View style={checked === false ? {
                width: 120,
                height: 120,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 25
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
                marginRight: 25
              }}>
                <Image source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmp6rvek99XBZQjQyKzpE4WB4QB4fE22wJbgROKG3RqzBJ3T5zzmog0a1Bw9Wtq613eM&usqp=CAU"
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
                <Text style={s.cardText}>Моцарелла</Text>
                <Text style={s.categoryPrice}>59 ₽</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => check1()}>
              <View style={checked1 === false ? {
                width: 120,
                height: 120,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 25
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
                marginRight: 25
              }}>
                <Image source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3823/3823366.png"
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
                <Text style={s.cardText}>Шампиньоны</Text>
                <Text style={s.categoryPrice}>59 ₽</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => check2()}>
              <View style={checked2 === false ? {
                width: 120,
                height: 120,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 25
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
                marginRight: 25
              }}>
                <Image source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/186/186131.png"
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
                <Text style={s.cardText}>Лук</Text>
                <Text style={s.categoryPrice}>59 ₽</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => check3()}>
              <View style={checked3 === false ? {
                width: 120,
                height: 120,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 25
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
                marginRight: 25
              }}>
                <Image source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/2909/2909784.png"
                }}
                  style={s.CategoryImg}
                />
                <View style={checked3 === false ? {
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
                <Text style={s.cardText}>Сладкий перец</Text>
                <Text style={s.categoryPrice}>59 ₽</Text>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>

        <View style={s.bottom}>
          <Text style={s.price}>Итого: {price}</Text>
          <TouchableOpacity
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
    backgroundColor: '#fff',
    paddingBottom: 60
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
    paddingBottom: 40
  },
  CategoryImg: {
    width: 55,
    height: 55
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30
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
  categoryPrice: {
    color: '#FF7010',
    position: 'absolute',
    bottom: -40,
    fontSize: 14,
    fontWeight: '700'
  }
})