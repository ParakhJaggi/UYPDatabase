import _ from 'lodash';
import React from 'react';
import {
	Container,
	Button,
	Table,
	Col, FormGroup, Label, Input, Row, Card, CardBody, Form,
} from 'reactstrap';
import {getApplicants, getOnePet} from 'js/utils/Users';
import * as Users from 'js/utils/Users';
import * as ReduxForm from 'redux-form';
import PropTypes from 'prop-types';
import Cookie from 'universal-cookie';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

class ViewApplicationPage extends React.Component {

	constructor(props){
		const myCookie = new Cookie();
		super(props);
		getApplicants()
			.then(function (response) {
				console.log('user has clicked editPet button');
				console.log(response);
				const myCookie = new Cookie();
				myCookie.set('possibleApplicants', response, {path: '/'});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	viewApplication = (e) => {
		e.preventDefault();
		Users.getApplicant(e.target.username.value)
			.then(function (response) {
				const myCookie = new Cookie();
				myCookie.set('currentApplicant', response, {path: '/'});
				window.location.href = '/#/current-application';
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	render() {
		const myCookie = new Cookie();
		const applicationList = myCookie.get('possibleApplicants');

		return (
			<div style={{marginTop: 100}}>
				<React.Fragment>
					<Container fluid>
						<Row>
							<Col lg={12} md={12} sm={12} xs={12}>
								<Card>
									<CardBody>
										<Form name="form" onSubmit={this.viewApplication.bind(this)}>
											<Row form>
												<Col md={12}>
													<FormGroup>
														<Label for="id">Enter Class ID to regiser</Label>
														<Input type="text" name="id"
														       placeholder= "Class ID"/>
													</FormGroup>
												</Col>
											</Row>
											<Button>Register</Button>
										</Form>
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
									<th>Class ID</th>
									<th>Level</th>
									<th>Name</th>
									<th>Teacher</th>
									<th>Classroom</th>
									<th>Timeslot</th>
								</tr>
								</thead>
								<tbody>
								{ _.isDefined(applicationList.usernameList) &&
								applicationList.usernameList.map(applicant => (
									<tr key={applicant}>
										<th scope="row">{applicant}</th>
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

ViewApplicationPage.contextTypes = {
	router: PropTypes.object.isRequired,
};

ViewApplicationPage = ReduxForm.reduxForm({form: 'applicants'})(ViewApplicationPage);

ViewApplicationPage = connect(
	state => ({
		applicants: Users.State.getApplicants(state),
		user: Users.State.getUser(state),
	}),
	dispatch => ({
		fetchApplicants: () => dispatch(Users.Actions.getApplicants()),
		authenticate: (principal, password) => dispatch(Users.Actions.authenticate(principal, password))
	})
)(ViewApplicationPage);

export default ViewApplicationPage;