import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from 'assets'
import { getHeight, getWidth } from 'lib'

const MainWeather = () => {
  return (
    <View>
      <Image source={images.cloudRain}  style={styles.mainImage}/>
    </View>
  )
}

export default MainWeather

const styles = StyleSheet.create({
  mainImage:{
    width:getWidth(40),
    height:getHeight(30),
    resizeMode:'cover',

  }

})