import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({size}) => {
	const {spinnerStyle} = styles;
	return(
		<View style={spinnerStyle}>
			<ActivityIndicator size={size} />
		</View>
	)
}
const styles = {
	spinnerStyle:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
};

export {Spinner};