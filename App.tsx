import React, { useState } from 'react'
import { ITodo, TAddTodo } from './src/types'
import { Navbar } from './src/components/ui-components/Navbar'
import { MainScreen } from './src/Screens/MainScreen'
import { TodoScreen } from './src/Screens/TodoScreen'
import {Alert, StyleSheet} from 'react-native'

export default function App() {
	const [todos, setTodos] = useState<Array<ITodo>>([])
	const [todoId, setTodoId] = useState<null | string>(null)
	const addTodo: TAddTodo = (todo) => {
		setTodos([todo, ...todos])
	}
	const deleteTodo = (todoTimestamp: string) => {
		Alert.alert(
			'Deleting todo',
			'Are you sure delete this todo?',
			[
				{
					text: 'Cancel',
					style: 'destructive'
				},
				{
					text: 'Delete',
					onPress: () => {
						setTodoId(null);
						setTodos((prevTodos) =>
							prevTodos.filter((todo) => todo.timestamp !== todoTimestamp)
						)
					},
					style: 'cancel'
				},
			],
		);
	}
	const changeTodoText = (newTodoText: string, timestamp: string): void => {
		todos.map(todo => {
			if (todo.timestamp === timestamp) todo.title = newTodoText
			return todo
		})
	}
	let content = (
		<MainScreen
			setTodo={setTodoId}
			deleteTodo={deleteTodo}
			addTodo={addTodo}
			todos={todos}
		/>
	)
	if (todoId) content = (
			<TodoScreen
				setTodo={setTodoId}
				todo={todos.find((todoItem) => todoItem.timestamp === todoId) as ITodo}
				deleteTodo={deleteTodo}
				changeTodoText={changeTodoText}
			/>
		)
	return (
		<>
			<Navbar />
			{content}
		</>
	)
}