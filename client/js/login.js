const handleLogin = async () => {
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	try {
		const res = await axios.post('/api/auth/login', {
			email,
			password,
		});
		console.log('🚀 ~ file: register.js:14 ~ res', res);
		if (res.status === 200) {
			// window.location.href = '/client/login.html';
			const accessToken = res.data.data.accessToken;
			// decode lay ra thong tin payload

			const payloadDecoded = jwt_decode(accessToken);
			console.log(
				'🚀 ~ file: login.js:17 ~ handleLogin ~ payloadDecoded',
				payloadDecoded
			);

			if (payloadDecoded.role === 'regular') {
				window.location.href = '/client/home_page.html';
			} else {
				window.location.href = '/client/admin_page.html';
			}

			// save accesstoken
			localStorage.setItem('accessToken', accessToken);
		}
	} catch (error) {
		// log error
	}
};
