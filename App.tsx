
import React from 'react'
import { MainScreen } from 'screens'

import { Provider } from 'react-redux';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'expo-status-bar';
import { AppliedTheme } from 'themes';

const App = () => {
  const theme=AppliedTheme()


  return (
<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
		  <MainScreen />
			</PersistGate>

			<StatusBar backgroundColor={theme.background.containerBackground} />

		</Provider>
    
   
  )

}

export default App

