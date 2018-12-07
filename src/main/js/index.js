import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NavigationBar from './components/Navbar';
import '../styles/pageStyles.css';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ApplyPage from 'js/pages/ApplyPage';
import RegisterClassPage from 'js/pages/RegisterClassPage';
import ViewApplicationPage from 'js/pages/ViewApplicationPage';
import CurrentApplicantPage from 'js/pages/CurrentApplicantPage';
import AcceptedApplicantPage from 'js/pages/AcceptedApplicantPage';
import MyClasses from 'js/pages/MyClasses';
import ViewUserPage from 'js/pages/ViewUserPage';

class Index extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {
		return (
			<div>
				<div className='pageContent container padded'>
					<NavigationBar/>
					<HashRouter>
						<Switch>

							<Route exact path='/' component={HomePage} />

							<Route exact path='/login' render={(props) =>
								<LoginPage {...props}/>}
							/>

							<Route exact path='/profile-page' render={(props) =>
								<ProfilePage {...props}/>}
							/>

                            <Route exact path='/apply' render={(props) =>
                                <ApplyPage {...props}/>}
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

							<Route exact path='/my-classes' render={(props) =>
								<MyClasses {...props}/>}
							/>

							<Route exact path='/view-user' render={(props) =>
								<ViewUserPage {...props}/>}
							/>

                            <Route exact path='/apply-page' component={ApplyPage}/>
                            <Route exact path='/view-application-page' component={ViewApplicationPage}/>
							<Route exact path='/current-application-page' component={CurrentApplicantPage}/>
							<Route exact path='/accept-application-page' component={AcceptedApplicantPage}/>
							<Route exact path='/my-classes-page' component={MyClasses}/>
							<Route exact path='/view-user-page' component={ViewUserPage}/>


						</Switch>
					</HashRouter>
				</div>
			</div>
		);
	}
}

export default Index;
