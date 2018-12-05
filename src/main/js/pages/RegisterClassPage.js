import React from 'react';
import * as ReduxForm from 'redux-form';
import * as Users from '../utils/Users';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

class RegisterClassPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{marginTop: 100}} className='center'>
                register for classes here!
            </div>
        );
    }
}

RegisterClassPage.contextTypes = {
    router: PropTypes.object.isRequired,
};

RegisterClassPage = ReduxForm.reduxForm({form: 'login'})(RegisterClassPage);
RegisterClassPage = connect(
    state => ({
        user: Users.State.getUser(state)
    }),
    dispatch => ({
        authenticate: (username, password) => dispatch(Users.Actions.authenticate(username, password))
    })
)(RegisterClassPage);

export default RegisterClassPage;