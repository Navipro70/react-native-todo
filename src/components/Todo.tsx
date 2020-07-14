import React, { FC } from 'react'
import { ITodo } from '../types'
import { StyleSheet, Text, View } from 'react-native'

type TProps = {
	todo: ITodo,
}

export const Todo: FC<TProps> = ({ todo }) => {
	const { timestamp, title } = todo
	return (
		<View style={styles.todoDiv}>
			<Text style={styles.todoText}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	todoText: {
		color: '#000',
	},
	todoDiv: {
		backgroundColor: '#91b',
		borderColor: '#020202',
		borderStyle: 'solid',
		borderWidth: 2,
		marginTop: 5,
		borderRadius: 6,
		width: '80%',
		padding: 5,
		minHeight: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
