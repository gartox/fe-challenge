export const getFormatedDateFull = () => {
	const date = new Date(Date.now());
	const [day, year, month, hours, minutes, seconds] = [
		date.getDate(),
		date.getFullYear(),
		date.getMonth(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds(),
	];

	const setZero = (i: number) => (String(i).length === 1 ? `0${i}` : i);

	return `${year}-${setZero(month)}-${setZero(day)} ${setZero(hours)}:${setZero(
		minutes
	)}:${setZero(seconds)}`;
};
