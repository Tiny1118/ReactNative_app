import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useRoute, useNavigation } from '@react-navigation/native'

export default function PizzaScreen() {
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
    image,
    full_info
  } } = useRoute()

  return (
    <View style={s.body}>

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

          <TouchableOpacity>
            <View style={s.categoryCard}>
              <Image source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmp6rvek99XBZQjQyKzpE4WB4QB4fE22wJbgROKG3RqzBJ3T5zzmog0a1Bw9Wtq613eM&usqp=CAU"
              }}
                style={s.CategoryImg}
              />
              <View style={s.checked}>
                <Icon name='checkmark-outline' color={"#FF7010"} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={s.categoryCard}>
              <Image source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmp6rvek99XBZQjQyKzpE4WB4QB4fE22wJbgROKG3RqzBJ3T5zzmog0a1Bw9Wtq613eM&usqp=CAU"
              }}
                style={s.CategoryImg}
              />
              <View style={s.checked}>
                <Icon name='checkmark-outline' color={"#FF7010"} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={s.categoryCard}>
              <Image source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmp6rvek99XBZQjQyKzpE4WB4QB4fE22wJbgROKG3RqzBJ3T5zzmog0a1Bw9Wtq613eM&usqp=CAU"
              }}
                style={s.CategoryImg}
              />
              <View style={s.checked}>
                <Icon name='checkmark-outline' color={"#FF7010"} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={s.categoryCard}>
              <Image source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmp6rvek99XBZQjQyKzpE4WB4QB4fE22wJbgROKG3RqzBJ3T5zzmog0a1Bw9Wtq613eM&usqp=CAU"
              }}
                style={s.CategoryImg}
              />
              <View style={s.checked}>
                <Icon name='checkmark-outline' color={"#FF7010"} />
              </View>
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
    marginTop: 12
  },
  categoryCard: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#FF7010',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginRight: 25
  },
  CategoryImg: {
    width: 55,
    height: 55
  },
  checked: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: '#FF7010',
    borderRadius: '50%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    right: 10
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
  }
})