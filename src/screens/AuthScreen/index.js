import { View, Text, TextInput, Button, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useCallback } from 'react'
import { StyleSheet } from "react-native";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/actions/auth.action';
import { useEffect } from 'react';
import { InputLogin } from '../../components';
import { useReducer } from 'react';

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
	console.log(action);
	if (action.type === FORM_INPUT_UPDATE) {
		const updatedValues = {
			...state.inputValues,
			[action.input]: action.value,
		};
		const updatedValidities = {
			...state.inputValidities,
			[action.input]: action.isValid,
		};
		let updatedFormIsValid = true;
		for (const key in updatedValidities) {
			updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
		}
		return {
			inputValues: updatedValues,
			inputValidities: updatedValidities,
			formIsValid: updatedFormIsValid,
		};
	}
	return state;
};

const AuthScreen = () => {
	const dispatch = useDispatch();
	const [error, setError] = useState(null);
  
	useEffect(() => {
	  if (error) {
		Alert.alert("A ocurrido un error", error, [{ text: "Ok" }]);
	  }
	}, [error]);
  
	const [formState, dispatchFormState] = useReducer(formReducer, {
	  inputValues: {
		email: "",
		password: "",
	  },
	  inputValidities: {
		email: false,
		password: false,
	  },
	  formIsValid: false,
	});
  
	const handleSignUp = () => {
	  console.log('handle sign up em y pass')
	  console.log(formState.inputValues.email, formState.inputValues.password)
	  if (formState.formIsValid) {
		dispatch(
		  signUp(formState.inputValues.email, formState.inputValues.password)
		);
	  } else {
		Alert.alert("formulaio invalido", "Ingresa email y usuario valido", [
		  { text: "ok" },
		]);
	  }
	};
  
	const onInputChangeHandler = useCallback(
	  (inputIdentifier, inputValue, inputValidity) => {
		console.log(inputIdentifier, inputValue, inputValidity);
		dispatchFormState({
		  type: FORM_INPUT_UPDATE,
		  value: inputValue,
		  isValid: inputValidity,
		  input: inputIdentifier,
		});
	  },
	  [dispatchFormState]
	);

	return (
		<KeyboardAvoidingView style={styles.mainContainer} behavior='padding' keyboardVerticalOffset={50}>
			<View style={styles.container}>
				<Text style={styles.title}>Create account</Text>
				<View style={styles.inputContainer}>
					<InputLogin
						id="email"
						label="Email"
						keyboardType="email-address"
						required
						email
						autoCapitalize="none"
						errorText="Por favor ingrese un email valido"
						onInputChange={onInputChangeHandler}
						initialValue=""
					/>
					<InputLogin
						id="password"
						label="Password"
						keyboardType="default"
						required
						password
						secureTextEntry
						autoCapitalize="none"
						errorText="Por favor ingrese una contrasena valida"
						onInputChange={onInputChangeHandler}
						initialValue=""
					/>
				</View>
				<View style={styles.footer}>
					<View>
						<Button title='Registrarse' onPress={handleSignUp} />
						{/* <Button title='Iniciar sesion' onPress={console.log('sesion')} /> */}
					</View>
				</View>
			</View>
		</KeyboardAvoidingView>

	)
}

export default AuthScreen

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		paddingTop: 50,
		flex: 1,
		alignItems: "center",
	},
	image: {
		width: "100%",
		height: "40%",
	},
	inputContainer: {
		width: "90%",
	},
	registerButton: {
		backgroundColor: "#F9A924",
		width: "100%",
		height: 50,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	footer: {
		marginTop: 42,
		width: "90%",
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});