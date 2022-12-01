const handleRegister = async () => {
	// 1. Lay value tren form
	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	// 2. Gui value tu client den server

	try {
		const res = await axios.post(
			'http://localhost:5000/api/auth/register',
			{
				username,
				email,
				password,
			}
		);
		console.log('🚀 ~ file: register.js:14 ~ response', response);
		if (response.status === 201) {
			window.location.href = '/client/login.html';
		}
	} catch (error) {
		// log error
	}
};
