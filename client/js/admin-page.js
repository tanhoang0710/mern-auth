const getListUser = async () => {
	try {
		const configHeader = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		};

		const res = await axios.get(
			'http://localhost:5000/auth/admin/user',
			configHeader
		);
	} catch (error) {
		// console.log(error);
		// call refresh token
		// token expired->redirect to admin
	}
};

getListUser();
