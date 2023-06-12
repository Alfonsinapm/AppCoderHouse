import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './BottomTabNavigator'
import AuthNavigator from './AuthNavigator'
import { useSelector } from 'react-redux'

const index = () => {

	// const userId = useSelector(state=>state.auth.userId)
	const userId = {
		userId:'kjndfjdKJSHFBDFNVDhjdfnkvdkf'
	}

  return (
	<NavigationContainer>
		{userId ? <BottomTabNavigator/> : <AuthNavigator/>}
	</NavigationContainer>
  )
}

export default index