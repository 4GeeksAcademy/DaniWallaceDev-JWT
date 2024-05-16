import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Form } from "../component/form";

export const Signup = () => {
	return (
<div className="text-center">
	<h1>SignUp</h1>
	<Form/>
</div>
	);
};
