import React from 'react';
import {
	CardTitle,
	CustomInput,
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

	handleSubmit(e){
		e.preventDefault();

		this.state.applicant.principal = e.target.principal.value;
		this.state.applicant.firstName = e.target.firstName.value;
		this.state.applicant.lastName = e.target.lastName.value;
		this.state.applicant.middleInitial = e.target.middleInitial.value;
		this.state.applicant.addressLine = e.target.addressLine.value;
		this.state.applicant.city = e.target.city.value;
		this.state.applicant.state = e.target.state.value;
		this.state.applicant.zip = e.target.zip.value;
		this.state.applicant.phoneNumber = e.target.phoneNumber.value;
		this.state.applicant.prevSchool = e.target.prevSchool.value;
		this.state.applicant.graduationYear = e.target.graduationYear.value;
		this.state.applicant.expectedSchool = e.target.expectedSchool.value;
		this.state.applicant.sibling = e.target.sibling.value;
		this.state.applicant.gtAcceptance = e.target.gtAcceptance.value;
		this.state.applicant.suffix = e.target.suffix.value;
		this.state.applicant.preferredName = e.target.preferredName.value;
		this.state.applicant.birthday = e.target.birthday.value;
		this.state.applicant.gender = e.target.gender.value;
		this.state.applicant.ethnicity = e.target.ethnicity.value;
		this.state.applicant.grade = e.target.grade.value;
		this.state.applicant.parentFirstName = e.target.parentFirstName.value;
		this.state.applicant.parentLastName = e.target.parentLastName.value;
		this.state.applicant.parentEmail = e.target.parentEmail.value;
		this.state.applicant.parentHomeNumber = e.target.parentHomeNumber.value;
		this.state.applicant.parentWorkNumber = e.target.parentWorkNumber.value;
		this.state.applicant.parentCellNumber = e.target.parentCellNumber.value;

		this.state.applicant.parentFirstName2 = e.target.parentFirstName2.value;
		this.state.applicant.parentLastName2 = e.target.parentLastName2.value;
		this.state.applicant.parentEmail2 = e.target.parentEmail2.value;
		this.state.applicant.parentHomeNumber2 = e.target.parentHomeNumber2.value;
		this.state.applicant.parentWorkNumber2 = e.target.parentWorkNumber2.value;
		this.state.applicant.parentCellNumber2 = e.target.parentCellNumber2.value;

		this.state.applicant.yearAccepted = e.target.yearAccepted.value;
		this.state.applicant.gradeAccepted = e.target.gradeAccepted.value;
		this.state.applicant.status = e.target.status.value;
		this.state.applicant.hasGrant = e.target.hasGrant.value;
		this.state.applicant.whichGrant = e.target.whichGrant.value;
		this.state.applicant.mentorName = e.target.mentorName.value;
		this.state.applicant.disability = e.target.disability.value;
		this.state.applicant.healthConditions = e.target.healthConditions.value;
		this.state.applicant.english = e.target.english.value;
		this.state.applicant.cleaningHouseInfo = e.target.cleaningHouseInfo.value;
		this.state.applicant.otherInfo = e.target.otherInfo.value;

		//console.log(this.state.applicant);
		Users.updateApplicant(this.state.applicant.username,this.state.applicant);
		//return window.location.href = '/#/';
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
								<Form name="form" onSubmit={this.handleSubmit.bind(this)}>
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
												<Label for="yearAccepted">Year Accepted</Label>
												<Input type="text" name="yearAccepted"
												       placeholder={this.state.applicant.yearaccepted}
												       defaultValue={this.state.applicant.yearaccepted}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="gradeAccepted">Grade When Accepted</Label>
												<Input type="text" name="gradeAccepted"
												       placeholder={this.state.applicant.gradeAccepted}
												       defaultValue={this.state.applicant.gradeAccepted}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="status">Status</Label>
												<CustomInput type="select" id="status" name="status">
													<option value="inProgram">In the Program</option>
													<option value="graduated">Graduated</option>
													<option value="movedAway">Moved Away</option>
													<option value="noLongerInterested">No Longer Interested</option>
												</CustomInput>
											</FormGroup>
										</Col>
									</Row>

									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="hasGrant">Have a Grant?</Label>
												<CustomInput type="select" id="hasGrant" name="hasGrant">
													<option value="yes">Yes</option>
													<option value="no">No</option>
												</CustomInput>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="whichGrant">Grant Name (if applicable)</Label>
												<Input type="text" name="whichGrant"
												       placeholder={this.state.applicant.whichGrant}
												       defaultValue={this.state.applicant.whichGrant}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="english">English Language Learner?</Label>
												<CustomInput type="select" id="english" name="english">
													<option value="yes">Yes</option>
													<option value="no">No</option>
												</CustomInput>
											</FormGroup>
										</Col>
									</Row>

									<Row form>
										<Col md={12}>
											<FormGroup>
												<Label for="mentorName">Mentor Name's (if applicable)</Label>
												<Input type="text" name="mentorName"
												       placeholder={this.state.applicant.mentorName}
												       defaultValue={this.state.applicant.mentorName}/>
											</FormGroup>
										</Col>
									</Row>

									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="disability">Disability</Label>
												<Input type="text" name="disability"
												       placeholder={this.state.applicant.disability}
												       defaultValue={this.state.applicant.disability}/>
											</FormGroup>
										</Col>
										<Col md={8}>
											<FormGroup>
												<Label for="healthConditions">Health Condition</Label>
												<Input type="text" name="healthConditions"
												       placeholder={this.state.applicant.healthConditions}
												       defaultValue={this.state.applicant.healthConditions}/>
											</FormGroup>
										</Col>
									</Row>

									<Row form>
										<Col md={12}>
											<FormGroup>
												<Label for="cleaningHouseInfo">National Clearinghouse Info</Label>
												<Input type="text" name="cleaningHouseInfo"
												       placeholder={this.state.applicant.cleaningHouseInfo}
												       defaultValue={this.state.applicant.cleaningHouseInfo}/>
											</FormGroup>
										</Col>
									</Row>

									<Row form>
										<Col md={12}>
											<FormGroup>
												<Label for="otherInfo">Additional Info</Label>
												<Input type="text" name="otherInfo"
												       placeholder={this.state.applicant.otherInfo}
												       defaultValue={this.state.applicant.otherInfo}/>
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
