// store -> state duoc luu tru tren store
// Khi chung ta muon thay doi state tren store thi cung ta thuc hien dispatch action

const reducer = (state, action) => {
	if (action.type === 'increment') return (state += action.payload);
	if (action.type === 'decrement') return (state -= action.payload);
};

const createStore = (reducer) => {
	let state = 0;

	const dispatch = (action) => {
		//logic here -- thay doi state theo action
		state = reducer(state, action);
	};

	const getState = () => {
		return state;
	};

	return {
		dispatch,
		getState,
	};
};

const store = createStore(reducer);
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
