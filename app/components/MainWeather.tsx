import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from 'assets'
import { getFontSize, getHeight, getWidth } from 'lib'
import { AppliedTheme } from 'themes'
import { useReduxSelector } from 'store'

const theme=AppliedTheme();
const MainWeather = () => {
  const  {weather,theme}=useReduxSelector(state=>state.Main)
  return (
    <View>
      <Image source={theme==='Dark'? images.cloudRain :images.sun}  style={styles.mainImage}/>
      <Text style={styles.heading}>{weather?.current.temp_c}&#176;C</Text>
      <Text style={styles.subText}>{weather?.current.condition.text}</Text>
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
    fontSize:getFontSize(16),
    fontWeight:'400',
    textAlign:'center',

  },

})