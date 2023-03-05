import { View, Text } from 'react-native'
import React from 'react'
import DrunkCard from './DrunkCard'

export default function PizzaRow() {
  return (
    <View>

     <DrunkCard 
      id="0"
      title="Mirinda"
      price="199 ₽"
      image="https://www.pngitem.com/pimgs/m/292-2924390_mirinda-orange-flavour-250ml-hd-png-download.png"
     />

     <DrunkCard 
      id="1"
      title="Pepsi MAX"
      price="99 ₽"
      image="https://cdn.shopify.com/s/files/1/2332/2107/products/pepsi-max.jpg?v=1617960266"
     />

     <DrunkCard 
      id="2"
      title="Pepsi"
      price="99 ₽"
      image="https://dostavo4ka.uz/upload-file/2021/07/01/6222/750x750-e67fdad5-0604-41bf-8e41-0a514960f1d5.jpg"
     />

     <DrunkCard 
      id="3"
      title="Pepsi Дикая вишня"
      price="99 ₽"
      image="https://d9ae6ad5-3627-4bf2-85a7-22bbd5549e94.selcdn.net/uploads/picture/picture/86258/large_file.jpeg"
     />

    </View>
  )
}