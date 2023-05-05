import { Table } from "@/components/molecules/Table";
import { Tile } from "@/components/molecules/Tile";
import { THistoricDataItem } from "@/types";
import { getFormatedDateMDY } from "@/utils/getFormatedDateMDY";
import { GridColDef } from "@mui/x-data-grid";
import styles from './DailyTrendTable.module.css';

const dailyTrendColumns: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    headerAlign: "left",
    flex: 1,
    sortable: false,
    valueFormatter: getFormatedDateMDY,
  },
  {
    field: "open",
    headerName: "Open",
    headerAlign: "right",
    align: "right",
    flex: 1,
    sortable: false,
  },
  {
    field: "close",
    headerName: "Close",
    headerAlign: "right",
    align: "right",
    flex: 1,
    sortable: false,
  },
  {
    field: "dif",
    headerName: "Difference",
    headerAlign: "right",
    align: "right",
    flex: 1,
    sortable: false,
    valueFormatter: ({ value }) => {
      const num = Number(value);

      return num > 0 ? `+${num}` : `${num}`
    },
    cellClassName: ({ value }) => {
      const num = Number(value);

      return num > 0 ? `${styles.positive}` : `${styles.negative}`
    },
  },
];

export const DailyTrendTable = ({
  historicItems,
}: {
  historicItems: THistoricDataItem[];
}) => {
  const dailyTrendRows = historicItems.map(({ date, open, close }, id) => {
    return {
      id,
      date,
      open,
      close,
      dif: (Number(close) - Number(open)).toFixed(4),
    };
  });

  return (
    <Tile title={"Daily Trend"}>
      <Table columns={dailyTrendColumns} rows={dailyTrendRows} />
    </Tile>
  );
};
