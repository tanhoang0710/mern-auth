const handleSubmitAddUser = async () => {
	// 1. Lay value tren form
	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const role = document.getElementById('password').value;
	// 2. Gui value tu client den server

	try {
		const res = await axios.post('auth/admin/user/create', {
			username,
			email,
			password,
			role,
		});
		console.log('🚀 ~ file: register.js:14 ~ res', res);
		if (res.status === 200) {
			window.location.href = '/client/admin_page.html';
		}
	} catch (error) {
		// log error
	}
};
