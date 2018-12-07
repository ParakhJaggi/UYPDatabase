import _ from 'lodash';
import React from 'react';
import {
	Container,
	Button,
	Table,
	Col, FormGroup, Label, Input, Row, Card, CardBody, Form,
} from 'reactstrap';
import * as Users from 'js/utils/Users';
import * as ReduxForm from 'redux-form';
import PropTypes from 'prop-types';
import Cookie from 'universal-cookie';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';
import {getRegisteredUsers} from 'js/utils/Users';

class ViewUserPage extends React.Component {

	constructor(props){
		super(props);
		getRegisteredUsers()
			.then(function (response) {
				console.log('this is the list of users');
				console.log(response);
				const myCookie = new Cookie();
				myCookie.set('possibleUsers', response, {path: '/'});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	viewUserForm = (e) => {
		e.preventDefault();
		Users.getUserExtraDetails(e.target.username.value)
			.then(function (response) {
				const myCookie = new Cookie();
				myCookie.set('currentApplicant', response, {path: '/'});
				window.location.href = '/#/accept-application';
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	viewUser = (e, username) => {
		e.preventDefault();
		Users.getUserExtraDetails(username)
			.then(function (response) {
				const myCookie = new Cookie();
				myCookie.set('currentApplicant', response, {path: '/'});
				window.location.href = '/#/accept-application';
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	render() {
		const myCookie = new Cookie();
		const applicationList = myCookie.get('possibleUsers');

		return (
			<div style={{marginTop: 100}}>
				<React.Fragment>
					<Container fluid>
						<Row>
							<Col lg={12} md={12} sm={12} xs={12}>
								<Card>
									<CardBody>
										<Form name="form" onSubmit={this.viewUserForm.bind(this)}>
											<Row form>
												<Col md={12}>
													<FormGroup>
														<Label for="username">View Registered User with username</Label>
														<Input type="text" name="username"
														       placeholder= "username"/>
													</FormGroup>
												</Col>
											</Row>
											<Button>View Applicant</Button>
										</Form>
										<br/>
									</CardBody>
								</Card>
							</Col>
						</Row>

						<Table responsive striped hover style={{
							margin: 10,
							borderColor: 'black',
							border: 5
						}}>
							<React.Fragment>
								<thead>
								<tr>
									<th>Applicant Username</th>
									<th> </th>
								</tr>
								</thead>
								<tbody>
								{ _.isDefined(applicationList.usernameList) &&
								applicationList.usernameList.map(applicant => (
									<tr key={applicant}>
										<th scope="row">{applicant}</th>
										<th><Button onClick={(e) => this.viewUser(e,applicant)}>View User</Button></th>
									</tr>
								))}
								</tbody>
							</React.Fragment>
						</Table>
					</Container>
				</React.Fragment>
			</div>
		);
	}
}

ViewUserPage.contextTypes = {
	router: PropTypes.object.isRequired,
};

ViewUserPage = ReduxForm.reduxForm({form: 'applicants'})(ViewUserPage);

ViewUserPage = connect(
	state => ({
		applicants: Users.State.getApplicants(state),
		user: Users.State.getUser(state),
	}),
	dispatch => ({
		authenticate: (principal, password) => dispatch(Users.Actions.authenticate(principal, password))
	})
)(ViewUserPage);

export default ViewUserPage;