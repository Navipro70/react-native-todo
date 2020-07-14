import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const Navbar = () => {
	return (
		<View style={styles.navbarView}>
			<Text style={styles.navbarText}>Todo app</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	navbarView: {
		height: 100,
		width: '100%',
		backgroundColor: '#ffa2e4',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingBottom: 20,
	},
	navbarText: {
		fontSize: 24,
		color: '#4364ff',
	},
})
