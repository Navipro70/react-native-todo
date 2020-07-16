import React, { FC, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ITodo, TChangeTodoText } from '../types'
import { IMainScreenProps } from './MainScreen'
import { Card } from '../components/ui-components/Card'
import { CustomButton } from '../components/ui-components/CustomButton'
import { EditModal } from '../components/EditModal'

type ITodoScreen = Omit<IMainScreenProps, 'todos' | 'addTodo'> & {
	todo: ITodo,
	changeTodoText: TChangeTodoText,
}

export const TodoScreen: FC<ITodoScreen> = ({
	setTodo,
	deleteTodo,
	todo,
	changeTodoText,
}) => {
	const [modal, setModal] = useState<boolean>(false)

	return (
		<View>
			<EditModal
				isOpen={modal}
				setEditModal={setModal}
				todo={todo}
				changeTodoText={changeTodoText}
			/>
			<Card extraStyle={styles.card}>
				<Text style={styles.cardText}>{todo.title}</Text>
				<CustomButton title="Ред" onPress={setModal.bind(null, true)} />
			</Card>
			<View style={styles.buttons}>
				<CustomButton title="Back" onPress={setTodo.bind(null, null)} />
				<CustomButton
					title="Delete"
					onPress={deleteTodo.bind(null, todo.timestamp)}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	viewBlock: {
		alignItems: 'center',
		backgroundColor: 'blue',
		padding: 20,
	},
	card: {
		marginBottom: 20,
		height: 75,
		justifyContent: 'space-around',
	},
	cardText: {
		fontSize: 24,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
})
