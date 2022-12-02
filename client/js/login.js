const handleLogin = async () => {
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	try {
		const res = await axios.post('http://localhost:5000/api/auth/login', {
			email,
			password,
		});
		console.log('🚀 ~ file: register.js:14 ~ res', res);
		if (res.status === 200) {
			// window.location.href = '/client/login.html';
		}
	} catch (error) {
		// log error
	}
};
