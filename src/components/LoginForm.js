import React, {Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import Firebase from 'firebase';
import { Card, CardSection, Button, Field, Spinner } from './common/';


class LoginForm extends Component{
	state = { username: '', password: '', error: '', loading: false };
	onLoginSuccess() {
		this.setState({ email: '', password: '', loading: false, error: '' });
    }
	onLoginFail() {
		this.setState({ error: 'Authentication Failed', loading: false });
	}
	loginButtonPressed() {
		this.setState({ error: '', loading: true });
		const { username, password } = this.state;
		Firebase.auth().signInWithEmailAndPassword(username,password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => { 
				Firebase.auth().createUserWithEmailAndPassword(username,password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}
	renderButtonOrSpinner() {
		if (this.state.loading) {
			return <Spinner size="small" />;
		}
		return (
			<Button onPress={this.loginButtonPressed.bind(this)}>
				Log In
			</Button>
		);
	}
	render(){
		return(
			
			<Card>
				<CardSection>
					<Field 
						placeholder='test@gmail.com'
						label='Email'
						value={ this.state.email }
					    onChangeText={ username => this.setState({ username })}/>
				</CardSection>
				<CardSection>
					<Field 
						secureTextEntry
						placeholder='password'
						label='Password'
						value={ this.state.password }
					    onChangeText={ password => this.setState({ password })}/>
				</CardSection>
				<Text style={styles.errorStyle}>{this.state.error}</Text>
				<CardSection>
					{this.renderButtonOrSpinner()}
				</CardSection>
			</Card>
			
		);
	}
}
const styles = {
	errorStyle: {
		fontSize: 20,
    	alignSelf: 'center',
    	color: 'red'
	}
};

export default LoginForm;