import _ from 'lodash';
import React from 'react';
import {
	Container,
	Button,
	Table,
	Col, FormGroup, Label, Input, Row, Card, CardBody, Form,
} from 'reactstrap';
import {getNotMyClasses} from 'js/utils/Users';
import * as Users from 'js/utils/Users';
import * as ReduxForm from 'redux-form';
import PropTypes from 'prop-types';
import Cookie from 'universal-cookie';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

class ViewApplicationPage extends React.Component {

	constructor(props){
		super(props);
		getNotMyClasses(this.props.user.username)
			.then(function (response) {
				console.log('this is the list of classes');
				console.log(response);
				const myCookie = new Cookie();
				myCookie.set('classList', response, {path: '/'});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	registerForm = (e) => {
		e.preventDefault();
		Users.registerClass(this.props.user.username, e.target.id.value);
	};

	register = (e, classID) => {
		e.preventDefault();
		Users.registerClass(this.props.user.username, classID);
	};



	render() {
		const myCookie = new Cookie();
		const classList = myCookie.get('classList');

		return (
			<div style={{marginTop: 100}}>
				<React.Fragment>
					<Container fluid>
						<Row>
							<Col lg={12} md={12} sm={12} xs={12}>
								<Card>
									<CardBody>
										<Form name="form" onSubmit={this.registerForm.bind(this)}>
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
									<th>Remaining</th>
									<th>Capacity</th>
									<th> </th>
								</tr>
								</thead>
								<tbody>
								{ _.isDefined(classList.classes) &&
								classList.classes.map(aClass => (
									<tr key={aClass}>
										<th scope="row">{aClass.id}</th>
										<th scope="row">{aClass.level}</th>
										<th scope="row">{aClass.name}</th>
										<th scope="row">{aClass.teacherName}</th>
										<th scope="row">{aClass.classroom}</th>
										<th scope="row">{aClass.timeSlot}</th>
										<th scope="row">{aClass.availability}</th>
										<th scope="row">{aClass.capacity}</th>
										<th><Button onClick={(e) => this.register(e,aClass.id)}>Register Class</Button></th>
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