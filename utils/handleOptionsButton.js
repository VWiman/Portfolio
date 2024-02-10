export default function HandleOptionButton(type, variant, dispatch) {
	console.log("click", type);
	dispatch({ type: type, variant: variant });
}