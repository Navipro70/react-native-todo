import React, {useState} from 'react'
import {View, StyleSheet, Button, TextInput} from 'react-native'

export const AddingTodo = () => {
    const [inputText, setInputText] = useState<string>('')
    const textHandler = (text: string) => {
        setInputText(text)
    }
    return (
        <View style={styles.div}>
            <TextInput style={styles.customInput} onChangeText={textHandler} value={inputText}/>
            <Button title=" + " onPress={() => console.log(inputText)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    div: {
        flex: 0.15,
        backgroundColor: '#91b',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    customInput: {
        width: '70%',
        padding: 5,
        color: '#fff',
        borderColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
    },
})
