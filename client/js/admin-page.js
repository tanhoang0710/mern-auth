const showListUser = (res) => {
	let htmlUser = `<table class="table table-hover text-nowrap">
	<thead>
		<tr>
			<th>ID</th>
			<th>Username</th>
			<th>Role</th>
			<th>Email</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>`;

	res.data.data.users.forEach(
		(user, index) =>
			(htmlUser += `<tr>
			<td>${index + 1}</td>
			<td>${user.username}</td>
			<td>${user.role}</td>
			<td>
				${user.email}
			</td>
			<td>
				Delete
			</td>
		</tr>`)
	);

	htmlUser += `</tbody></table>`;

	document.querySelector('.list_user').innerHTML = htmlUser;
};

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

		showListUser(res);
	} catch (error) {
		// console.log(error);
		// call refresh token
		// token expired->redirect to admin
	}
};

getListUser();
