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
        full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
        price="499"
        image="https://www.pngfind.com/pngs/m/60-603686_-png-transparent-png.png"
      />

      <PizzaCard
        id="1"
        title="EASY PEASY огуречный расколбас"
        info="Огурцы маринованные, Пепперон..."
        full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
        price="549"
        image="https://w7.pngwing.com/pngs/801/839/png-transparent-pizza-margherita-buffalo-wing-italian-cuisine-food-pizza-background-food-recipe-american-food.png"
      />

      <PizzaCard
        id="2"
        title="EASY PEASY чикен а-ля хрен"
        info="Курица, Лук, Соус Карбонара, Сыр Моцарелла, Чипсы EASY PEASY..."
        full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
        price="249"
        image="https://w7.pngwing.com/pngs/56/985/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail.png"
      />

      <PizzaCard
        id="3"
        title="Сырная с ветчиной"
        info="Ветчина, Сыр Моцарелла, Томатный соус"
        full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
        price="399"
        image="https://www.freepnglogos.com/uploads/pizza-png/pizza-images-download-pizza-19.png"
      />

    </View>
  )
}