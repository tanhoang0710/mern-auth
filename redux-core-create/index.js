// store -> state duoc luu tru tren store
// Khi chung ta muon thay doi state tren store thi cung ta thuc hien dispatch action

const createStore = () => {
	let state = 0;

	const dispatch = (action) => {
		//logic here -- thay doi state theo action
		if (action.type === 'increment') state += action.payload;
		if (action.type === 'decrement') state -= action.payload;
	};

	const getState = () => {
		return state;
	};

	return {
		dispatch,
		getState,
	};
};

const store = createStore();
// o trong component lay state tren store va render
console.log('🚀 ~ file: index.js:21 ~ store', store.getState());

// click increment
store.dispatch({
	type: 'increment',
	payload: 3,
});

console.log(store.getState());

// click increment
store.dispatch({
	type: 'decrement',
	payload: 1,
});

console.log(store.getState());
