import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PizzaCard() {
  const navigation = useNavigation()
  return (
    <View style={s.body}>

      <TouchableOpacity onPress={() => navigation.navigate("Pizza")}>
        <View style={s.card}>
          <Image source={{
            uri: "https://o.remove.bg/downloads/61deb14e-79aa-4f0e-a55d-29e4fbcf63c3/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail-removebg-preview.png"
          }}
            style={s.cardImg}
          />
          <View style={s.textBox}>
            <Text style={s.title}>Чикен Сладкий Чили</Text>
            <Text style={s.info}>Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус, Соус...</Text>
            <TouchableOpacity>
              <View style={s.cardBtn}>
                <Text style={s.btnText}>от 499 ₽</Text></View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Pizza")}>
        <View style={s.card}>
          <Image source={{
            uri: "https://o.remove.bg/downloads/6bbbb6dd-9367-4cf1-83cf-052e96a8db9a/png-clipart-pizza-pizza-removebg-preview.png"
          }}
            style={s.cardImg}
          />
          <View style={s.textBox}>
            <Text style={s.title}>EASY PEASY огуречный расколбас</Text>
            <Text style={s.info}>Огурцы маринованные, Пепперон...</Text>
            <TouchableOpacity>
              <View style={s.cardBtn}>
                <Text style={s.btnText}>от 549 ₽</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Pizza")}>
        <View style={s.card}>
          <Image source={{
            uri: "https://o.remove.bg/downloads/6de553f4-e9aa-4333-b0f7-c469a6cab527/png-transparent-pizza-garlic-bread-food-clock-ingredient-pizza-thumbnail-removebg-preview.png"
          }}
            style={s.cardImg}
          />
          <View style={s.textBox}>
            <Text style={s.title}>EASY PEASY чикен а-ля хрен</Text>
            <Text style={s.info}>Курица, Лук, Соус Карбонара, Сыр Моцарелла, Чипсы EASY PEASY...</Text>
            <TouchableOpacity>
              <View style={s.cardBtn}>
                <Text style={s.btnText}>от 249 ₽</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Pizza")}>
        <View style={s.card}>
          <Image source={{
            uri: "https://o.remove.bg/downloads/ccc25c13-eacd-4a8e-989f-1b826ea2b253/fresh-tasty-four-seasons-pizza-isolated-white-background_136401-4229-removebg-preview.png"
          }}
            style={s.cardImg}
          />
          <View style={s.textBox}>
            <Text style={s.title}>4 сезона</Text>
            <Text style={s.info}>Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы маринован...</Text>
            <TouchableOpacity>
              <View style={s.cardBtn}>
                <Text style={s.btnText}>от 630 ₽</Text></View>
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
    marginBottom: 20,
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