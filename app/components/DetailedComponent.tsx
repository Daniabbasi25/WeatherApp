import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundContainer from './BackgroundContainer'
import { AppliedTheme } from 'themes'
import { getFontSize, getHeight } from 'lib'
import { useReduxSelector } from 'store'


const theme=AppliedTheme()
const DetailedComponent = () => {
    const {weather,unit}=useReduxSelector(state=>state.Main)
  return (
    <BackgroundContainer>
<View style={styles.row}>
    <Text style={styles.today}>
    Last updated
    </Text>
    <Text style={styles.date}>
      {weather?.current.last_updated}
    </Text>
</View>
<View style={styles.row}>
    <Text style={styles.today}>
    Humidity
    </Text>
    <Text style={styles.date}>
      {weather?.current.humidity}
    </Text>
</View>
<View style={styles.row}>
    <Text style={styles.today}>
    feels Like
    </Text>
    <Text style={styles.date}>
      {unit==='C'? weather?.current.feelslike_c:weather?.current.feelslike_f}
    </Text>
</View>
<View style={styles.row}>
    <Text style={styles.today}>
    wind kph
    </Text>
    <Text style={styles.date}>
      {weather?.current.wind_kph}
    </Text>
</View>
    </BackgroundContainer>
  )
}

export default DetailedComponent

const styles = StyleSheet.create({
    today:{
        color:theme.text.primary,
        fontSize:getFontSize(16),
        fontWeight:'500'
    },
    date:{
        color:theme.text.primary,
        fontSize:getFontSize(14),
        fontWeight:'400'
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:getHeight(2)
    }
})