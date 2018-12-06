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
        super(props);
        this.props.fetchApplicants();
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

    handleAddPet = (e, name) => {
        e.preventDefault();
        const myCookie = new Cookie();
        getOnePet(this.props.user.principal, name)
            .then(function (response) {
                console.log('user has clicked editPet button');
                console.log(response);
                myCookie.set('currentPet', response, {path: '/'});
            })
            .catch(function (error) {
                console.log(error);
            });
        this.context.router.history.push('/edit-pet-page');
    };

    viewApplication(e){
        e.preventDefault();


        //Users.updateUserDetails(backend);
        //this.props.updateUserDetails(backend);
        return window.location.href = '/#/';
    }

    acceptApplicant(e){
        e.preventDefault();
        Users.acceptApplicant(e.target.username.value);
    }

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
                                                        <Label for="username">View Applicant with username</Label>
                                                        <Input type="text" name="username"
                                                               placeholder= "username"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Button>View Applicant</Button>
                                        </Form>
                                        <br/>
                                        <Form name="form" onSubmit={this.acceptApplicant.bind(this)}>
                                            <Row form>
                                                <Col md={12}>
                                                    <FormGroup>
                                                        <Label for="username">Accept Applicant with username</Label>
                                                        <Input type="text" name="username"
                                                               placeholder= "username"/>
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Button>Accept Applicant</Button>
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
                                    <th>Applicant Username</th>
                                    <th> </th>
                                </tr>
                                </thead>
                                <tbody>
                                { _.isDefined(applicationList) &&
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