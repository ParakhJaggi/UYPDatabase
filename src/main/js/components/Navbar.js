import _ from 'lodash';
import React from 'react';
import {
	UncontrolledDropdown,
	DropdownToggle,
	NavbarToggler,
	DropdownItem,
	DropdownMenu,
	NavbarBrand,
	Collapse,
	NavItem,
	NavLink,
	Navbar,
	Nav,
} from 'reactstrap';
import { Helmet } from 'react-helmet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import * as Users from '../utils/Users';
import Cookie from 'universal-cookie';
import Favicon from 'react-favicon';
import logo from '../logo.png';
import connect from 'react-redux/es/connect/connect';
import '../../styles/pageStyles.css';

library.add(faPaw);

// @TODO Set isOpen state to false when link is clicked (user is redirected) Maybe? Consider it.
class NavigationBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};
	}

	logout = () => {
		this.props.logout();
		const myCookie = new Cookie();
		myCookie.remove('authentication', {path: '/'});
		myCookie.remove('user', {path: '/'});
        window.location.href = '/';
    };

	static checkUserStatus() {
		const myCookie = new Cookie();
		if (myCookie.get('authentication') && myCookie.get('authentication').userType === 'user') {
			return <React.Fragment>
                <NavItem>
                    <NavLink href="#/view-application">View Applications</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#/register-class">Register for Classes</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#/export">Export Schedule</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#/profile-page">My Profile</NavLink>
                </NavItem>

			</React.Fragment>;
		} else if (myCookie.get('authentication') && myCookie.get('authentication').userType === 'admin') {
			return <React.Fragment>
                <NavItem>
                    <NavLink href="#/view-application">View Applications</NavLink>
                </NavItem>

			</React.Fragment>;

		}
		else {
			return 	<React.Fragment>
                <NavItem>
                    <NavLink href="#/apply">Apply</NavLink>
                </NavItem>
				<NavItem>
					<NavLink href="#/login">Login</NavLink>
				</NavItem>
			</React.Fragment>;
		}
	}

	render() {
		return (
			<Navbar fixed="top" color="dark" dark expand="md" style={{listStyleType: 'none'}}>
				<Favicon url="https://imgur.com/AzPIQVM.png" />
				<Helmet>
					<title>UYPD</title>
				</Helmet>

				<NavbarBrand href="/">
					<img src={logo} />&nbsp;
					UYPD
				</NavbarBrand>

				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
                        {NavigationBar.checkUserStatus()}
						{_.isDefined(this.props.user) &&
						<NavItem>
							<NavLink onClick={this.logout} href="#">Logout</NavLink>
						</NavItem>}
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

NavigationBar = connect(
	state => ({
		authentication: Users.State.getAuthentication(state),
		user: Users.State.getUser(state)
	}),
	dispatch => ({
		logout: () => dispatch(Users.Actions.logout())
	})
)(NavigationBar);

export default NavigationBar;