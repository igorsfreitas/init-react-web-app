import {
  useRef,
  useState,
  useEffect,
  useMemo,
  useCallback,
  forwardRef
} from 'react'

import { useT } from '@meta-react/i18n'
import MaterialTable from 'material-table'
import PropTypes from 'prop-types'

import filter from 'lodash/filter'
import get from 'lodash/get'
import isBoolean from 'lodash/isBoolean'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import isFunction from 'lodash/isFunction'
import map from 'lodash/map'
import omitBy from 'lodash/omitBy'
import snakeCase from 'lodash/snakeCase'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { ThemeProvider } from '@material-ui/core/styles'

import Header from './components/Header'
import HeaderToolbar from './components/HeaderToolbar'
import Pagination from './components/Pagination'
import datagridI18 from './i18n'
import icons from './icons'
import MTableOptions from './options'
import useStyles, { theme } from './styles'

const DataTable = forwardRef((props, tableRef) => {
  const {
    data,
    pageSize,
    params,
    urlParams,
    queryParams,
    columns: propColumns,
    options: propOptions,
    shadow,
    title,
    titleProps,
    onFilterClick,
    addFilterTitle,
    onAddClick,
    addTitle,
    addTooltip,
    onEditClick,
    onDeleteClick,
    conditionToEdit,
    conditionToDelete,
    onExportClick,
    onRowClick,
    loading,
    disabled,
    disabledRow,
    onSelectionChange,
    tableBodyClassName,
    tableHeaderClassName,
    components,
    emptyMessage,
    actions: propActions,
    searchPlaceholder,
    search,
    onGoBack,
    pagination,
    style: propStyle,
    filters,
    withoutCard,
    ...rest
  } = props

  const t = useT()
  const classes = useStyles()

  const mounted = useRef(false)
  const configs = useRef({})

  const [filteredRows, setFilteredRows] = useState([])

  const i18n = useMemo(() => {
    const translations = datagridI18(t)
    return {
      ...(translations || {}),
      body: {
        ...get(translations, 'body', {}),
        emptyDataSourceMessage: emptyMessage || get(translations, 'body.emptyDataSourceMessage')
      }
    }
  }, [t, emptyMessage])

  const columns = useMemo(
    () => map(propColumns, (column) => {
      const { cellStyle = {} } = column

      let columnStyle = cellStyle
      if (!isFunction(cellStyle)) {
        columnStyle = () => cellStyle
      }

      return {
        emptyValue: column.render ? undefined : '-',
        ...column,
        cellStyle (_, rowData) {
          let rowStyle = {}
          if (disabledRow(rowData)) {
            rowStyle = { opacity: 0.7 }
          }
          return {
            ...columnStyle(_, rowData),
            ...rowStyle
          }
        }
      }
    }),
    [disabledRow, propColumns]
  )

  const options = useMemo(
    () => ({
      selectionProps (row) {
        const rowDisabled = disabledRow(row)
        const response = {
          // color: 'primary',
          disabled: rowDisabled
        }
        if (rowDisabled) {
          response.checked = false
        }
        return response
      },
      ...MTableOptions,
      ...propOptions,
      showTitle: !isEmpty(title),
      pageSize,
      paging: pagination,
      searchFieldProps: {
        ...MTableOptions.searchFieldProps,
        ...get(propOptions, 'searchFieldProps', {}),
        classes: {
          root: classes.searchField,
          ...get(MTableOptions, 'searchFieldProps.classes', {}),
          ...get(propOptions, 'searchFieldProps.classes', {})
        },
        InputProps: { endAdornment: null }
      }
    }),
    [classes.searchField, pagination, disabledRow, pageSize, propOptions, title]
  )

  const actions = useMemo(
    () => {
      let newActions = []

      if (onExportClick) {
        const ExportIcon = icons.Export
        newActions = [
          {
            icon: ExportIcon,
            tooltip: t('datagrid toolbar export title'),
            onClick: onExportClick,
            isFreeAction: true,
            position: 'toolbar',
            disabled: loading || disabled
          },
          ...newActions
        ]
      }

      if (onDeleteClick) {
        const DeleteIcon = icons.Delete
        newActions = [
          (row) => {
            const canDelete = conditionToDelete(row)
            return {
              icon: DeleteIcon,
              tooltip: t('datagrid body delete tooltip'),
              hidden: !canDelete,
              onClick: onDeleteClick,
              disabled: loading || disabled || !canDelete,
              iconButtonProps: {
                style: { marginLeft: 10 },
                size: 'small',
                color: 'default'
              },
              position: 'row'
            }
          },
          ...newActions
        ]
      }

      if (onRowClick) {
        newActions = [
          {
            icon: icons.AccessRow,
            tooltip: t('datagrid body access tooltip'),
            onClick: onRowClick,
            disabled: loading || disabled,
            iconButtonProps: {
              style: { marginLeft: 10 },
              size: 'small',
              color: 'default'
            },
            position: 'row'
          },
          ...newActions
        ]
      }

      if (onEditClick) {
        const EditIcon = icons.Edit
        newActions = [
          (row) => {
            const canEdit = conditionToEdit(row)
            return {
              icon: EditIcon,
              tooltip: t('datagrid body edit tooltip'),
              hidden: !canEdit,
              onClick: onEditClick,
              disabled: loading || disabled || !canEdit,
              iconButtonProps: {
                style: { marginLeft: 10 },
                size: 'small',
                color: 'default'
              },
              position: 'row'
            }
          },
          ...newActions
        ]
      }

      return map(
        [...propActions, ...newActions],
        (action) => {
          if (isFunction(action)) return action
          return {
            ...action,
            onClick: action.position === 'toolbarOnSelect'
              ? () => action.onClick(filteredRows)
              : action.onClick
          }
        }
      )
    },
    [conditionToDelete, conditionToEdit, disabled, filteredRows, loading, onDeleteClick, onEditClick, onExportClick, onRowClick, propActions, t]
  )

  const style = useMemo(
    () => ({
      ...propStyle,
      ...(!shadow ? { boxShadow: 'none' } : {})
    }),
    [propStyle, shadow]
  )

  const handleSelectionChange = useCallback(
    (rows) => {
      const newFilteredRows = filter(rows, (row) => !disabledRow(row))
      onSelectionChange(newFilteredRows)
      setFilteredRows(newFilteredRows)
    },
    [disabledRow, onSelectionChange]
  )

  const asyncData = useCallback(
    async (query) => {
      try {
        // const filters = get(query, 'filters')
        const searchTerm = get(query, 'search')
        const size = get(query, 'pageSize', pageSize)
        const orderBy = get(query, 'orderBy.field')
        const orderDirection = get(query, 'orderDirection')
        let page = get(query, 'page', 0)

        const currentConfigs = {
          size,
          searchTerm,
          orderBy,
          orderDirection
        }

        if (!isEqual(currentConfigs, configs.current)) {
          page = 0 // if has changes, return to first page
        }

        configs.current = { ...currentConfigs }

        let requestQueryParams = {
          page: page + 1,
          limit: size
        }

        if (!isEmpty(orderBy)) {
          requestQueryParams = {
            ...requestQueryParams,
            orderBy: `${ orderDirection === 'desc' ? '-' : '' }${ snakeCase(orderBy) }`
            // orderDirection
          }
        }
        if (!isEmpty(searchTerm)) {
          requestQueryParams = {
            ...requestQueryParams,
            q: searchTerm
          }
        }
        if (!isEmpty(queryParams)) {
          requestQueryParams = {
            ...requestQueryParams,
            ...omitBy(queryParams, (param) => !isBoolean(param) && param !== 0 && isEmpty(param))
          }
        }

        const {
          data: {
            data: datagridData,
            totalRecords
          }
        } = await data({
          ...params,
          ...filters,
          ...requestQueryParams
        }, urlParams)

        return {
          data: datagridData,
          page,
          totalCount: totalRecords || 0
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(i18n.fetchLoadError, e)
        throw e
      }
    },
    [data, filters, i18n.fetchLoadError, pageSize, params, queryParams, urlParams]
  )

  const realData = useMemo(
    () => isFunction(data) ? asyncData : data,
    [asyncData, data]
  )

  const table = useMemo(
    () => (
      <MaterialTable
        { ...rest }
        icons={ icons }
        options={ options }
        columns={ columns }
        data={ realData }
        localization={ i18n }
        onRowClick={ onRowClick }
        title={ title }
        actions={ actions }
        style={ { boxShadow: 'none' } }
        isLoading={ isFunction(data) ? undefined : loading }
        components={ {
          Header: (headerProps) => (
            <Header
              { ...headerProps }
              tableHeaderClassName={ tableHeaderClassName }
            />
          ),
          Toolbar: (toolbarProps) => (
            <HeaderToolbar
              { ...toolbarProps }
              searchFieldAlignment="left"
              titleProps={ titleProps }
              onFilterClick={ onFilterClick }
              activeFilter={ !isEmpty(filters) }
              onAddClick={ onAddClick }
              disabled={ disabled }
              loading={ loading }
              addTitle={ addTitle || t('add new') }
              searchPlaceholder={ searchPlaceholder }
              onGoBack={ onGoBack }
              exportCsv={ onExportClick }
              search={ search }
            />
          ),
          Pagination,
          ...components
        } }
        onSelectionChange={ handleSelectionChange }
      />
    ),
    [actions, addTitle, columns, components, data, disabled, filters, handleSelectionChange, i18n, loading, onAddClick, onExportClick, onFilterClick, onGoBack, onRowClick, options, realData, rest, search, searchPlaceholder, t, tableHeaderClassName, title, titleProps]
  )

  const tableWithCard = useMemo(
    () => (
      <Card style={ style }>
        <CardContent>
          {table}
        </CardContent>
      </Card>
    ),
    [style, table]
  )

  useEffect(
    // didUpdate
    () => {
      if (mounted.current && tableRef && isFunction(data)) {
        tableRef.current.onQueryChange()
      }
    },
    [data, urlParams, queryParams, tableRef]
  )

  useEffect(
    () => {
      mounted.current = true
      return () => {
        mounted.current = false
      }
    },
    []
  )

  return (
    <ThemeProvider theme={ theme }>
      {withoutCard ? table : tableWithCard}
    </ThemeProvider>

  )
})

DataTable.propTypes = {
  /** columns by material-table */
  columns: PropTypes.array.isRequired,
  /** actions by material-table */
  actions: PropTypes.array,
  /** data by material-table */
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]),
  /** options by material-table */
  options: PropTypes.object,
  /** params to inject into request */
  params: PropTypes.object,
  /** pageSize by material-table */
  pageSize: PropTypes.number,
  /** remove shadow of the datagrid container */
  shadow: PropTypes.bool,
  /** remove search of the datagrid container */
  search: PropTypes.bool,
  /** title by material-table */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** set style props to table title */
  titleProps: PropTypes.object,
  /* Enable Add button, and set the callback called when this button is clicked */
  onAddClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  /* Enable Filter button, and set the callback called when this button is clicked */
  onFilterClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  /** tooltip for add button */
  addTooltip: PropTypes.string,
  /** title for filter button */
  addFilterTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** title for add button */
  addTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onSelectionChange: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  /** Enable Edit button, and set the callback called when this button is clicked */
  onEditClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  /** Enable Delete button, and set the callback called when this button is clicked */
  onDeleteClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  /** Condition for display the Edit button */
  conditionToEdit: PropTypes.func,
  /** Condition for display the Delete button */
  conditionToDelete: PropTypes.func,
  /** Enable Export button, and set the callback called when this button is clicked */
  onExportClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  /** Enable Row click */
  onRowClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  /** datagrid is loading */
  loading: PropTypes.bool,
  /** datagrid is pagination */
  pagination: PropTypes.bool,
  /** disable all actions */
  disabled: PropTypes.bool,
  /** customize row when row was softdeleted */
  disabledRow: PropTypes.func,
  /** customize row when row was softdeleted */
  emptyMessage: PropTypes.string,
  urlParams: PropTypes.object,
  queryParams: PropTypes.object,
  tableBodyClassName: PropTypes.string,
  tableHeaderClassName: PropTypes.string,
  components: PropTypes.object,
  searchPlaceholder: PropTypes.string,
  onGoBack: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  style: PropTypes.object,
  filters: PropTypes.object,
  withoutCard: PropTypes.bool
}

DataTable.defaultProps = {
  data: [],
  options: {},
  params: {},
  shadow: true,
  actions: [],
  pageSize: 10,
  title: '',
  titleProps: undefined,
  onAddClick: null,
  onFilterClick: null,
  addTooltip: '',
  addTitle: null,
  addFilterTitle: null,
  onSelectionChange: () => [],
  onEditClick: null,
  conditionToEdit: () => true,
  conditionToDelete: () => true,
  onDeleteClick: null,
  onExportClick: null,
  onRowClick: undefined,
  loading: undefined,
  disabled: false,
  disabledRow: () => false,
  emptyMessage: null,
  urlParams: {},
  tableBodyClassName: null,
  tableHeaderClassName: null,
  components: {},
  queryParams: {},
  searchPlaceholder: undefined,
  pagination: true,
  onGoBack: undefined,
  style: {},
  search: true,
  filters: {},
  withoutCard: false
}

export default DataTable
