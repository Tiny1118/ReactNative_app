import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{ backgroundColor: "#fff", shadowColor: '#808080', shadowOpacity: 40, shadowOffset: 0, marginVertical: 10, paddingBottom: 20, marginRight: 20 }}
      onPress={() => {
        navigation.navigate("Restaurant", {
          id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat
        })
      }}
      >
      <Image
        source={{
          uri: imgUrl
        }}
        style={{ width: 280, height: 200 }}
      />
      <View style={{ paddingLeft: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: '500', paddingTop: 10 }}>{title}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='star' style={{ opacity: 0.6, marginRight: 10 }} color="#ff6600" size={20} />
          <Text>
            <Text style={{ opacity: 0.6, color: '#ff6600', }}>{rating} </Text>• {genre}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='location-outline' color="#808080" size={22} style={{ opacity: 0.6, marginRight: 5 }} />
          <Text style={{ color: "#808080" }}>Nearby • {address}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard