import { View, Text } from 'react-native'
import React from 'react'
import PizzaCard from './PizzaCard'

export default function PizzaRow() {
  return (
    <View>

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

    </View>
  )
}