//Import Library
import React from 'react';
import { Text , View } from 'react-native';

//Create a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>	
	);
};

const styles = {
	viewStyle: {
		backgroundColor: "#169BD5",
		justifyContent: "center",
		alignItems: "center",
		height: 60,
		paddingTop: 15,
		shadowColor: "#080A39",
		shadowOffset: { width: 0 , height: 3 },
		shadowOpacity: 0.9,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20,
		color: '#FFFFFF'
	}
};
//Make it available
export { Header };
