/*
	Front End: Brandon Mork
	99.9%
	For real
 */

import Cookie from 'universal-cookie';
import axios from 'axios';
import {addNotification} from '../components/Navbar';
import {successNotification} from 'js/components/Navbar';

/* Functions so far... */
export function applyForWeb(guest) {
	console.log('using is trying to apply!');
	return axios.post('/api/guest/apply', guest)
		.then(() => {
			successNotification('Application Succussful!');
		})
		.catch(error => {
			addNotification('Invalid input in the form, please verify the information!');
			return new Error('test');
		});
}

export function loginUser(username, password) {
	console.log('user is trying to login with ' + username + ' ' + password);
	return axios.get('api/user/login/' + username + '/' + password)
		.catch(error => {
			addNotification('Invalid login, please try again!');
			return new Error('test');
		});
}

export function getUserDetails(username) {
	console.log('user is trying to get user details for ' + username);
	return axios.get('/api/user/details/' + username);
}

export function getUserExtraDetails(username) {
	console.log('user is trying to get user extra details for ' + username);
	return axios.get('/api/user/extra/details/' + username);
}

export function updateUserDetails(user) {
	console.log('user has just requested their profile to be updated with this info');
	return axios.post('/api/user/update-profile', user)
		.then(() => {
			successNotification('Profile Updated!');
		})
		.catch(error => {
			addNotification('Invalid input in the form, please verify the information!');
			return new Error('test');
		});
}

export function getApplicants() {
	console.log('user is trying to get a list of all possible applicants');
	return axios.get('/api/user/possible-applicants');
}

export function acceptApplicant(username, authorizedPerson) {
	console.log('user is trying to accept applicant');
	return axios.post('/api/user/accept/' + username + '/' + authorizedPerson)
		.catch(error => {
			addNotification('Invalid input in the form, please verify the information!');
			return new Error('test');
		});
}

export function getApplicant(username) {
	console.log('user is trying to get applicant details');
	return axios.get('/api/user/applicant/' + username);
}

export function updateApplicant(userInfo) {
	console.log('user has entered acceptance info');
	return axios.post('/api/user/applicant-submit-info/', userInfo)
		.then(() => {
			successNotification('Update Successful!');
		})
		.catch(error => {
			addNotification('Invalid input in the from, please verify the information!');
			return new Error('test');
		});
}

export function getNotMyClasses(username) {
	console.log('user is getting all of the classes');
	return axios.get('/api/class/not/' + username);
}

export function getMyClasses(username) {
	console.log('user is getting all of the classes for a particular user');
	return axios.get('/api/class/my/' + username);
}

export function registerClass(username, classID) {
	return axios.post('/api/class/register/' + username + '/' + classID)
		.then(() => {
			successNotification('Registered for the class!');
		})
		.catch(error => {
			addNotification('Invalid class, please verify the information!');
			return new Error('test');
		});
}

export function dropClass(username, classID) {
	return axios.post('/api/class/drop/' + username + '/' + classID)
		.then(() => {
			successNotification('Dropped the Class!');
		})
		.catch(error => {
			addNotification('Invalid class, please verify the information!');
			return new Error('test');
		});
}

export function getRegisteredUsers() {
	console.log('getting a list of registered users');
	return axios.get('/api/user/list-of-users');
}

export function createClass(classDto) {
	console.log('admin is creating a class');
	return axios.post('api/class/create-class', classDto)
		.then(() => {
			successNotification('Class Created!');
		})
		.catch(error => {
			addNotification('Invalid input in the from, please verify the information!');
			return new Error('test');
		});
}

export function getClassCSVData(username) {
	return axios.get('api/class/get-csv/' + username);
}

/* Functions so far... */



let State = {};

State.getAuthentication = state => {
	return state.authentication;
};

State.getUser = state => {
	return state.user;
};

State.getApplicants = state => {
	return state.applicants;
};


export {State};

let Actions = {};

Actions.Types = {
	SET_AUTHENTICATION: 'SET_AUTHENTICATION',
	SET_USER: 'SET_USER',
	SET_APPLICANTS: 'SET_APPLICANTS'
};


Actions.getApplicants = () => {
	return (dispatch) => {
		return getApplicants().then((applicants => {
			return dispatch(Actions.setApplicant(applicants));
		}));
	};
};


Actions.authenticate = (username, password) => {
	return (dispatch) => {
		return loginUser(username, password).then(
			response => {
				const myCookie = new Cookie();
				myCookie.set('authentication', response, {path: '/'});
				console.log('the auth cookie is');
				console.log(response);
				return getUserDetails(username).then(user => {
					console.log('this is the user i am setting for props');
					console.log(user);
					dispatch(Actions.setUser(user));
				});
			}
		);
	};
};

Actions.updateUserDetails = (user) => {
	console.log('I am updating front end to the newest user!!');
	console.log(user);
	return (dispatch) => {
		dispatch(Actions.setUser(user));
	};
};

Actions.getUserDetails = (username) => {
	return (dispatch) => {
		getUserDetails(username).then(user => {
			console.log('I am updating front end to the newest user!!');
			console.log(user);
			dispatch(Actions.setUser(user));
		});
	};
};

Actions.logout = () => {
	return (dispatch) => {
		dispatch(Actions.setAuthentication(null));
		dispatch(Actions.setUser(null));
	};
};

Actions.setAuthentication = authentication => {
	const myCookie = new Cookie();
	myCookie.set('authentication', authentication, {path: '/'});

	return {type: Actions.Types.SET_AUTHENTICATION, authentication};
};


Actions.setUser = user => {
	// Setting our cookies for current user
	const myCookie = new Cookie();
	myCookie.set('user', user, {path: '/'});
	return {type: Actions.Types.SET_USER, user};
};

Actions.setApplicant = applicants => {
	return {type: Actions.Types.SET_APPLICANTS, applicants};
};

export {Actions};

let Reducers = {};

Reducers.user = (user = null, action) => {
	switch (action.type) {
		case Actions.Types.SET_USER: {
			return action.user;
		}
		default: {
			return user;
		}
	}
};


export {Reducers};