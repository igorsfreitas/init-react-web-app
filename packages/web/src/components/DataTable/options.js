import colors from '@idea/styles/colors'

export default {
  // loadingType: 'linear',
  selection: false,
  columnsButton: false,
  sorting: true,
  grouping: false,
  filtering: false,
  debounceInterval: 500,
  pageSizeOptions: [10, 20, 50, 100],
  initialPage: 0,
  actionsColumnIndex: -1,
  emptyRowsWhenPaging: false,
  toolbar: true,
  search: true,
  draggable: false,
  addRowPosition: 'first',
  toolbarProps: { color: 'primary' },
  paginationType: 'stepped',
  paginationIconButtonProps: { size: 'small' },
  paginationActiveIconButtonProps: {
    size: 'small',
    color: 'primary'
  },
  headerStyle: {
    zIndex: 11,
    // fontWeight: fonts.fontWeight.bold,
    padding: '5px 16px',
    backgroundColor: colors.white2
    // color: colors.blue.base
  },
  actionsCellDivStyle: { justifyContent: 'flex-end' },
  actionsCellStyle: { width: 'auto' },
  searchFieldProps: {
    type: 'search',
    InputProps: { endAdornment: null }
  },
  tableContainerStyle: { marginTop: 20 }
}
