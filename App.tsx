import React, { useState } from 'react'
import { View } from 'react-native'
import { Navbar } from './src/components/Navbar'
import { AddingTodo } from './src/components/AddingTodo'

export default function App() {
  const [todos, setTodos] = useState<Array<ITodo>>([])
  const addTodo: TAddTodo = (todo) => {
    setTodos([todo, ...todos])
  }
  console.log(todos)
  return (
    <>
      <Navbar />
      <AddingTodo addTodo={addTodo} />
    </>
  )
}
