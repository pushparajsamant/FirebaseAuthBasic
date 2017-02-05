import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Field = ({ label,value,onChangeText,placeholder,secureTextEntry }) => {
	const {fieldStyle,labelStyle, textInputStyle} = styles;
	return (
		<View style={fieldStyle}>
			<Text style={labelStyle}>{ label }</Text>
			<TextInput value={value}
				secureTextEntry={secureTextEntry}
				autoCorrect={false}
				placeholder={placeholder}
			    onChangeText={onChangeText}
			    style={textInputStyle}>
			</TextInput>
		</View>
	)
}
const styles = {
	fieldStyle: {
		height: 40,
	    flex: 1,
	    flexDirection: 'row',
	    alignItems: 'center'
	},
	labelStyle: {
		fontSize: 18,
	    paddingLeft: 40,
	    flex: 1,
	},
	textInputStyle: {
		color: '#000',
	    paddingRight: 5,
	    paddingLeft: 5,
	    fontSize: 18,
	    lineHeight: 23,
	    flex: 2,
	    backgroundColor: '#D3D3D3'
	}

}
export {Field};