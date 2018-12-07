import _ from 'lodash';
import React from 'react';
import {
	Container,
	Button,
	Table,
	Col, FormGroup, Label, Input, Row, Card, CardBody, Form,
} from 'reactstrap';
import {getMyClasses} from 'js/utils/Users';
import * as Users from 'js/utils/Users';
import * as ReduxForm from 'redux-form';
import PropTypes from 'prop-types';
import Cookie from 'universal-cookie';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';
import { CSVLink , CSVDownload} from 'react-csv';

class MyClasses extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			csvFile: null,
			headers: [
				{ label: 'Class ID', key: 'id' },
				{ label: 'Level', key: 'level' },
				{ label: 'Name', key: 'name' }
			],
			data: []

		};
		getMyClasses(this.props.user.username)
			.then(function (response) {
				console.log('this is the list of classes');
				console.log(response);
				const myCookie = new Cookie();
				myCookie.set('classList', response, {path: '/'});
				// const mappingFunction = classes => (
				// 	classes.id + ' ' + classes.name);
				// const names = response.classes.map(mappingFunction);
				for(let i=0;i<response.classes.length;i++){
					this.state.data.push({
						ClassID: response.classes.id,
						Level: response.classes.level,
						Name: response.classes.name
					});
				}
				console.log(this.state.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	dropClassForm = (e) => {
		e.preventDefault();
		Users.dropClass(this.props.user.username, e.target.id.value);
	};

	dropClass = (e, classID) => {
		e.preventDefault();
		Users.dropClass(this.props.user.username, classID);
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
										<Form name="form" onSubmit={this.dropClassForm.bind(this)}>
											<Row form>
												<Col md={12}>
													<FormGroup>
														<Label for="id">Enter Class ID to drop class</Label>
														<Input type="text" name="id"
														       placeholder= "Class ID"/>
													</FormGroup>
												</Col>
											</Row>
											<Button>Drop Class</Button>
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
										<th><Button onClick={(e) => this.dropClass(e,aClass.id)}>Drop Class</Button></th>
									</tr>
								))}
								</tbody>
							</React.Fragment>
						</Table>
					</Container>
					<Card>
						<CSVLink
							data={this.state.data}
							filename={'my-file.csv'}
							className="btn btn-primary"
							target="_blank"
						>
							Download me
						</CSVLink>
					</Card>
				</React.Fragment>
			</div>
		);
	}
}

MyClasses.contextTypes = {
	router: PropTypes.object.isRequired,
};

MyClasses = ReduxForm.reduxForm({form: 'applicants'})(MyClasses);

MyClasses = connect(
	state => ({
		user: Users.State.getUser(state),
	}),
	dispatch => ({
		authenticate: (principal, password) => dispatch(Users.Actions.authenticate(principal, password))
	})
)(MyClasses);

export default MyClasses;