import _ from 'lodash';
import React from 'react';
import {
	Jumbotron,
	Container,
	CardTitle,
	CardText,
	Button,
	Card,
	Row,
	Col,
} from 'reactstrap';
import * as Users from '../utils/Users';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

class HomePage extends React.Component {

	render() {
		return (
			<div style={{marginTop: 100}}>
				<Jumbotron>
					<Container fluid>
						<h2 className="display-4">University for Young People</h2>
						<h4 className="lead">Our goal is to show what an updated registration system can look like so
							that it is easy for potential students to register for classes, as well as maintain a
                            database of students and other information for their research.</h4>
						<br/>

						{!_.isDefined(this.props.user) &&
						<div>
							<Row>
								<Col md={6} sm={6} xs={12} style={{marginBottom: 10}}>
									<Card body>
										<CardTitle>Apply Now!</CardTitle>
										<CardText>Sign up for UYPD!</CardText>
										<Button onClick={() => this.context.router.history.push('/apply')}>Apply</Button>
									</Card>
								</Col>
								<Col md={6} sm={6} xs={12}>
									<Card body>
										<CardTitle>Already a member?</CardTitle>
										<CardText>Log in to get back to it!</CardText>
										<Button onClick={() => this.context.router.history.push('/login')}>Login</Button>
									</Card>
								</Col>
							</Row>
						</div>
						}

						{_.isDefined(this.props.user) &&
						<div>
							<Row className="center">
								<Col md="6" sm="10">
									<Card body>
										<CardTitle>Welcome back, {this.props.user.principal}</CardTitle>
										<CardText>
											We're glad you're back!
										</CardText>

										{(_.isEqual(this.props.user.userType, 'Owner') ||
										  _.isEqual(this.props.user.userType, 'Both')) &&
										<React.Fragment>
											<Row style={{marginBottom: 10}}>
												<Col>
													<Button onClick={() => this.context.router.history.push('/post-job')}>Post Job</Button>
												</Col>
											</Row>
											<Row style={{marginBottom: 10}}>
												<Col>
													<Button onClick={() => this.context.router.history.push('/find-sitter')}>Browse Sitters</Button>
												</Col>
											</Row>
										</React.Fragment>
										}

										{(_.isEqual(this.props.user.userType, 'Sitter') ||
										  _.isEqual(this.props.user.userType, 'Both')) &&
										<React.Fragment>
											<Row>
												<Col>
													<Button onClick={() => this.context.router.history.push('/search-job')}>Browse Jobs</Button>
												</Col>
											</Row>
										</React.Fragment>
										}

									</Card>
								</Col>
							</Row>
						</div>
						}
					</Container>
				</Jumbotron>
			</div>
		);
	}
}

HomePage.contextTypes = {
	router: PropTypes.object.isRequired,
};

HomePage = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	})
)(HomePage);

export default HomePage;
