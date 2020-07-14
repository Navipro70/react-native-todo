import React, { useState } from 'react'
import { ITodo, TAddTodo } from './src/types'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { AddingTodo } from './src/components/AddingTodo'
import { Todo } from './src/components/Todo'

export default function App() {
	const [todos, setTodos] = useState<Array<ITodo>>([])
	const addTodo: TAddTodo = (todo) => {
		setTodos([todo, ...todos])
	}

	return (
		<>
			<Navbar />
			<AddingTodo addTodo={addTodo} />
			<ScrollView style={styles.allTodos}>
				{todos ? (
					todos.map((todo) => <Todo key={todo.timestamp} todo={todo} />)
				) : (
					<Text>Todo list is empty</Text>
				)}
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	allTodos: {
		backgroundColor: '#fff',
		width: '30%'
	},
})
