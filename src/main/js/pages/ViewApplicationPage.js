import _ from 'lodash';
import React from 'react';
import {
    Container,
    Button,
    Table,
} from 'reactstrap';
import { getOnePet } from 'js/utils/Users';
import * as Users from 'js/utils/Users';
import * as ReduxForm from 'redux-form';
import PropTypes from 'prop-types';
import Cookie from 'universal-cookie';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

class ViewApplicationPage extends React.Component {

    constructor(props){
        super(props);
        this.props.fetchApplicants()
            .then(function (response) {
                console.log('This is a response:');
                console.log(response);
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

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Table responsive striped hover style={{
                        margin: 10,
                        borderColor: 'black',
                        border: 5
                    }}>
                        {_.isEqual(this.props.applicants.length, 0) &&
                        <React.Fragment>
                            <thead>
                            <tr>
                                <th>You don't have any applicants!</th>
                            </tr>
                            </thead>
                        </React.Fragment>
                        }

                        {!_.isEqual(this.props.applicants.length, 0) &&
                        <React.Fragment>
                            <thead>
                            <tr>
                                <th>Pet ID</th>
                                <th>Pet Name</th>
                                <th> </th>
                                <th> </th>
                            </tr>
                            </thead>
                            <tbody>
                            { _.isDefined(this.props.applicants) &&
                            this.props.applicants.map(applicant => (
                                <tr key={applicant.username}>
                                    <td><Button onClick={ (e) => this.handleAddPet(e)}>View Applicant</Button></td>
                                    <td><Button onClick={ (e) => this.handleAddPet(e)}>Accept Applicant</Button></td>
                                </tr>
                            ))}
                            </tbody>
                        </React.Fragment>}
                    </Table>
                </Container>
            </React.Fragment>
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