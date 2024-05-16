import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1 className="mb-5">Choose beetween signup or login!</h1>
			<div className="mb-5">
				<Link to="/login">
					<button className="btn btn-warning me-3" >Login</button>
				</Link>
				<Link to="/signup">
					<button className="btn btn-danger ms-3" >Signup</button>
				</Link>
			</div>
		</div>
	);
};
