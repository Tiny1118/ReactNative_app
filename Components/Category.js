import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import CategoryCard from "./CategoryCard"

const Category = () => {
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch("https://rest-api-7t4y.onrender.com/category")
      .then((res) => res.json())
      .then((json) => setCategory(json))
      .catch((err) => console.log("Fetch Category Error"))
      .finally(() => setLoading(false))
      console.log(category);
  }, [])

  return (
    <ScrollView contentContainerStyle={{
      paddingHorizontal: 12,
      paddingTop: 20
    }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >

      {/* Category Card */}
      {/* <CategoryCard imgURl="https://dotawallpapers.com/wallpaper/dota2hq.eu-tiny-plays-dota-2-3555-1600x900.jpg" title="Testing 1" /> */}

{
  category.map(item => {
   return <TouchableOpacity style={{ width: 150, height: 150, marginRight: 20, borderRadius: 10, position: 'relative'}}>
      <Image
       source={{
        uri: `https://rest-api-7t4y.onrender.com/${item.CategoryImg}`
       }}
       style={{ width: '100%', height: '100%', borderRadius: 10 }}
      />
      <Text style={{ position: 'absolute', bottom: 10, left: 10, color: '#fff' }}>{item.CategoryName}</Text>
    </TouchableOpacity>
  })
}
      
      
    </ScrollView>
  )
}

export default Category