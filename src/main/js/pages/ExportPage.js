import React from 'react';
import * as ReduxForm from 'redux-form';
import * as Users from '../utils/Users';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

class ExportPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{marginTop: 100}} className='center'>
                export stuff here!
            </div>
        );
    }
}

ExportPage.contextTypes = {
    router: PropTypes.object.isRequired,
};

ExportPage = ReduxForm.reduxForm({form: 'login'})(ExportPage);
ExportPage = connect(
    state => ({
        user: Users.State.getUser(state)
    }),
    dispatch => ({
        authenticate: (username, password) => dispatch(Users.Actions.authenticate(username, password))
    })
)(ExportPage);

export default ExportPage;