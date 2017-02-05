import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component { 
	state = { loggedIn: null }
	componentWillMount() {
		firebase.initializeApp({
	    	apiKey: 'AIzaSyCkZAM_AaqcMYZPsf4d55CLH52hAxzljwo',
		    authDomain: 'auth-61fde.firebaseapp.com',
		    databaseURL: 'https://auth-61fde.firebaseio.com',
		    storageBucket: 'auth-61fde.appspot.com',
		    messagingSenderId: '984018675401'
		});
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });	
			}
		});
	}
	renderContent() {
		const { viewStyle } = styles;
		switch (this.state.loggedIn) {
			case false:
				return <LoginForm />;
			case true:
				return (
				  <CardSection>
			          <Button onPress={() => firebase.auth().signOut()}>
			            Log Out
			          </Button>
			      </CardSection>
		        );
			default:
				return (
					<View style={viewStyle}>
						<Spinner size='large' />
					</View>	
				);	
		}
	}
	render() { 
		return (
			<View>
				<Header headerText="Auth" />
				{ this.renderContent() }
			</View>
		);		
	}
	
}
const styles = {
	viewStyle: {
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		height: 600,
		width: null
	}
};
export default App;
