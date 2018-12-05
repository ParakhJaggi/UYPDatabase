import React from 'react';
import * as ReduxForm from 'redux-form';
import * as Users from '../utils/Users';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

class ViewApplicationPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{marginTop: 100}} className='center'>
                view applications here!
            </div>
        );
    }
}

ViewApplicationPage.contextTypes = {
    router: PropTypes.object.isRequired,
};

ViewApplicationPage = ReduxForm.reduxForm({form: 'login'})(ViewApplicationPage);
ViewApplicationPage = connect(
    state => ({
        user: Users.State.getUser(state)
    }),
    dispatch => ({
        authenticate: (username, password) => dispatch(Users.Actions.authenticate(username, password))
    })
)(ViewApplicationPage);

export default ViewApplicationPage;