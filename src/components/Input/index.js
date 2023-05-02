import { TextInput } from 'react-native'
import React from 'react'
import styles from './styles'

const Input = ({...restProps}) => {
  return (
	<TextInput style={styles.input} {...restProps}

  />
  )
}

export default Input