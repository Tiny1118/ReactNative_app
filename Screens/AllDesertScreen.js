import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import DesertCard from '../Components/DesertCard'

export default function AllDesertScreen() {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      title: "Все Десерты"
    })
  }, [])

  return (
    <View style={s.body}>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>


        <DesertCard
          id="0"
          title="Узелки сладкие"
          info="Мягкие булочки с корицей и сахарной пудрой"
          full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
          price="149"
          image="https://gidmenu.com/upload/iblock/462/4629e965c30e3c235c9db30cf9d7fae3.png"
        />

        <DesertCard
          id="1"
          title="Рогалики с клубникой"
          info="Огурцы маринованные, Пепперон..."
          full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
          price="199"
          image="http://vkus-eda-dostavka.ru/static/images/e3b2ee7911b1f04cbd53309a3d524bf2-600x450.png"
        />

        <DesertCard
          id="2"
          title="Сырники"
          info="Нежные сырники из печи с соусом на выбор"
          full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
          price="159"
          image="https://vipechkaopt.ru/upload/shop_3/3/2/6/item_326/shop_items_catalog_image326.jpg"
        />

        <DesertCard
          id="3"
          title="Магнат Шоколадный трюфель"
          info="Шоколадное мороженое с кусочк..."
          full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
          price="139"
          image="https://mykaleidoscope.ru/uploads/posts/2022-07/1657659050_2-mykaleidoscope-ru-p-morozhenoe-magnat-shokoladnii-tryufel-vkus-2.jpg"
        />

        <DesertCard
          id="0"
          title="Узелки сладкие"
          info="Мягкие булочки с корицей и сахарной пудрой"
          full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
          price="149"
          image="https://gidmenu.com/upload/iblock/462/4629e965c30e3c235c9db30cf9d7fae3.png"
        />

        <DesertCard
          id="1"
          title="Рогалики с клубникой"
          info="Огурцы маринованные, Пепперон..."
          full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
          price="199"
          image="http://vkus-eda-dostavka.ru/static/images/e3b2ee7911b1f04cbd53309a3d524bf2-600x450.png"
        />

        <DesertCard
          id="2"
          title="Сырники"
          info="Нежные сырники из печи с соусом на выбор"
          full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
          price="159"
          image="https://vipechkaopt.ru/upload/shop_3/3/2/6/item_326/shop_items_catalog_image326.jpg"
        />

        <DesertCard
          id="3"
          title="Магнат Шоколадный трюфель"
          info="Шоколадное мороженое с кусочк..."
          full_info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat ex rerum, exercitationem maiores ut, adipisci voluptate ipsam ullam eius reprehenderit sit voluptas at corporis illo. Suscipit modi ea recusandae hic."
          price="139"
          image="https://mykaleidoscope.ru/uploads/posts/2022-07/1657659050_2-mykaleidoscope-ru-p-morozhenoe-magnat-shokoladnii-tryufel-vkus-2.jpg"
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