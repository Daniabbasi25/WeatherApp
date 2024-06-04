import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Fragment } from 'react'
import { AppliedTheme } from 'themes'
import { LinearGradient } from 'expo-linear-gradient';
import { Header, MainWeather, DetailedComponent, WindAndTemp } from 'components';
import { useGeolocation, useWeather } from 'hooks';
import ErrorScreen from './ErrorScreen';
import { useReduxSelector } from 'store';
import { getWidth } from 'lib';


const MainScreen = () => {
  const theme=AppliedTheme()
  const { latitude, longitude, errorMsg } = useGeolocation();
  const {  errorMsg: weatherErrorMsg,weather } = useWeather(latitude, longitude);
  const {isLoading,weather: weatherRedux}=useReduxSelector(state=>state.Main)
if(errorMsg){

  return (
    <ErrorScreen errorMsg={errorMsg} />
  )
}

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={theme.background.screenBackgroundLinear}
style={{flex:1}}
      start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <SafeAreaView style={{flex:1}}>


        <ScrollView
        contentContainerStyle={styles.screenContainer}
        >
          {
            isLoading && weather!==undefined ? 
            <ActivityIndicator  size={getWidth(40)}/> :
            <Fragment>
              {
                isLoading && <ActivityIndicator  size={getWidth(40)}/> 
              }
        <MainWeather />
<Header />

        <DetailedComponent />
            </Fragment>
          }

        </ScrollView>
        </SafeAreaView>
    </LinearGradient>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  screenContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  }
})