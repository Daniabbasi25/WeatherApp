import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundContainer from './BackgroundContainer'
import { AppliedTheme } from 'themes'
import { getFontSize } from 'lib'
import { useReduxSelector } from 'store'


const theme=AppliedTheme()
const Header = () => {

    const data=useReduxSelector(state=>state.Main.weather)
  return (
    <BackgroundContainer>
    <View style={styles.header}>
        <Text style={styles.today}>
            {data?.location.name}
        </Text>
        <Text style={styles.date}>
          {data?.location.localtime}
        </Text>
    </View>
        </BackgroundContainer>
  )
}

export default Header

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