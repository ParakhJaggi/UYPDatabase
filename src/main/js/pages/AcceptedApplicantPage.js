import React from 'react';
import {
	CardTitle,
	FormGroup,
	Container,
	CardBody,
	Input,
	Label,
	Card,
	Form,
	Row,
	Col, Button,
} from 'reactstrap';
import * as Users from '../utils/Users';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';
import * as ReduxForm from 'redux-form';
import Cookie from 'universal-cookie';


class AcceptedApplicantPage extends React.Component {

	constructor(props) {
		super(props);

		const myCookie = new Cookie();
		const currentApplicant = myCookie.get('currentApplicant');

		this.state = {
			applicant: currentApplicant
		};
	}

	handleGoBack(e){
		e.preventDefault();
		return window.location.href = '/#/';
	}

	render() {
		return (
			<Container style={{marginTop: 80, marginBottom: 20}}>
				<Row>
					<Col lg={12} md={12} sm={12} xs={12}>
						<Card>
							<br/>
							<CardTitle className="center">Welcome to {this.state.applicant.firstName}'s application!</CardTitle>
							<CardBody>
								<Form name="form">
									<Row form>
										<Col md={12}>
											<FormGroup>
												<Label for="principal">Email</Label>
												<Input type="text" name="principal"
												       placeholder={this.state.applicant.principal}
												       defaultValue={this.state.applicant.principal} />
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={5}>
											<FormGroup>
												<Label for="firstName">First Name</Label>
												<Input type="text" name="firstName"
												       placeholder={this.state.applicant.firstName}
												       defaultValue={this.state.applicant.firstName}/>
											</FormGroup>
										</Col>
										<Col md={2}>
											<FormGroup>
												<Label for="middleInitial">Middle Initial</Label>
												<Input type="text" name="middleInitial"
												       placeholder={this.state.applicant.middleInitial}
												       defaultValue={this.state.applicant.middleInitial}/>
											</FormGroup>
										</Col>
										<Col md={5}>
											<FormGroup>
												<Label for="lastName">Last Name</Label>
												<Input type="text" name="lastName"
												       placeholder={this.state.applicant.lastName}
												       defaultValue={this.state.applicant.lastName}/>
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={5}>
											<FormGroup>
												<Label for="preferredName">Preferred Name</Label>
												<Input type="text" name="preferredName"
												       placeholder={this.state.applicant.preferredName}
												       defaultValue={this.state.applicant.preferredName}/>
											</FormGroup>
										</Col>
										<Col md={2}>
											<FormGroup>
												<Label for="suffix">Suffix</Label>
												<Input type="text" name="suffix"
												       placeholder={this.state.applicant.suffix}
												       defaultValue={this.state.applicant.suffix}/>
											</FormGroup>
										</Col>
										<Col md={5}>
											<FormGroup>
												<Label for="phoneNumber">Phone Number</Label>
												<Input type="text" name="phoneNumber"
												       placeholder={this.state.applicant.phoneNumber}
												       defaultValue={this.state.applicant.phoneNumber}/>
											</FormGroup>
										</Col>
									</Row>

									<FormGroup>
										<Label for="addressLine">Address</Label>
										<Input type="text" name="addressLine"
										       placeholder={this.state.applicant.addressLine}
										       defaultValue={this.state.applicant.addressLine}/>
									</FormGroup>

									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="city">City</Label>
												<Input type="text" name="city"
												       placeholder={this.state.applicant.city}
												       defaultValue={this.state.applicant.city}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="state">State</Label>
												<Input type="text" name="state"
												       placeholder={this.state.applicant.state}
												       defaultValue={this.state.applicant.state}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="zip">Zip</Label>
												<Input type="text" name="zip"
												       placeholder={this.state.applicant.zip}
												       defaultValue={this.state.applicant.zip}/>
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="birthday">Birthday</Label>
												<Input type="text" name="birthday"
												       placeholder={this.state.applicant.birthday}
												       defaultValue={this.state.applicant.birthday}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="gender">Gender</Label>
												<Input type="text" name="gender"
												       placeholder={this.state.applicant.gender}
												       defaultValue={this.state.applicant.gender}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="ethnicity">Ethnicity</Label>
												<Input type="text" name="ethnicity"
												       placeholder={this.state.applicant.ethnicity}
												       defaultValue={this.state.applicant.ethnicity}/>
											</FormGroup>
										</Col>
									</Row>


									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="prevSchool">Previous School Information</Label>
												<Input type="text" name="prevSchool"
												       placeholder={this.state.applicant.prevSchool}
												       defaultValue={this.state.applicant.prevSchool}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="graduationYear">Expected graduation year</Label>
												<Input type="text" name="graduationYear"
												       placeholder={this.state.applicant.graduationYear}
												       defaultValue={this.state.applicant.graduationYear}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="grade">Expected Grade</Label>
												<Input type="text" name="grade"
												       placeholder={this.state.applicant.grade}
												       defaultValue={this.state.applicant.grade}/>
											</FormGroup>
										</Col>
									</Row>

									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="gtAcceptance">Accepted to a school-based GT program?</Label>
												<Input type="text" name="gtAcceptance"
												       placeholder={this.state.applicant.gtAcceptance}
												       defaultValue={this.state.applicant.gtAcceptance}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="sibling">Any siblings in the program?</Label>
												<Input type="text" name="sibling"
												       placeholder={this.state.applicant.sibling}
												       defaultValue={this.state.applicant.sibling}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="expectedSchool">Expected High School</Label>
												<Input type="text" name="expectedSchool"
												       placeholder={this.state.applicant.expectedSchool}
												       defaultValue={this.state.applicant.expectedSchool}/>
											</FormGroup>
										</Col>
									</Row>
									<br/>
									Parent/Guardian 1
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="parentFirstName">First Name</Label>
												<Input type="text" name="parentFirstName"
												       placeholder={this.state.applicant.parentFirstName}
												       defaultValue={this.state.applicant.parentFirstName}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentLastName">Last Name</Label>
												<Input type="text" name="parentLastName"
												       placeholder={this.state.applicant.parentLastName}
												       defaultValue={this.state.applicant.parentLastName}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentEmail">Email</Label>
												<Input type="text" name="parentEmail"
												       placeholder={this.state.applicant.parentEmail}
												       defaultValue={this.state.applicant.parentEmail}/>
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="parentHomeNumber">Home Phone Number</Label>
												<Input type="text" name="parentHomeNumber"
												       placeholder={this.state.applicant.parentHomeNumber}
												       defaultValue={this.state.applicant.parentHomeNumber}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentWorkNumber">Work Phone Number</Label>
												<Input type="text" name="parentWorkNumber"
												       placeholder={this.state.applicant.parentWorkNumber}
												       defaultValue={this.state.applicant.parentWorkNumber}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentCellNumber">Cell Phone Number</Label>
												<Input type="text" name="parentCellNumber"
												       placeholder={this.state.applicant.parentCellNumber}
												       defaultValue={this.state.applicant.parentCellNumber}/>
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
												       placeholder={this.state.applicant.parentFirstName2}
												       defaultValue={this.state.applicant.parentFirstName2}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentLastName2">Last Name</Label>
												<Input type="text" name="parentLastName2"
												       placeholder={this.state.applicant.parentLastName2}
												       defaultValue={this.state.applicant.parentLastName2}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentEmail2">Email</Label>
												<Input type="text" name="parentEmail2"
												       placeholder={this.state.applicant.parentEmail2}
												       defaultValue={this.state.applicant.parentEmail2}/>
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="parentHomeNumber2">Home Phone Number</Label>
												<Input type="text" name="parentHomeNumber2"
												       placeholder={this.state.applicant.parentHomeNumber2}
												       defaultValue={this.state.applicant.parentHomeNumber2}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentWorkNumber2">Work Phone Number</Label>
												<Input type="text" name="parentWorkNumber2"
												       placeholder={this.state.applicant.parentWorkNumber2}
												       defaultValue={this.state.applicant.parentWorkNumber2}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentCellNumber2">Cell Phone Number</Label>
												<Input type="text" name="parentCellNumber2"
												       placeholder={this.state.applicant.parentCellNumber2}
												       defaultValue={this.state.applicant.parentCellNumber2}/>
											</FormGroup>
										</Col>
									</Row>

									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="yearAccepted">Home Phone Number</Label>
												<Input type="text" name="yearAccepted"
												       placeholder={this.state.applicant.yearAccepted}
												       defaultValue={this.state.applicant.yearAccepted}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentWorkNumber2">Work Phone Number</Label>
												<Input type="text" name="parentWorkNumber2"
												       placeholder={this.state.applicant.parentWorkNumber2}
												       defaultValue={this.state.applicant.parentWorkNumber2}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="parentCellNumber2">Cell Phone Number</Label>
												<Input type="text" name="parentCellNumber2"
												       placeholder={this.state.applicant.parentCellNumber2}
												       defaultValue={this.state.applicant.parentCellNumber2}/>
											</FormGroup>
										</Col>
									</Row>
									<br/>
									<Button>Submit Changes</Button>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

AcceptedApplicantPage = ReduxForm.reduxForm({form: 'profile'})(AcceptedApplicantPage);

AcceptedApplicantPage = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	}),
	dispatch => ({
		register: user => dispatch(Users.Actions.register(user)),
		getUserDetails: () => dispatch(Users.Actions.getUserDetails()),
		updateUserDetails: user => dispatch(Users.Actions.updateUserDetails(user))
	})
)(AcceptedApplicantPage);

export default AcceptedApplicantPage;
