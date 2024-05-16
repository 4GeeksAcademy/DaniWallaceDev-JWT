import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import { Context } from "../store/appContext";
import { Form } from "../component/form";

export const Login = () => {

	const {store, actions} = useContext(Context)

	return (
<div>
	{store.auth ? <Navigate to="/private"/>:	
	<div className="text-center">
		<h1>Login</h1>
		<Form/>
	</div>
	}
</div>
	);
};
