import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import PizzaCard from '../Components/PizzaCard'

export default function AllPizzaScreen() {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      title: "Все Пиццы"
    })
  }, [])

  return (
    <View style={s.body}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>

        <PizzaCard
          id="0"
          title="Чикен Сладкий Чили"
          info="Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус, Соус..."
          price="499 ₽"
          image="https://o.remove.bg/downloads/61deb14e-79aa-4f0e-a55d-29e4fbcf63c3/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail-removebg-preview.png"
        />

        <PizzaCard
          id="1"
          title="EASY PEASY огуречный расколбас"
          info="Огурцы маринованные, Пепперон..."
          price="549 ₽"
          image="https://o.remove.bg/downloads/6bbbb6dd-9367-4cf1-83cf-052e96a8db9a/png-clipart-pizza-pizza-removebg-preview.png"
        />

        <PizzaCard
          id="2"
          title="EASY PEASY чикен а-ля хрен"
          info="Курица, Лук, Соус Карбонара, Сыр Моцарелла, Чипсы EASY PEASY..."
          price="249 ₽"
          image="https://o.remove.bg/downloads/6de553f4-e9aa-4333-b0f7-c469a6cab527/png-transparent-pizza-garlic-bread-food-clock-ingredient-pizza-thumbnail-removebg-preview.png"
        />

        <PizzaCard
          id="3"
          title="Сырная с ветчиной"
          info="Ветчина, Сыр Моцарелла, Томатный соус"
          price="399 ₽"
          image="https://o.remove.bg/downloads/ccc25c13-eacd-4a8e-989f-1b826ea2b253/fresh-tasty-four-seasons-pizza-isolated-white-background_136401-4229-removebg-preview.png"
        />

        <PizzaCard
          id="0"
          title="Чикен Сладкий Чили"
          info="Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус, Соус..."
          price="499 ₽"
          image="https://o.remove.bg/downloads/61deb14e-79aa-4f0e-a55d-29e4fbcf63c3/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail-removebg-preview.png"
        />

        <PizzaCard
          id="1"
          title="EASY PEASY огуречный расколбас"
          info="Огурцы маринованные, Пепперон..."
          price="549 ₽"
          image="https://o.remove.bg/downloads/6bbbb6dd-9367-4cf1-83cf-052e96a8db9a/png-clipart-pizza-pizza-removebg-preview.png"
        />

        <PizzaCard
          id="2"
          title="EASY PEASY чикен а-ля хрен"
          info="Курица, Лук, Соус Карбонара, Сыр Моцарелла, Чипсы EASY PEASY..."
          price="249 ₽"
          image="https://o.remove.bg/downloads/6de553f4-e9aa-4333-b0f7-c469a6cab527/png-transparent-pizza-garlic-bread-food-clock-ingredient-pizza-thumbnail-removebg-preview.png"
        />

        <PizzaCard
          id="3"
          title="Сырная с ветчиной"
          info="Ветчина, Сыр Моцарелла, Томатный соус"
          price="399 ₽"
          image="https://o.remove.bg/downloads/ccc25c13-eacd-4a8e-989f-1b826ea2b253/fresh-tasty-four-seasons-pizza-isolated-white-background_136401-4229-removebg-preview.png"
        />

      </ScrollView>

    </View>
  )
}

const s = StyleSheet.create({
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