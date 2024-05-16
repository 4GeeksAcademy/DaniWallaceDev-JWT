import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import { Context } from "../store/appContext";
import { Form } from "../component/form";

export const Private = () => {

	const {store, actions} = useContext(Context)

	return (
<div>
{!store.auth ? <Navigate to="/login"/>:	
	<div>
		<h1 className="text-center">This is my private zone</h1>
	</div>
	}
</div>
	);
};