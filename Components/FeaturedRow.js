import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
 return (
  <View>
   <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingHorizontal: 12, paddingTop: 20 }}>
    <Text style={{ fontSize: '20', fontWeight: 'bold' }}>{title}</Text>
    <Icon name='arrow-forward-outline' color="#ff6600" size={28} />
   </View>
   <Text style={{ paddingHorizontal: 12, color: '#808080' }}>{description}</Text>

   <ScrollView
    horizontal
    contentContainerStyle={{
     paddingHorizontal: 12,
    }}
    showsHorizontalScrollIndicator={false}

   >
    {/* RestaurantCard */}
    <RestaurantCard
     id={1}
     imgUrl="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/social/earthshaker.jpg"
     title="Earthshaker"
     rating={4.5}
     genre="Japanese"
     address="123 Main St"
     short_description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
     dishes={[]}
     long={20}
     lat='0'
    />

    <RestaurantCard
     id={2}
     imgUrl="https://dota2ok.ru/wp-content/uploads/2017/05/Sniper-Dota.jpg"
     title="Sniper"
     rating={4.5}
     genre="Japanese"
     address="123 Main St"
     short_description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
     dishes={[]}
     long={20}
     lat='0'
    />

    <RestaurantCard
     id={3}
     imgUrl="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/social/sven.jpg"
     title="Sven"
     rating={4.5}
     genre="Japanese"
     address="123 Main St"
     short_description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
     dishes={[]}
     long={20}
     lat='0'
    />

    <RestaurantCard
     id={4}
     imgUrl="https://c4.wallpaperflare.com/wallpaper/890/926/428/tiny-dota-2-art-wallpaper-preview.jpg"
     title="Tiny"
     rating={4.5}
     genre="Japanese"
     address="123 Main St"
     short_description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
     dishes={[]}
     long={20}
     lat='0'
    />

    <RestaurantCard
     id={5}
     imgUrl="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/social/viper.jpg"
     title="Viper"
     rating={4.5}
     genre="Japanese" 
     address="123 Main St"
     short_description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using"
     dishes={[]}
     long={20}
     lat='0'
    />


   </ScrollView>
  </View>
 )
}

export default FeaturedRow