import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { MainScreen,ErrorScreen } from 'screens'
import { useGeolocation, useWeather } from 'hooks';

const App = () => {
  const { latitude, longitude, errorMsg } = useGeolocation();
  const {  errorMsg: weatherErrorMsg,weather } = useWeather(latitude, longitude);

if(errorMsg){

  return (
    <ErrorScreen errorMsg={errorMsg} />
  )
}

  return (

     <MainScreen />
   
  )
}

export default App

const styles = StyleSheet.create({})