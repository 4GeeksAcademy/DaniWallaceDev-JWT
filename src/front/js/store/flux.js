const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			auth: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			signUp: (email, password) => {
				const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        "email": email,
                        "password": password 
                    })
                };
                fetch(process.env.BACKEND_URL + "/api/signup", requestOptions)
                    .then(response => {
                        if(response.status == 200) setStore({ auth: true })
                        return response.json()
                    })
            },
			logout: () => {
                localStorage.removeItem("token");
                setStore({ auth: false })
            },
			login: (email, password) => {
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        "email": email,
                        "password": password 
                    })
                };
                fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
                    .then(response => {
                        if(response.status == 200) setStore({ auth: true })
                        return response.json()
                    })
                    .then(data => {
                    	localStorage.setItem("token", data.access_token)
						console.log(data)
                    });
            },

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
