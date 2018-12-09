import React from 'react';
import {
	CardTitle,
	FormGroup,
	Container,
	CardBody,
	Button,
	Input,
	Label,
	Card,
	Form,
	Row,
	Col, CustomInput,
} from 'reactstrap';
import * as ReduxForm from 'redux-form';
import * as Users from 'js/utils/Users';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';
import ReactNotification from 'react-notifications-component';


// @TODO Add some sort of validation for if principal is already taken
class ApplyPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: null,
			label: null
		};

		this.addNotification = this.addNotification.bind(this);
		this.notificationDOMRef = React.createRef();
	}


	addNotification() {
		this.notificationDOMRef.current.addNotification({
			title: 'Error',
			message: 'Invalid data input',
			type: 'success',
			insert: 'top',
			container: 'bottom-center',
			animationIn: ['animated', 'fadeIn'],
			animationOut: ['animated', 'fadeOut'],
			dismiss: { duration: 2000 },
			dismissable: { click: true }
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		let newUser = {
			'principal': e.target.principal.value,
			'firstName': e.target.firstName.value,
			'lastName': e.target.lastName.value,
			'middleInitial': e.target.middleInitial.value,
			'addressLine': e.target.addressLine.value,
			'city': e.target.city.value,
			'zip': e.target.zip.value,
			'phoneNumber': e.target.phoneNumber.value,
			'prevSchool': e.target.prevSchool.value,
			'graduationYear': e.target.graduationYear.value,
			'expectedSchool': e.target.expectedSchool.value,
			'sibling': e.target.sibling.value,
			'gtAcceptance': e.target.gtAcceptance.value,
			'suffix': e.target.suffix.value,
			'preferredName': e.target.preferredName.value,
			'birthday': e.target.birthday.value,
			'gender': e.target.gender.value,
			'ethnicity': e.target.ethnicity.value,
			'grade': e.target.grade.value,
			'parentFirstName': e.target.parentFirstName.value,
			'parentLastName': e.target.parentLastName.value,
			'parentEmail': e.target.parentEmail.value,
			'parentHomeNumber': e.target.parentHomeNumber.value,
			'parentWorkNumber': e.target.parentWorkNumber.value,
			'parentCellNumber': e.target.parentCellNumber.value,
			'parentFirstName2': e.target.parentFirstName2.value,
			'parentLastName2': e.target.parentLastName2.value,
			'parentEmail2': e.target.parentEmail2.value,
			'parentHomeNumber2': e.target.parentHomeNumber2.value,
			'parentWorkNumber2': e.target.parentWorkNumber2.value,
			'parentCellNumber2': e.target.parentCellNumber2.value
		};

		console.log(newUser);
		try {
			Users.applyForWeb(newUser);
			console.log('error');
		}
		catch(e){
			this.addNotification();
		}
		console.log(newUser);

		//return window.location.href = '/#/';
	}

	render() {
		return (
			<Container style={{marginTop: 80, marginBottom: 20}}>
				<Row>
					<Col lg={12} md={12} sm={12} xs={12}>
						<Card>
							<br/>
							<CardTitle className="center">Apply for UYPD!</CardTitle>
							<CardBody>
								<h6 className="center">Fill in the required form below.</h6>
								<Form name="form" onSubmit={this.handleSubmit.bind(this)}>
									<Row form>
										<Col md={12}>
											<FormGroup>
												<Label for="principal">Email</Label>
												<Input type="email" name="principal" required
												       placeholder="sample@example.edu"/>
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={5}>
											<FormGroup>
												<Label for="firstName">First Name</Label>
												<Input type="text" name="firstName" required
												       placeholder="John"/>
											</FormGroup>
										</Col>
										<Col md={2}>
											<FormGroup>
												<Label for="middleInitial">Middle Initial</Label>
												<Input type="text" name="middleInitial" required
												       placeholder="K"/>
											</FormGroup>
										</Col>
										<Col md={5}>
											<FormGroup>
												<Label for="lastName">Last Name</Label>
												<Input type="text" name="lastName" required
												       placeholder="Doe"/>
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={5}>
											<FormGroup>
												<Label for="preferredName">Preferred Name</Label>
												<Input type="text" name="preferredName" required
												       placeholder="Johnny"/>
											</FormGroup>
										</Col>
										<Col md={2}>
											<FormGroup>
												<Label for="suffix">Suffix</Label>
												<Input type="text" name="suffix" required
												       placeholder="Mr"/>
											</FormGroup>
										</Col>
										<Col md={5}>
											<FormGroup>
												<Label for="phoneNumber">Phone Number</Label>
												<Input type="number" name="phoneNumber" required
												       placeholder="1231231234"/>
											</FormGroup>
										</Col>
									</Row>

									<FormGroup>
										<Label for="password">Password</Label>
										<Input type="password" name="password" required
										       placeholder="Password"/>
									</FormGroup>

									<FormGroup>
										<Label for="addressLine">Address</Label>
										<Input type="number" name="addressLine" required
										       placeholder="1001 Main St"/>
									</FormGroup>

									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="city">City</Label>
												<Input type="text" name="city" required
												       placeholder="Waco"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="state">State</Label>
												<Input type="text" name="state" required
												       placeholder="Texas"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="zip">Zip</Label>
												<Input type="number" name="zip" required
												       placeholder="12345"/>
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="birthday">Birthday</Label>
												<Input type="date" name="birthday" required/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="gender">Gender</Label>
												<Input type="text" name="gender" required
												       placeholder="Gender"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="ethnicity">Ethnicity</Label>
												<Input type="text" name="ethnicity" required
												       placeholder="Ethnicity"/>
											</FormGroup>
										</Col>
									</Row>


									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="prevSchool">Previous School Information</Label>
												<Input type="text" name="prevSchool" required
												       placeholder="School"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="graduationYear">Expected graduation year</Label>
												<Input type="number" name="graduationYear" required
												       placeholder="Year"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="grade">Expected Grade Level</Label>
												<CustomInput type="select" id="grade" name="grade">
													<option value="4">4</option>
													<option value="5">5</option>
													<option value="6">6</option>
													<option value="7">7</option>
													<option value="8">8</option>
													<option value="9">9</option>
													<option value="10">10</option>
													<option value="11">11</option>
													<option value="12">12</option>
												</CustomInput>
											</FormGroup>
										</Col>
									</Row>

									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="gtAcceptance">Accepted to a school-based GT program?</Label>
												<CustomInput type="select" id="gtAcceptance" name="gtAcceptance">
													<option value="yes">Yes</option>
													<option value="no">No</option>
													<option value="unsure">Unsure</option>


												</CustomInput>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="sibling">Any siblings in the program?</Label>
												<Input type="text" name="sibling" required
												       placeholder="Sarah Doe"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="expectedSchool">Expected High School</Label>
												<Input type="text" name="expectedSchool" required
												       placeholder="School"/>
											</FormGroup>
										</Col>
									</Row>
									<br/>
									Parent/Guardian 1
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="parentFirstName">First Name</Label>
												<Input type="text" name="parentFirstName" required
												       placeholder="Lane"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentLastName">Last Name</Label>
												<Input type="text" name="parentLastName" required
												       placeholder="Doe"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentEmail">Email</Label>
												<Input type="email" name="parentEmail" required
												       placeholder="Lane@sample.com"/>
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="parentHomeNumber">Home Phone Number</Label>
												<Input type="number" name="parentHomeNumber" required
												       placeholder="1231231234"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentWorkNumber">Work Phone Number</Label>
												<Input type="number" name="parentWorkNumber" required
												       placeholder="1231231235"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentCellNumber">Cell Phone Number</Label>
												<Input type="number" name="parentCellNumber" required
												       placeholder="1231231236"/>
											</FormGroup>
										</Col>
									</Row>

									<br/>
									Parent/Guardian 2
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="parentFirstName2">First Name</Label>
												<Input type="text" name="parentFirstName2"
												       placeholder="Greg"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentLastName2">Last Name</Label>
												<Input type="text" name="parentLastName2"
												       placeholder="Doe"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentEmail2">Email</Label>
												<Input type="email" name="parentEmail2"
												       placeholder="Greg@sample.com"/>
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="parentHomeNumber2">Home Phone Number</Label>
												<Input type="number" name="parentHomeNumber2"
												       placeholder="1231231238"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentWorkNumber2">Work Phone Number</Label>
												<Input type="number" name="parentWorkNumber2"
												       placeholder="1231231239"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentCellNumber2">Cell Phone Number</Label>
												<Input type="number" name="parentCellNumber2"
												       placeholder="1231231230"/>
											</FormGroup>
										</Col>
									</Row>
									<br/>
									<Button>Submit Changes</Button>
									<ReactNotification ref={this.notificationDOMRef}/>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

ApplyPage.contextTypes = {
	router: PropTypes.object.isRequired,
};

ApplyPage = ReduxForm.reduxForm({form: 'register'})(ApplyPage);

ApplyPage = connect(
	state => ({}),
	dispatch => ({
		register: user => dispatch(Users.Actions.register(user))
	})
)(ApplyPage);

export default ApplyPage;