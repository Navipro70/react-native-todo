import React, { FC } from 'react'
import { StyleSheet, FlatList, View, Image } from 'react-native'
import { AddingTodo } from '../components/AddingTodo'
import { Todo } from '../components/Todo'
import { ITodo, TAddTodo, TMarkAndDelete, TSetTodo } from '../types'

export interface IMainScreenProps {
	todos: Array<ITodo>;
	addTodo: TAddTodo;
	deleteTodo: TMarkAndDelete;
	setTodo: TSetTodo;
}

export const MainScreen: FC<IMainScreenProps> = ({
	todos,
	addTodo,
	deleteTodo,
	setTodo,
}) => {
	let content
	if (todos.length === 0)
		content = (
			<View style={styles.divImg}>
				<Image
					style={styles.img}
					source={require('../../assets/noTodos.png')}
				/>
			</View>
		)
	else
		content = (
			<FlatList
				style={styles.allTodos}
				contentContainerStyle={{ alignItems: 'center' }}
				renderItem={({ item }) => (
					<Todo todo={item} deleteTodo={deleteTodo} setTodo={setTodo} />
				)}
				data={todos}
				keyExtractor={(item) => item.timestamp}
			/>
		)
	return (
		<>
			<AddingTodo addTodo={addTodo} />
			{content}
		</>
	)
}

const styles = StyleSheet.create({
	allTodos: {
		backgroundColor: '#fff',
		width: '100%',
	},
	divImg: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 50,
	},
	img: {
		width: 100,
		height: 100,
	},
})
