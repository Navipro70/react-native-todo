import React from 'react'
import {View} from 'react-native'
import {Navbar} from "./src/components/Navbar";
import { AddingTodo } from './src/components/AddingTodo';

export default function App() {
    return (
            <>
                <Navbar />
                <AddingTodo />
            </>
    )
}