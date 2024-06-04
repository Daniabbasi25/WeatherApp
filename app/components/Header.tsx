import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackgroundContainer from './BackgroundContainer'
import { AppliedTheme } from 'themes'
import { getFontSize, getWidth } from 'lib'
import { setunit, useReduxDispatch, useReduxSelector } from 'store'


const theme=AppliedTheme()
const Header = () => {

    const { weather:data,unit }=useReduxSelector(state=>state.Main)
    const dispatch=useReduxDispatch()
  return (
    <BackgroundContainer>
    <View style={styles.header}>
        <Text style={styles.today}>
            {data?.location.name}
        </Text>
      <View style={styles.row}>
        <TouchableOpacity 
        onPress={()=>dispatch(setunit('C'))}
        style={[styles.buttonBackground,unit==='C' && {
            backgroundColor:theme.background.activeButton
        }]
        }>
            <Text style={styles.button}>
C
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={()=>dispatch(setunit('F'))}
         style={[styles.buttonBackground,unit==='F' && {
            backgroundColor:theme.background.activeButton
        }]
        }>
            <Text style={styles.button}>
F
            </Text>
        </TouchableOpacity>
      </View>
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
    button:{
        color:theme.text.primary,
        fontSize:getFontSize(12),
        fontWeight:'400'
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    row:{
        flexDirection:'row',
alignItems:'center',
gap:getWidth(5)
    },
    buttonBackground:{
        width:getWidth(10),
        height:getWidth(10),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:getWidth(5)
    }

})