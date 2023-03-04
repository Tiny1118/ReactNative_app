import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useLayoutEffect, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from "axios"
import Icon from "react-native-vector-icons/Ionicons"
import DishRow from '../Components/DishRow'

const RestaurantScreen = () => {
  const navigation = useNavigation()
  const { params: {
    id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
  } } = useRoute()



  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])



  return (
    <ScrollView>
      <View style={{ position: 'relative' }}>
        <Image
          source={{
            uri: imgUrl
          }}
          style={{
            width: '100%',
            height: 300
          }}
        />
        <TouchableOpacity onPress={navigation.goBack} style={{ position: 'absolute', top: 45, left: 12 }}>
          <Icon name='arrow-back-circle' size={"40"} color='#ff6600' />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: '#fff' }}>

        <View style={{ paddingVertical: 20, paddingHorizontal: 12 }}>
          <Text style={{ fontSize: 30, fontWeight: '600' }}>{title}</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon name='star' size={"22"} color='#ff6600' style={{ opacity:"0.6", marginRight: 5 }} />
              <Text>
                <Text style={{ opacity: 0.6, color: '#ff6600' }}>{rating} </Text>• {genre}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
              <Icon name='location-outline' color="#808080" size={22} style={{ opacity: 0.6, marginRight: 5 }} />
              <Text style={{ color: "#808080" }}>Nearby • {address}</Text>
            </View>

          </View>

          <Text style={{ color: '#808080', marginTop: 15 }}>{short_description}</Text>

        </View>

        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, paddingVertical: 15, borderTopColor: "#ccc", borderWidth: 1, borderColor: '#fff' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='help-circle-outline' size={30} color='#808080' style={{ opacity: 0.6, marginRight: 10 }} />
            <Text style={{ fontSize: 14, fontWeight: '500' }}>Have a food allergy?</Text>
          </View>
          <Icon name='chevron-forward' color="#ff6600" size={30} />
        </TouchableOpacity>

      </View>

      <View>
        <Text style={{ paddingHorizontal: 12, fontSize: 20, fontWeight: '700', paddingVertical: 20 }}>Menu</Text>
      </View>


    </ScrollView>
  )
}

export default RestaurantScreen