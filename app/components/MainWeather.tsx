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
      <Text style={styles.subText}>sub Text</Text>
    </View>
  )
}

export default MainWeather

const styles = StyleSheet.create({
  mainImage:{
    resizeMode:'cover',
    width:getWidth(60),
    height:getWidth(60),
    marginTop:getHeight(1)

  },
  heading:{
    color:theme.text.primary,
    fontSize:getFontSize(40),
    fontWeight:'600',
    textAlign:'center',
    marginTop:-getHeight(5)
  },
  subText:{
    color:theme.text.primary,
    fontSize:getFontSize(12),
    fontWeight:'400',
    textAlign:'center',

  },

})