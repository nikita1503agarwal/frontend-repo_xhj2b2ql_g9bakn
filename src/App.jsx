import React from 'react'
import MobileShell from './components/MobileShell'
import HomeScreen from './components/screens/HomeScreen'
import ShopScreen from './components/screens/ShopScreen'
import LookbookScreen from './components/screens/LookbookScreen'
import ProfileScreen from './components/screens/ProfileScreen'
import FeaturedScreen from './components/screens/FeaturedScreen'

function App(){
  return (
    <MobileShell screens={{
      home: HomeScreen,
      shop: ShopScreen,
      lookbook: LookbookScreen,
      featured: FeaturedScreen,
      profile: ProfileScreen,
    }} />
  )
}

export default App
