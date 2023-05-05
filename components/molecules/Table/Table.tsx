import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styles from './Table.module.css';

export const Table = ({columns, rows}:{columns:GridColDef[]; rows :any[] }) =>{
  

return <DataGrid
        columns={columns} 
        rows={rows} 
        hideFooter 
        rowHeight={30}
        rowSelection={false}
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        classes={{
          root: styles.root,
          virtualScroller: styles.body,
          columnHeaders: styles.header,
          row: styles.row,
          cell: styles.cell,
          columnHeader: styles.columnHeader,
          columnSeparator: styles.separator
        }}
        columnHeaderHeight={40}
        />

  
}