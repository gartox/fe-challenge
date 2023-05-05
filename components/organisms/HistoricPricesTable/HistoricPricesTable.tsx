import { Tile } from "@/components/molecules/Tile";
import { Table } from "@/components/molecules/Table";
import { GridColDef } from "@mui/x-data-grid";
import { THistoricDataItem } from "@/types";
import { getFormatedDateMDY } from "@/utils/getFormatedDateMDY";

const historicPricesColumn: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    headerAlign: "left",
    flex: 1,
    sortable: false,
    valueFormatter: getFormatedDateMDY,
  },
  {
    field: "high",
    headerName: "High",
    headerAlign: "right",
    align: "right",
    flex: 1,
    sortable: false,
  },
  {
    field: "low",
    headerName: "Low",
    headerAlign: "right",
    align: "right",
    flex: 1,
    sortable: false,
  },
];

export const HistoricPricesTable = ({
  historicItems,
}: {
  historicItems: THistoricDataItem[];
}) => {
  const historicPricesRows = historicItems.map(({ date, high, low }, i) => {
    return {
      id: i,
      date,
      high,
      low,
    };
  });

  return (
    <Tile title={"Historic Prices"}>
      <Table columns={historicPricesColumn} rows={historicPricesRows} />
    </Tile>
  );
};
