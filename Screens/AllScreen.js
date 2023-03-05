import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'

export default function AllScreen() {
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

      <View style={s.bottom}>
        <Text style={s.price}>Итого: {price}</Text>
        <TouchableOpacity
          style={s.btn}
        >
          <Text style={s.btnText}>В корзину</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const s = StyleSheet.create({
  body: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 20
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
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20
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