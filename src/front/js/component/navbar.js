import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container d-flex justify-content-end">
			{store.auth && 
				<div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary" onClick={actions.logout}>Logout</button>
					</Link>
				</div>
			}
			</div>
		</nav>
	);
};
