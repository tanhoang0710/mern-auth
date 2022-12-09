// store -> state duoc luu tru tren store
// Khi chung ta muon thay doi state tren store thi cung ta thuc hien dispatch action

const reducer = (state, action) => {
	if (action.type === 'increment') return (state += action.payload);
	if (action.type === 'decrement') return (state -= action.payload);
};

const initalState = 0;

const createStore = (reducer, initalState) => {
	let state = initalState;
	let listeners = [];

	const dispatch = (action) => {
		//logic here -- thay doi state theo action
		state = reducer(state, action);
		// khi state thay doi -> re-render view
		// function nao day de kich hoat render view
		for (let i = 0; i < listeners.length; i++) {
			listeners[i]();
		}
	};

	const subcribe = (listener) => {
		listeners.push(listener);
	};

	const getState = () => {
		return state;
	};

	return {
		dispatch,
		getState,
		subcribe,
	};
};

const store = createStore(reducer, initalState);
// o trong component lay state tren store va render
console.log('🚀 ~ file: index.js:21 ~ store', store.getState());

// buoc app re-render
store.subcribe(() => console.log('store change'));

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
