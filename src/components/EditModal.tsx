import React, { FC, useEffect, useState } from 'react'
import {Modal, TextInput, View, StyleSheet, Alert} from 'react-native'
import { CustomButton } from './ui-components/CustomButton'
import { TChangeTodoText, ITodo, TMarkAndDelete } from '../types'

type TEditModal = {
	isOpen: boolean,
	setEditModal: (isOpen: boolean) => void,
	todo: ITodo,
	changeTodoText: TChangeTodoText,
}

export const EditModal: FC<TEditModal> = ({
	isOpen,
	setEditModal,
	todo,
	changeTodoText,
}) => {
	const [todoText, setTodoText] = useState<string>('')
	useEffect(() => {
		setTodoText(todo.title)
	}, [])
	const onSave = () => {
	    if (todoText === '') {
            Alert.alert('Field cant be empty')
            return
        }
		changeTodoText(todoText, todo.timestamp)
		setEditModal(false)
	}
	const onCancel = () => {
		setTodoText(todo.title)
		setEditModal(false)
	}
	return (
		<Modal animationType="slide" visible={isOpen}>
			<View style={styles.modal}>
				<TextInput
					style={styles.input}
					value={todoText}
					onChangeText={setTodoText}
				/>
				<View style={styles.viewButtons}>
					<CustomButton title="Cancel" onPress={onCancel} />
					<CustomButton title="Save" onPress={onSave} />
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	viewButtons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
	},
	input: {
		borderBottomColor: '#e471ab',
		borderBottomWidth: 2,
		marginBottom: 40,
		width: '80%',
	},
})
