import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppliedTheme } from 'themes'
import { LinearGradient } from 'expo-linear-gradient';
import { MainWeather, TodaysTemp, WindAndTemp } from 'components';


const theme=AppliedTheme()
const MainScreen = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={theme.background.screenBackgroundLinear}
style={{flex:1}}
      start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView
        contentContainerStyle={styles.screenContainer}
        >

        <MainWeather />
        <WindAndTemp />
        <TodaysTemp />
        </ScrollView>

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