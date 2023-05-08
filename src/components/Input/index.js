import { Keyboard, KeyboardAvoidingView, TextInput, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './styles'

const Input = ({...restProps}) => {
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={'padding'}>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <TextInput style={styles.input} {...restProps}/>
      </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView>
	
  )
}

export default Input