import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { AppliedTheme } from 'themes'
import { getWidth } from 'lib'

const theme=AppliedTheme()

interface Props{
    children: React.ReactNode
}
const BackgroundContainer:FC<Props> = ({children}) => {
  return (
    <View style={styles.container}>
     {children}
    </View>
  )
}

export default BackgroundContainer

const styles = StyleSheet.create({
    container:{
backgroundColor:theme.background.containerBackground,
borderRadius:20,
alignSelf:'center',
width:getWidth(90),
paddingVertical:10,
paddingHorizontal:10,
marginTop:10
    }
})