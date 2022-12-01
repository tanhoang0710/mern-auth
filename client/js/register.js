const handleRegister = () => {
	// 1. Lay value tren form
	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	// 2. Gui value tu client den server
	axios
		.post('http://localhost:5000/api/auth/register', {
			username,
			email,
			password,
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};
