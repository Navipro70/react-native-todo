import React, {FC} from "react";
import {View, Button, StyleSheet, TouchableOpacity, Text, GestureResponderEvent, FlexStyle} from "react-native";

type TCustomButton = {
    title: string;
    onPress: ([...args]: any) => void;
}

export const CustomButton: FC<TCustomButton> = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer} activeOpacity={0.8}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: '40%'
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});