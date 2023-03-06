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
          full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
          info="Огурцы маринованные, Пепперон..."
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

      </ScrollView>

    </View>
  )
}

const s = StyleSheet.create({
  body: {
    paddingBottom: 20
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