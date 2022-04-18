export const getCountOfPages = (totalResults) => {
	return Math.ceil(totalResults / 10);
}
