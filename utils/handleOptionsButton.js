export function handleOptionButton(type, variant, dispatch) {
	console.log("click", type);
	dispatch({ type: type, variant: variant });
}