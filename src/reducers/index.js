export const initialState = {
	user: {
		name: 'Vasyl',
		lastname: 'Reactov',
		age: 27,
	},
};

export function rootReducer(state = initialState) {
	return state;
}
