export const sameObject = (object1: any, object2: any) => {
	console.log(object1, object2);
	return JSON.stringify(object1) === JSON.stringify(object2);
};
