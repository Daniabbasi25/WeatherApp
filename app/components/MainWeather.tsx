import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from 'assets'
import { getFontSize, getHeight, getWidth } from 'lib'
import { AppliedTheme } from 'themes'

const theme=AppliedTheme();
const MainWeather = () => {
  return (
    <View>
      <Image source={images.cloudRain}  style={styles.mainImage}/>
      <Text style={styles.heading}>20</Text>
    </View>
  )
}

export default MainWeather

const styles = StyleSheet.create({
  mainImage:{
    resizeMode:'cover',
    width:getWidth(40),
    height:getWidth(40),

  },
  heading:{
    color:theme.text.primary,
    fontSize:getFontSize(16),
    fontWeight:'600',
    textAlign:'center'
  }

})