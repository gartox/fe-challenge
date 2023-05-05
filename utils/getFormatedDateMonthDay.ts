import { GridValueFormatterParams } from "@mui/x-data-grid";

export const getFormatedDateMonthDay = (dateString: string) => {
	const date = new Date(dateString);
	const day = date.getDate();

	const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
		date
	);
	return `${month.substring(0, 3)} ${day}`;
};
