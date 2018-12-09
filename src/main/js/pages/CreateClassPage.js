import React from 'react';
import {
	CardTitle,
	Card,
	Col,
	CardBody,
	Row,
	Container,
	FormGroup,
	Label,
	Input,
	Form,
	Button, CustomInput,
} from 'reactstrap';
import * as Users from '../utils/Users';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

class CreateClassPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			classDto: {
				'level': null,
				'name': null,
				'teacherName': null,
				'timeSlot': null,
				'classroom': null
			}
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();

		this.state.classDto.level = e.target.level.value;
		this.state.classDto.name = e.target.name.value;
		this.state.classDto.teacherName = e.target.teacherName.value;
		this.state.classDto.timeSlot = e.target.timeSlot.value;
		this.state.classDto.classroom = e.target.classroom.value;

		Users.createClass(this.state.classDto);
	};

	render() {
		return (
			<Container style={{marginTop: 80, marginBottom: 20}}>
				<Row>
					<Col lg={12} md={12} sm={12} xs={12}>
						<Card>
							<br/>
							<CardTitle className="center">Create a Class!</CardTitle>
							<CardBody>
								<Form name="form" onSubmit={this.handleSubmit.bind(this)}>
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="level">Grade Level</Label>
												<CustomInput type="select" id="level" name="level">
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
										<Col md={4}>
											<FormGroup>
												<Label for="name">Class Name</Label>
												<Input type="text" name="name"
												       placeholder= "Intro to Algorithms"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="teacherName">Teacher</Label>
												<Input type="text" name="teacherName"
												       placeholder="Dr. Lin"/>
											</FormGroup>
										</Col>
									</Row>
									<Row form>
										<Col md={4}>
											<FormGroup>
												<Label for="classroom">Classroom</Label>
												<Input type="text" name="classroom"
												       placeholder="Cashion"/>
											</FormGroup>
										</Col>
										<Col md={4}>
											<FormGroup>
												<Label for="timeSlot">Timeslot</Label>
												<Input type="time" name="timeSlot"/>
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

CreateClassPage.contextTypes = {
	router: PropTypes.object.isRequired,
};

CreateClassPage = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	})
)(CreateClassPage);

export default CreateClassPage;
