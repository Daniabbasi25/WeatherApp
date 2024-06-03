import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppliedTheme } from 'themes'
import { LinearGradient } from 'expo-linear-gradient';
import { MainWeather } from 'components';


const theme=AppliedTheme()
const MainScreen = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={theme.background.screenBackgroundLinear}
      style={styles.screenContainer}
      start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <MainWeather />

    </LinearGradient>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  screenContainer:{
    flex:1,
    alignItems:'center'

  }
})