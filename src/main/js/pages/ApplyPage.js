import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Col
} from 'reactstrap';
import * as Validation from 'js/alloy/utils/validation';
import * as ReduxForm from 'redux-form';
import * as Bessemer from 'js/alloy/bessemer/components';
import * as Users from 'js/utils/Users';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

const schoolOptions = [
    {value: 'public', label: 'Public School'},
    {value: 'private', label: 'Private School'},
    {value: 'home', label: 'Home School'}
];

const gtOptions = [
    {value: '0', label: 'No'},
    {value: '1', label: 'Yes'},
    {value: '3', label: 'Unsure'}
];



// @TODO Add some sort of validation for if principal is already taken
class ApplyPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: null,
            label: null
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = user => {
        Users.applyForWeb(user);
        console.log(user);
        return window.location.href = '/#/';
    };

    render() {
        let { handleSubmit } = this.props;

        return (
            <div style={{marginTop: 100}} className="center">
                <Col md="10" sm="12">
                    <Card>
                        <br/>
                        <CardTitle className="center">Register</CardTitle>
                        <CardBody>
                            <form name="form" onSubmit={handleSubmit(form => this.onSubmit(form))}>

                                <Bessemer.Field name="principal" friendlyName="Email Address" placeholder="test@web.com"
                                                validators={[Validation.requiredValidator, Validation.emailValidator]} />

                                <Bessemer.Field name="suffix" friendlyName="Suffix" placeholder="Sr"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="firstName" friendlyName="First Name" placeholder="John"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="middleInitial" friendlyName="Middle Initial" placeholder="K" />

                                <Bessemer.Field name="lastName" friendlyName="Last Name" placeholder="Doe"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="preferredName" friendlyName="Preferred Name" placeholder="Johnny"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="addressLine" friendlyName="Address Line" placeholder="123 Main St"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="city" friendlyName="City" placeholder="Dallas"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="state" friendlyName="State" placeholder="TX"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="zip" friendlyName="Zip Code" placeholder="12345"
                                                validators={[Validation.requiredValidator]}
                                                field={<input className="form-control" type="number" />} />

                                <Bessemer.Field name="phoneNumber" friendlyName="Phone Number" placeholder="281-123-1234"
                                                validators={[Validation.requiredValidator]}
                                                field={<input className="form-control" type="number" />}/>

                                <Bessemer.Field name="password" friendlyName="Password"
                                                validators={[Validation.requiredValidator, Validation.passwordValidator]}
                                                field={<input className="form-control" type="password" />} />

                                <Bessemer.Field name="birthday" friendlyName="Birthday" placeholder="1111-11-30"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="gender" friendlyName="Gender" placeholder="Female"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="race" friendlyName="Ethnicity" placeholder="Native American"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="prevSchool" friendlyName="Previous School Information"
                                                validator={[Validation.requiredValidator]}
                                                field={<Bessemer.Select options={schoolOptions} />} />

                                <Bessemer.Field name="graduationYear" friendlyName="Expected graduation year (from high school)" placeholder="2020"
                                                validators={[Validation.requiredValidator]}
                                                field={<input className="form-control" type="number" />}/>

                                <Bessemer.Field name="grade" friendlyName="Expected Grade" placeholder="95"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="expectedSchool" friendlyName="Expected high school (if known)" placeholder="Seven Lakes High School"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="sibling" friendlyName="Any siblings in the program?" placeholder="John Doe"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="gtAcceptance" friendlyName="Accepted to a school-based GT program?"
                                                validator={[Validation.requiredValidator]}
                                                field={<Bessemer.Select options={gtOptions} />} />


                                <br/>
                                Information about the Parent/Guardian 1:
                                <Bessemer.Field name="parentFirstName" friendlyName="Parent First Name" placeholder="John"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="parentLastName" friendlyName="Parent Last Name" placeholder="Doe"
                                                validators={[Validation.requiredValidator]} />

                                <Bessemer.Field name="parentEmail" friendlyName="Parent email" placeholder="test@web.com"
                                                validators={[Validation.requiredValidator, Validation.emailValidator]} />

                                <Bessemer.Field name="parentHomeNumber" friendlyName="Parent Home Phone Number" placeholder="281-123-1234"
                                                validators={[Validation.requiredValidator]}
                                                field={<input className="form-control" type="number" />}/>

                                <Bessemer.Field name="parentWorkNumber" friendlyName="Parent Work Phone Number" placeholder="281-123-1234"
                                                validators={[Validation.requiredValidator]}
                                                field={<input className="form-control" type="number" />}/>

                                <Bessemer.Field name="parentCellNumber" friendlyName="Parent Cell Phone Number" placeholder="281-123-1234"
                                                validators={[Validation.requiredValidator]}
                                                field={<input className="form-control" type="number" />}/>

                                <br/>
                                Information about the Parent/Guardian 2:
                                <Bessemer.Field name="parentFirstName2" friendlyName="Parent First Name" placeholder="John"/>

                                <Bessemer.Field name="parentLastName2" friendlyName="Parent Last Name" placeholder="Doe"/>

                                <Bessemer.Field name="parentEmail2" friendlyName="Parent email" placeholder="test@web.com"/>


                                <Bessemer.Field name="parentHomeNumber2" friendlyName="Parent Home Phone Number" placeholder="281-123-1234"
                                                field={<input className="form-control" type="number" />}/>

                                <Bessemer.Field name="parentWorkNumber2" friendlyName="Parent Work Phone Number" placeholder="281-123-1234"
                                                field={<input className="form-control" type="number" />}/>

                                <Bessemer.Field name="parentCellNumber2" friendlyName="Parent Cell Phone Number" placeholder="281-123-1234"
                                                field={<input className="form-control" type="number" />}/>


                                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} className="center">
                                    <Bessemer.Button>Apply</Bessemer.Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}

ApplyPage.contextTypes = {
    router: PropTypes.object.isRequired,
};

ApplyPage = ReduxForm.reduxForm({form: 'register'})(ApplyPage);

ApplyPage = connect(
    state => ({

    }),
    dispatch => ({
        register: user => dispatch(Users.Actions.register(user))
    })
)(ApplyPage);

export default ApplyPage;