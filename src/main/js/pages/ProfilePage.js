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
    }

	handleSubmit(e) {
		e.preventDefault();
		console.log(e.target.userType.value);
		this.setState({
			updatedUserProfile: {
				user: {
					principal: e.target.principal.value,
					firstName: e.target.firstName.value,
					middleName: e.target.middleName.value,
					lastName: e.target.lastName.value,
					addressLine1: e.target.addressLine1.value,
					addressLine2: e.target.addressLine2.value,
					city: e.target.city.value,
					state: e.target.state.value,
					zip: e.target.zip.value,
					phoneNumber: e.target.phoneNumber.value,
					pets: [],
					roles: [
						'ROLE_USER',
					],
					userType: e.target.userType.value,
					momento: e.target.principal.value,
					password: e.target.password.value,
				},
			}},
			function() {
				Users.updateUser(this.state.updatedUserProfile.user)
					.then( () => {
						this.props.getUserDetails();
					});
			});
	}

	render() {
		return (
			<Container style={{marginTop: 80, marginBottom: 20}}>
				<Row>
					<Col lg={12} md={12} sm={12} xs={12}>
						<Card>
							<br/>
							<CardTitle className="center">Welcome to your profile!</CardTitle>
							<CardBody>
								<h6 className="center">Submit any changes below.</h6>
								<Form name="form" onSubmit={this.handleSubmit.bind(this)}>
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
                                    </Row>

									<FormGroup>
										<Label for="addressLine">Address</Label>
										<Input type="text" name="addressLine"
											   placeholder={this.props.user.addressLine}
											   defaultValue={this.props.user.addressLine}/>
									</FormGroup>

									<Row form>
										<Col md={6}>
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
										<Col md={2}>
											<FormGroup>
												<Label for="zip">Zip</Label>
												<Input type="text" name="zip"
													   placeholder={this.props.user.zip}
													   defaultValue={this.props.user.zip}/>
											</FormGroup>
										</Col>
									</Row>

									<FormGroup>
										<Label for="phoneNumber">Phone Number</Label>
										<Input type="text" name="phoneNumber"
											   placeholder={this.props.user.phoneNumber}
											   defaultValue={this.props.user.phoneNumber}/>
									</FormGroup>

									<FormGroup>
										<Label for="password">Password</Label>
										<Input type="password" name="password" />
									</FormGroup>

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
