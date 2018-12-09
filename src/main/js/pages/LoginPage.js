import React from 'react';
import {
	CardTitle,
	CardBody,
	Card,
	Col,
} from 'reactstrap';
import * as Bessemer from '../alloy/bessemer/components';
import * as Validation from '../alloy/utils/validation';
import * as ReduxForm from 'redux-form';
import * as Users from '../utils/Users';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';
import Cookie from 'universal-cookie';

class LoginPage extends React.Component {

	constructor(props) {
        const myCookie = new Cookie();
        let authTemp = {
        	'loginSuccees': false
		};
        myCookie.set('authentication', authTemp, {path: '/'});
        super(props);
	}

	onSubmit = ({username, password}) => {
		this.props.authenticate(username,password)
			.then(function () {
				window.location.href = '/';
			})
			.catch(function (error) {
				console.log(error);
			});
	};


	render() {
		let { handleSubmit } = this.props;

		return (
			<div style={{marginTop: 100}} className='center'>
				<Col sm='8'>
					<Card>
						<br/>
						<CardTitle className='center'>Login</CardTitle>
						<CardBody>
							<form name='form' onSubmit={handleSubmit(form => this.onSubmit(form))}>
								<Bessemer.Field name='username' friendlyName='Username'
												validators={[Validation.requiredValidator]}
												field={<input className='form-control' type='text' placeholder='JohnDoe123' /> }/>

								<Bessemer.Field name='password' friendlyName='Password'
												validators={[Validation.requiredValidator, Validation.passwordValidator]}
												field={<input className='form-control' type='password' placeholder='Password' />} />

								<Bessemer.Button>Sign In</Bessemer.Button>
							</form>
						</CardBody>
					</Card>
				</Col>
			</div>
		);
	}
}

LoginPage.contextTypes = {
	router: PropTypes.object.isRequired,
};

LoginPage = ReduxForm.reduxForm({form: 'login'})(LoginPage);
LoginPage = connect(
	state => ({
		user: Users.State.getUser(state)
	}),
	dispatch => ({
		authenticate: (username, password) => dispatch(Users.Actions.authenticate(username, password))
	})
)(LoginPage);

export default LoginPage;