import React, { FC, useState } from 'react'
import { View, StyleSheet, Button, TextInput } from 'react-native'
import { TAddTodo } from '../types'

type TProps = {
	addTodo: TAddTodo,
}

export const AddingTodo: FC<TProps> = ({ addTodo }) => {
	const [inputText, setInputText] = useState<string>('')
	const handleAddingTodo = () => {
		addTodo({
			timestamp: new Date().toISOString(),
			title: inputText,
		})
		setInputText('')
	}
	return (
		<View style={styles.div}>
			<TextInput
				style={styles.customInput}
				onChangeText={setInputText}
				value={inputText}
			/>
			<Button title=" + " onPress={handleAddingTodo} />
		</View>
	)
}

const styles = StyleSheet.create({
	div: {
		height: 80,
		width: '100%',
		backgroundColor: '#91b',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	customInput: {
		width: '70%',
		padding: 5,
		color: '#fff',
		borderColor: '#fff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 10,
	},
})
