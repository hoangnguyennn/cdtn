export default (errMessage?: string): string | undefined => {
	return errMessage
		?.split('index:')[1]
		.split('dup key')[0]
		.split('_')[0]
		.trim();
};
