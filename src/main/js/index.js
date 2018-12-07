import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NavigationBar from './components/Navbar';
import '../styles/pageStyles.css';

// Pages
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ApplyPage from 'js/pages/ApplyPage';
import ExportPage from 'js/pages/ExportPage';
import RegisterClassPage from 'js/pages/RegisterClassPage';
import ViewApplicationPage from 'js/pages/ViewApplicationPage';
import CurrentApplicantPage from 'js/pages/CurrentApplicantPage';
import AcceptedApplicantPage from 'js/pages/AcceptedApplicantPage';

class Index extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

		this.instance = React.createRef();
	}

	render() {
		return (
			<div>
				<div className='pageContent container padded'>
					<NavigationBar/>
					<HashRouter>
						<Switch>

							<Route exact path='/' component={HomePage} />

							<Route exact path='/register' render={(props) =>
								<RegisterPage {...props}/>}
							/>

							<Route exact path='/login' render={(props) =>
								<LoginPage {...props}/>}
							/>

							<Route exact path='/profile-page' render={(props) =>
								<ProfilePage {...props}/>}
							/>

                            <Route exact path='/apply' render={(props) =>
                                <ApplyPage {...props}/>}
                            />

                            <Route exact path='/export' render={(props) =>
                                <ExportPage {...props}/>}
                            />

                            <Route exact path='/register-class' render={(props) =>
                                <RegisterClassPage {...props}/>}
                            />

                            <Route exact path='/view-application' render={(props) =>
                                <ViewApplicationPage {...props}/>}
                            />

							<Route exact path='/current-application' render={(props) =>
								<CurrentApplicantPage {...props}/>}
							/>

							<Route exact path='/accept-application' render={(props) =>
								<AcceptedApplicantPage {...props}/>}
							/>

                            <Route exact path='/apply-page' component={ApplyPage}/>
                            <Route exact path='/export-page' component={ExportPage}/>
                            <Route exact path='/register-class-page' component={RegisterClassPage}/>
                            <Route exact path='/view-application-page' component={ViewApplicationPage}/>
							<Route exact path='/current-application-page' component={CurrentApplicantPage}/>
							<Route exact path='/accept-application-page' component={AcceptedApplicantPage}/>

						</Switch>
					</HashRouter>
				</div>
			</div>
		);
	}
}

export default Index;
