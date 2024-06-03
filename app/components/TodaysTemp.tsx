import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundContainer from './BackgroundContainer'
import { AppliedTheme } from 'themes'
import { getFontSize } from 'lib'


const theme=AppliedTheme()
const TodaysTemp = () => {
  return (
    <BackgroundContainer>
<View style={styles.header}>
    <Text style={styles.today}>
        Today
    </Text>
    <Text style={styles.date}>
      {new Date().toLocaleDateString()}
    </Text>
</View>
    </BackgroundContainer>
  )
}

export default TodaysTemp

const styles = StyleSheet.create({
    today:{
        color:theme.text.primary,
        fontSize:getFontSize(16),
        fontWeight:'500'
    },
    date:{
        color:theme.text.primary,
        fontSize:getFontSize(12),
        fontWeight:'400'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})