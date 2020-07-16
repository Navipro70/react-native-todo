import React, {FC, ReactNode} from 'react'
import {View, StyleSheet, FlexStyle} from 'react-native'

type TCard = {
    children: ReactNode;
    extraStyle?: FlexStyle
}

export const Card: FC<TCard> = ({ children, extraStyle }) => {
	return <View style={{...styles.default , ...extraStyle}}>{children}</View>
}

const styles = StyleSheet.create({
    default: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    }
})
