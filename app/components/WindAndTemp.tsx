import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundContainer from './BackgroundContainer'
import { AppliedTheme } from 'themes'
import { getFontSize } from 'lib'

const theme=AppliedTheme()
const WindAndTemp = () => {
  return (
    <BackgroundContainer>
        <View style={styles.continer}>
<Text style={styles.text}>
6%
</Text>
<Text style={styles.text}>
6%
</Text>
<Text style={styles.text}>
6%
</Text>
        </View>

    </BackgroundContainer>
  )
}

export default WindAndTemp

const styles = StyleSheet.create({
    continer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    text:{
        color:theme.text.primary,
        fontSize:getFontSize(12)
    }
})