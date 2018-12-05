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
	Col,
} from 'reactstrap';
import * as Users from '../utils/Users';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

import * as ReduxForm from 'redux-form';

class ProfilePage extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
            updatedUserProfile: {},
            value: null,
            label: null
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = user => {
        console.log(user);
        Users.updateProfile(user);
        //return window.location.href = '/#/';
    };

	render() {
        let { handleSubmit } = this.props;
		return (
			<Container style={{marginTop: 80, marginBottom: 20}}>
				<Row>
					<Col lg={12} md={12} sm={12} xs={12}>
						<Card>
							<br/>
							<CardTitle className="center">Welcome to your profile!</CardTitle>
							<CardBody>
								<h6 className="center">Submit any changes below.</h6>
								<Form name="form" onSubmit={handleSubmit(form => this.onSubmit(form))}>
									<Row form>
										<Col md={12}>
											<FormGroup>
												<Label for="principal">Email</Label>
												<Input type="text" name="principal"
													   placeholder={this.props.user.principal}
													   defaultValue={this.props.user.principal} />
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={5}>
											<FormGroup>
												<Label for="firstName">First Name</Label>
												<Input type="text" name="firstName"
													   placeholder={this.props.user.firstName}
													   defaultValue={this.props.user.firstName}/>
											</FormGroup>
										</Col>
										<Col md={2}>
											<FormGroup>
												<Label for="middleName">Middle Initial</Label>
												<Input type="text" name="middleName"
													   placeholder={this.props.user.middleInitial}
													   defaultValue={this.props.user.middleInitial}/>
											</FormGroup>
										</Col>
										<Col md={5}>
											<FormGroup>
												<Label for="lastName">Last Name</Label>
												<Input type="text" name="lastName"
													   placeholder={this.props.user.lastName}
													   defaultValue={this.props.user.lastName}/>
											</FormGroup>
										</Col>
									</Row>
                                    <Row form>
                                        <Col md={5}>
                                            <FormGroup>
                                                <Label for="preferredName">Preferred Name</Label>
                                                <Input type="text" name="preferredName"
                                                       placeholder={this.props.user.preferredName}
                                                       defaultValue={this.props.user.preferredName}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Label for="suffix">Suffix</Label>
                                                <Input type="text" name="suffix"
                                                       placeholder={this.props.user.suffix}
                                                       defaultValue={this.props.user.suffix}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={5}>
                                            <FormGroup>
                                                <Label for="phoneNumber">Phone Number</Label>
                                                <Input type="text" name="phoneNumber"
                                                       placeholder={this.props.user.phoneNumber}
                                                       defaultValue={this.props.user.phoneNumber}/>
                                            </FormGroup>
                                        </Col>
                                    </Row>

									<FormGroup>
										<Label for="addressLine">Address</Label>
										<Input type="text" name="addressLine"
											   placeholder={this.props.user.addressLine}
											   defaultValue={this.props.user.addressLine}/>
									</FormGroup>

									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="city">City</Label>
												<Input type="text" name="city"
													   placeholder={this.props.user.city}
													   defaultValue={this.props.user.city}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="state">State</Label>
												<Input type="text" name="state"
													   placeholder={this.props.user.state}
													   defaultValue={this.props.user.state}/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="zip">Zip</Label>
												<Input type="text" name="zip"
													   placeholder={this.props.user.zip}
													   defaultValue={this.props.user.zip}/>
											</FormGroup>
										</Col>
									</Row>

									<FormGroup>
										<Label for="password">Password</Label>
										<Input type="password" name="password" />
									</FormGroup>

                                    <Row form>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="birthday">Birthday</Label>
                                                <Input type="text" name="birthday"
                                                       placeholder={this.props.user.birthday}
                                                       defaultValue={this.props.user.birthday}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="gender">Gender</Label>
                                                <Input type="text" name="gender"
                                                       placeholder={this.props.user.gender}
                                                       defaultValue={this.props.user.gender}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="ethnicity">Ethnicity</Label>
                                                <Input type="text" name="ethnicity"
                                                       placeholder={this.props.user.ethnicity}
                                                       defaultValue={this.props.user.ethnicity}/>
                                            </FormGroup>
                                        </Col>
                                    </Row>


                                    <Row form>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="prevSchool">Previous School Information</Label>
                                                <Input type="text" name="prevSchool"
                                                       placeholder={this.props.user.prevSchool}
                                                       defaultValue={this.props.user.prevSchool}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="graduationYear">Expected graduation year</Label>
                                                <Input type="text" name="graduationYear"
                                                       placeholder={this.props.user.graduationYear}
                                                       defaultValue={this.props.user.graduationYear}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="expectedSchool">Expected High School</Label>
                                                <Input type="text" name="expectedSchool"
                                                       placeholder={this.props.user.expectedSchool}
                                                       defaultValue={this.props.user.expectedSchool}/>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                    <Row form>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="gtAcceptance">Accepted to a school-based GT program?</Label>
                                                <Input type="text" name="gtAcceptance"
                                                       placeholder={this.props.user.gtAcceptance}
                                                       defaultValue={this.props.user.gtAcceptance}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={8}>
                                            <FormGroup>
                                                <Label for="sibling">Any siblings in the program?</Label>
                                                <Input type="text" name="sibling"
                                                       placeholder={this.props.user.sibling}
                                                       defaultValue={this.props.user.sibling}/>
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
                                                       placeholder={this.props.user.parentFirstName}
                                                       defaultValue={this.props.user.parentFirstName}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="parentLastName">Last Name</Label>
                                                <Input type="text" name="parentLastName"
                                                       placeholder={this.props.user.parentLastName}
                                                       defaultValue={this.props.user.parentLastName}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="parentEmail">Email</Label>
                                                <Input type="text" name="parentEmail"
                                                       placeholder={this.props.user.parentEmail}
                                                       defaultValue={this.props.user.parentEmail}/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="parentHomeNumber">Home Phone Number</Label>
                                                <Input type="text" name="parentHomeNumber"
                                                       placeholder={this.props.user.parentHomeNumber}
                                                       defaultValue={this.props.user.parentHomeNumber}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="parentWorkNumber">Work Phone Number</Label>
                                                <Input type="text" name="parentWorkNumber"
                                                       placeholder={this.props.user.parentWorkNumber}
                                                       defaultValue={this.props.user.parentWorkNumber}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="parentCellNumber">Cell Phone Number</Label>
                                                <Input type="text" name="parentCellNumber"
                                                       placeholder={this.props.user.parentCellNumber}
                                                       defaultValue={this.props.user.parentCellNumber}/>
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
                                                       placeholder={this.props.user.parentFirstName2}
                                                       defaultValue={this.props.user.parentFirstName2}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="parentLastName2">Last Name</Label>
                                                <Input type="text" name="parentLastName2"
                                                       placeholder={this.props.user.parentLastName2}
                                                       defaultValue={this.props.user.parentLastName2}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="parentEmail2">Email</Label>
                                                <Input type="text" name="parentEmail2"
                                                       placeholder={this.props.user.parentEmail2}
                                                       defaultValue={this.props.user.parentEmail2}/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="parentHomeNumber2">Home Phone Number</Label>
                                                <Input type="text" name="parentHomeNumber2"
                                                       placeholder={this.props.user.parentHomeNumber2}
                                                       defaultValue={this.props.user.parentHomeNumber2}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="parentWorkNumber2">Work Phone Number</Label>
                                                <Input type="text" name="parentWorkNumber2"
                                                       placeholder={this.props.user.parentWorkNumber2}
                                                       defaultValue={this.props.user.parentWorkNumber2}/>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup>
                                                <Label for="parentCellNumber2">Cell Phone Number</Label>
                                                <Input type="text" name="parentCellNumber2"
                                                       placeholder={this.props.user.parentCellNumber2}
                                                       defaultValue={this.props.user.parentCellNumber2}/>
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

ProfilePage = ReduxForm.reduxForm({form: 'profile'})(ProfilePage);

ProfilePage = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	}),
	dispatch => ({
		register: user => dispatch(Users.Actions.register(user)),
		getUserDetails: () => dispatch(Users.Actions.getUserDetails())
	})
)(ProfilePage);

export default ProfilePage;
