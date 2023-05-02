import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const ProductCard = ({children, otherStyles,}) => {

  return (
	<View style={{...styles.container, ...otherStyles}}>
	  {children}
	</View>
  )
}

export default ProductCard