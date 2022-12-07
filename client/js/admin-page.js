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
				<button type="button" id="${
					user._id
				}" class="btn btn-danger" onclick="handleDeleteUser(this.id)">Delete</button>
			</td>
		</tr>`)
	);

	htmlUser += `</tbody></table>`;

	document.querySelector('.list_user').innerHTML = htmlUser;
};

const getListUser = async () => {
	try {
		const res = await axios.get('/auth/admin/user');
		showListUser(res);
	} catch (error) {
		// solution1
		if (error.response.status === 401) {
			window.location.href = '/client/login.html';
		}
		// call refresh token
		// token expired->redirect to admin
	}
};

async function handleDeleteUser(idUser) {
	try {
		const res = await axios.delete(`/auth/admin/user/delete/${idUser}`);
		// showListUser(res)
	} catch (error) {
		if (error.response.status === 401) {
			window.location.href = '/client/login.html';
		}
	}
}

const handleAddUser = () => {
	window.location.href = '/client/create_user.html';
};

getListUser();
