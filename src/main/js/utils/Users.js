/*
	Front End: Brandon Mork
	99.9%
	For real
 */

import Cookie from 'universal-cookie';
import axios from 'axios';

/* Functions so far... */
export function applyForWeb(guest){
	console.log('using is trying to apply!');
	return axios.post('/api/guest/apply', guest);
}

export function loginUser(username, password){
    console.log('user is trying to login with ' + username +' ' + password);
    return axios.get('api/user/login/' + username + '/' + password);
}

export function getUserDetails(username) {
	console.log('user is trying to get user details for ' + username);
    return axios.get('/api/user/details/' + username);
}

export function getUserExtraDetails(username) {
	console.log('user is trying to get user extra details for ' + username);
	return axios.get('/api/user/extra/details/' + username);
}

export function updateUserDetails(user){
    console.log('user has just requested their profile to be updated with this info');
	return axios.post('/api/user/update-profile', user);
}

export function getApplicants(){
	console.log('user is trying to get a list of all possible applicants');
	return axios.get('/api/user/possible-applicants');
}

export function acceptApplicant(username, authorizedPerson){
	console.log('user is trying to accept applicant');
	return axios.post('/api/user/accept/' + username + '/' + authorizedPerson);
}

export function getApplicant(username){
	console.log('user is trying to get applicant details');
	return axios.get('/api/user/applicant/' + username);
}

export function updateApplicant(userInfo){
	console.log('user has entered acceptance info');
	return axios.post('/api/user/applicant-submit-info/', userInfo);
}

export function getNotMyClasses(username){
	console.log('user is getting all of the classes');
	return axios.get('/api/class/not/' + username);
}

export function getMyClasses(username){
	console.log('user is getting all of the classes for a particular user');
	return axios.get('/api/class/my/' + username);
}

export function registerClass(username, classID){
	return axios.post('/api/class/register/' + username + '/' + classID);
}

export function dropClass(username, classID){
	return axios.post('/api/class/drop/' + username + '/' + classID);
}

export function getRegisteredUsers(){
	console.log('getting a list of registered users');
	return axios.get('/api/user/list-of-users');
}

/* Functions so far... */





export function register(user) {
	return axios.post('/api/user/register', user);
}

export function registerPet(pet){
	return axios.post('/api/pets/add-pet', pet)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

export function getPets(principal){
	console.log(principal);
	console.log('GETTING PETS AGAIN!!!');
	return axios.get('/api/pets/get-pets/' + principal);
}

//used for editing pet
export function getOnePet(principal, name){
	console.log('In the User.js with ' + name + ' with principal ' + principal);

	return axios.get('/api/pets/' + principal + '/' + name);
}

export function updatePet(pet){
	return axios.post('/api/pets/edit-pet/', pet);
}

export function deletePet(principal, name){
	console.log(name);
	return axios.post('/api/pets/delete-pet/' + principal + '/' + name);
}


export function postJob(job){
	console.log('this is from the axios call, this is the job object');
	console.log(job);
	return axios.post('api/jobs/post-job' , job)

		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

export function getJob(id){
	console.log('getting a job with id ' + id);
	return axios.get('api/jobs/get-job/' + id);
}

export function updateJobDetails(frontEndJob){
	let backEndJob;
	getJob(frontEndJob.jobID)
		.then(function (response) {
			backEndJob = response;
			console.log('this is what backendJob looks like');
			console.log(backEndJob);

			let job = {
				'id': backEndJob.id,
				'jobID': backEndJob.jobID,
				'ownerPrincipal': backEndJob.ownerPrincipal,
				'sitterPrincipal': backEndJob.sitterPrincipal,
				'pets': backEndJob.pets,
				'startDate': backEndJob.startDate,
				'endDate': backEndJob.endDate,
				'maxPay': backEndJob.maxPay,
				'addressLine1': backEndJob.addressLine1,
				'addressLine2': backEndJob.addressLine2,
				'city': backEndJob.city,
				'state': backEndJob.state,
				'zip': backEndJob.zip,
				'accepted': 'yes',
				'finished': 'no',
				'preferences': backEndJob.preferences
			};

			if(job.sitterPrincipal == null && frontEndJob.sitterPrincipal != null)
				job.sitterPrincipal = frontEndJob.sitterPrincipal;

			console.log('this should send an accepted job to back end');
			console.log(job);

			return axios.post('api/jobs/update-job' , job);
		})
		.catch(function (error) {
			console.log(error);
		});
}

export function quitJob(jobID, id){
	console.log('quitting the job with ids ' + jobID + ' ' + id);
	return axios.post('/api/jobs/quit-job/' + jobID + '/' + id);
}

export function updateUser(user){
	console.log('we are now calling an axios post');
	console.log(user);
	let newUser = {
		'principal': user.principal,
		'firstName': user.firstName,
		'middleName': user.middleName,
		'lastName': user.lastName,
		'addressLine1': user.addressLine1,
		'addressLine2': user.addressLine2,
		'state': user.state,
		'city': user.city,
		'zip': user.zip,
		'phoneNumber': user.phoneNumber,
		'userType': user.userType,
		'password': user.password,
		'sumRatings': user.sumRatings,
		'numRatings': user.numRatings,
	};

	console.log('In updateUse()');
	console.log(newUser);

	let backEndUser = getUserDetails();

	return axios.post('/api/user/update-user/', backEndUser)
		.then(function (response) {
			console.log('This is a response:');
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

// export function authenticate(username, password) {
// 	return axios(
// 		{
// 			method: 'post',
// 			url: '/oauth/token',
// 			params: {
// 				'grant_type': 'password',
// 				username,
// 				password
// 			},
// 			auth: {
// 				username: 'rceiwx2ja6',
// 				password: 'k8akj8q570'
// 			}
// 		}
// 	);
// }

export function getSitterInfo(principal){
	console.log('trying to get sitter info with principal ' + principal);
	principal = principal.replace('@','%40');
	principal = principal.replace('.','*');
	console.log('trying to get sitter info with principal ' + principal);
	return axios.get('/api/user/sitter/' + principal);
}


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


export { State };

let Actions = {};

Actions.Types = {
	SET_AUTHENTICATION: 'SET_AUTHENTICATION',
	SET_USER: 'SET_USER',
	SET_APPLICANTS: 'SET_APPLICANTS'
};

Actions.getPets = principal => {
	return (dispatch) => {
		return getPets(principal).then((pets) => {
			return dispatch(Actions.setPets(pets));
		});
	};
};
Actions.getApplicants = () => {
	return (dispatch) => {
		return getApplicants().then((applicants => {
			return dispatch(Actions.setApplicant(applicants));
		}));
	};
};

Actions.register = user => {
	return (dispatch) => {
		return register(user).then(() => {
			return dispatch(Actions.authenticate(user.principal, user.password));
		});
	};
};

Actions.authenticate = (username, password) => {
	return (dispatch) => {
		return loginUser(username, password).then(
			response => {
                const myCookie = new Cookie();
                myCookie.set('authentication', response, {path: '/'});

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

export { Actions };

let Reducers = {};

// Reducers.authentication = (authentication = null, action) => {
// 	switch (action.type) {
// 		case Actions.Types.SET_AUTHENTICATION: {
// 			return action.authentication;
// 		}
// 		default: {
// 			return authentication;
// 		}
// 	}
// };

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


export { Reducers };