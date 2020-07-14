import React, { useState } from 'react'
import { ITodo, TAddTodo } from './src/types'
import { FlatList, StyleSheet, Text } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { AddingTodo } from './src/components/AddingTodo'
import { Todo } from './src/components/Todo'

export default function App() {
	const [todos, setTodos] = useState<Array<ITodo>>([])
	const addTodo: TAddTodo = (todo) => {
		setTodos([todo, ...todos])
	}
	const markTodo = (todoTimestamp: string) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				if (todo.timestamp === todoTimestamp) todo.completed = !todo.completed
				return todo
			})
		)
	}
	const deleteTodo = (todoTimestamp: string) => {
		setTodos((prevTodos) =>
			prevTodos.filter((todo) => todo.timestamp !== todoTimestamp)
		)
	}

	return (
		<>
			<Navbar />
			<AddingTodo addTodo={addTodo} />
			<FlatList
				style={styles.allTodos}
				contentContainerStyle={{ alignItems: 'center' }}
				renderItem={({ item }) => (
					<Todo todo={item} deleteTodo={deleteTodo} markTodo={markTodo} />
				)}
				data={todos}
				keyExtractor={(item) => item.timestamp}
			/>
		</>
	)
}

const styles = StyleSheet.create({
	allTodos: {
		backgroundColor: '#fff',
		width: '100%',
	},
})
