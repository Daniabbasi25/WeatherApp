import { Button, StyleSheet, Text, View,Linking, Platform } from 'react-native'
import React, { FC } from 'react'
import { AppliedTheme } from 'themes'
import { getFontSize } from 'lib'

interface Props{
    errorMsg:string,

}

const theme=AppliedTheme()

const ErrorScreen:FC<Props> = ({ errorMsg }) => {
  const openAppSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.errorText}>{errorMsg}</Text>
      <Button title='Give permission'  onPress={openAppSettings}/>
      
    </View>
  )
}

export default ErrorScreen

const styles = StyleSheet.create({

    screenContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:theme.background.errorBackGround
    },
    errorText:{
        color:theme.text.primary,
        fontWeight:'500',
        fontSize:getFontSize(16),
        textAlign:'center'
    }
})