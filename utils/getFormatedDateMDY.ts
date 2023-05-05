import { GridValueFormatterParams } from "@mui/x-data-grid";

export const getFormatedDateMDY = (
	params: GridValueFormatterParams<string>
) => {
	const date = new Date(params.value);
	const [day, year] = [date.getDate(), date.getFullYear()];

	const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
		date
	);
	return `${month.substring(0, 3)}-${day}-${year}`;
};
