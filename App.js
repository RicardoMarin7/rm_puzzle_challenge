import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { data } from './src/api/carousel'
import Carousel from './src/components/Carousel'

const App = () => {
  

  

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden/>
      <Carousel data={data} />
    </SafeAreaView>
  )
}

export default App;