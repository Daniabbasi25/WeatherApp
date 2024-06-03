import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppliedTheme } from 'themes'
import { LinearGradient } from 'expo-linear-gradient';


const theme=AppliedTheme()
const MainScreen = () => {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={theme.background.screenBackgroundLinear}
      style={styles.screenContainer} >
        <Text>MainScreen</Text>

    </LinearGradient>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  screenContainer:{
    flex:1,

  }
})