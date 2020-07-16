import React, { CSSProperties, FC } from 'react'
import { ITodo, TMarkAndDelete } from '../types'
import {
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
	View,
} from 'react-native'
import { IMainScreenProps } from '../Screens/MainScreen'

type TTodoProps = Pick<IMainScreenProps, 'setTodo' | 'deleteTodo'> & {
	todo: ITodo,
}

export const Todo: FC<TTodoProps> = ({ todo, setTodo, deleteTodo }) => {
	const { timestamp, title, completed } = todo
	let completedStyle: TextStyle = {}
	completedStyle.textDecorationLine = completed ? 'line-through' : 'none'
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={setTodo.bind(null, timestamp)}
			onLongPress={deleteTodo.bind(null, timestamp)}
		>
			<View style={styles.todoDiv}>
				<Text style={[styles.todoText, completedStyle]}>{title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	todoText: {
		color: '#000',
		fontSize: 20,
	},
	todoDiv: {
		backgroundColor: '#f5f5f5',
		borderColor: '#999991',
		borderStyle: 'solid',
		borderWidth: 2,
		marginVertical: 5,
		borderRadius: 6,
		padding: 5,
		minWidth: '80%',
		minHeight: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
