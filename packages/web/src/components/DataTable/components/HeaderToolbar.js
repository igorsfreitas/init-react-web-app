/* eslint-disable no-nested-ternary */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react'

import { withT } from '@meta-react/i18n'
import classNames from 'classnames'
import { CsvBuilder } from 'filefy'
import PropTypes, { oneOf } from 'prop-types'

import flow from 'lodash/fp/flow'

import Card from '@material-ui/core/Card'
import CheckboxMui from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { lighten } from '@material-ui/core/styles/colorManipulator'
import withStyles from '@material-ui/core/styles/withStyles'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'

import InputSearch from '~/components/InputSearch'

import icons from '../icons'
import style, {
  ButtonDownload,
  ButtonGoBack,
  ButtonFilterData,
  ButtonAddNew
} from '../styles'

import 'jspdf-autotable'

const JsPDF = typeof window !== 'undefined' ? require('jspdf').JsPDF : null
/* eslint-enable no-unused-vars */

export class MTableToolbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      columnsButtonAnchorEl: null,
      exportButtonAnchorEl: null,
      searchText: props.searchText
    }
  }

  onSearchChange = (searchText) => {
    this.props.dataManager.changeSearchText(searchText)
    this.setState({ searchText }, this.props.onSearchChanged(searchText))
  };

  getTableData = () => {
    const columns = this.props.columns
      .filter(
        (columnDef) =>
          (!columnDef.hidden || columnDef.export === true) &&
          columnDef.export !== false &&
          columnDef.field
      )
      .sort((a, b) =>
        a.tableData.columnOrder > b.tableData.columnOrder ? 1 : -1
      )
    const data = (this.props.exportAllData
      ? this.props.data
      : this.props.renderData
    ).map((rowData) =>
      columns.map((columnDef) => this.props.getFieldValue(rowData, columnDef))
    )

    return [columns, data]
  };

  defaultExportCsv = () => {
    const [columns, data] = this.getTableData()

    let fileName = this.props.title || 'data'
    if (this.props.exportFileName) {
      fileName =
        typeof this.props.exportFileName === 'function'
          ? this.props.exportFileName()
          : this.props.exportFileName
    }

    const builder = new CsvBuilder(`${ fileName }.csv`)
    builder
      .setDelimeter(this.props.exportDelimiter)
      .setColumns(columns.map((columnDef) => columnDef.title))
      .addRows(data)
      .exportFile()
  };

  defaultExportPdf = () => {
    if (JsPDF !== null) {
      const [columns, data] = this.getTableData()

      const content = {
        startY: 50,
        head: [columns.map((columnDef) => columnDef.title)],
        body: data
      }

      const unit = 'pt'
      const size = 'A4'
      const orientation = 'landscape'

      const doc = new JsPDF(orientation, unit, size)
      doc.setFontSize(15)
      doc.text(this.props.exportFileName || this.props.title, 40, 40)
      doc.autoTable(content)
      doc.save(
        `${ this.props.exportFileName || this.props.title || 'data' }.pdf`
      )
    }
  };

  exportCsv = () => {
    if (this.props.exportCsv) {
      this.props.exportCsv(this.props.columns, this.props.data)
    } else {
      this.defaultExportCsv()
    }
    this.setState({ exportButtonAnchorEl: null })
  };

  exportPdf = () => {
    if (this.props.exportPdf) {
      this.props.exportPdf(this.props.columns, this.props.data)
    } else {
      this.defaultExportPdf()
    }
    this.setState({ exportButtonAnchorEl: null })
  };

  renderSearch () {
    const localization = {
      ...MTableToolbar.defaultProps.localization,
      ...this.props.localization
    }
    if (this.props.search) {
      return (
        <InputSearch
          detached
          fullWidth
          name="search"
          autoFocus={ this.props.searchAutoFocus }
          className={ this.props.classes.searchField }
          value={ this.state.searchText }
          onChange={ (event) => this.onSearchChange(event.target.value) }
          placeholder={ this.props.searchPlaceholder || localization.searchPlaceholder }
          style={ { marginBottom: 0 } }
        />
      )
    }
    return null
  }

  renderDefaultActions () {
    const localization = {
      ...MTableToolbar.defaultProps.localization,
      ...this.props.localization
    }
    const { classes } = this.props

    return (
      <div>
        {this.props.columnsButton && (
          <span>
            <Tooltip title={ localization.showColumnsTitle }>
              <IconButton
                color="inherit"
                onClick={ (event) =>
                  this.setState({ columnsButtonAnchorEl: event.currentTarget })
                }
                aria-label={ localization.showColumnsAriaLabel }
              >
                <this.props.icons.ViewColumn />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={ this.state.columnsButtonAnchorEl }
              open={ Boolean(this.state.columnsButtonAnchorEl) }
              onClose={ () => this.setState({ columnsButtonAnchorEl: null }) }
            >
              <MenuItem
                key="text"
                disabled
                style={ {
                  opacity: 1,
                  fontWeight: 600,
                  fontSize: 12
                } }
              >
                {localization.addRemoveColumns}
              </MenuItem>
              {this.props.columns.map((col) => {
                if (!col.hidden || col.hiddenByColumnsButton) {
                  return (
                    <li key={ col.tableData.id }>
                      <MenuItem
                        className={ classes.formControlLabel }
                        component="label"
                        htmlFor={ `column-toggle-${ col.tableData.id }` }
                        disabled={ col.removable === false }
                      >
                        <CheckboxMui
                          checked={ !col.hidden }
                          id={ `column-toggle-${ col.tableData.id }` }
                          onChange={ () =>
                            this.props.onColumnsChanged(col, !col.hidden)
                          }
                        />
                        <span>{col.title}</span>
                      </MenuItem>
                    </li>
                  )
                }
                return null
              })}
            </Menu>
          </span>
        )}
        {this.props.exportCsv && (
          <ButtonDownload
            id="download-file"
            className={ classes.downloadButton }
            onClick={ this.props.exportCsv }
            variant="outlined"
            disabled={ false }
          >
            Exportar Relatório
          </ButtonDownload>
        )}

        {this.props.onAddClick && (
          <ButtonAddNew
            id="new"
            className={ classes.addButton }
            onClick={ this.props.onAddClick }
            startIcon={ <icons.Add /> }
            variant="outlined"
            color="secondary"
            disabled={ this.props.loading || this.props.disabled }
          >
            {this.props.addTitle}
          </ButtonAddNew>
        )}

        {this.props.onFilterClick && (
          <ButtonFilterData
            id="filter"
            color="primary"
            onClick={ this.props.onFilterClick }
            variant={ this.props.activeFilter ? 'contained' : 'outlined' }
            disabled={ this.props.loading || this.props.disabled }
            style={ { marginLeft: 10 } }
          >
            <icons.FilterIcon color={ this.props.activeFilter ? '#FFF' : undefined } />
          </ButtonFilterData>
        )}
      </div>
    )
  }

  renderSelectedActions () {
    return (
      <>
        <this.props.components.Actions
          actions={ this.props.actions.filter(
            (a) => a.position === 'toolbarOnSelect'
          ) }
          data={ this.props.selectedRows }
          components={ this.props.components }
        />
      </>
    )
  }

  renderActions () {
    const { classes } = this.props

    return (
      <div className={ classes.actions }>
        <div>
          {this.props.selectedRows && this.props.selectedRows.length > 0
            ? this.renderSelectedActions()
            : this.renderDefaultActions()}
        </div>
      </div>
    )
  }

  renderToolbarTitle (title) {
    const { classes, titleProps } = this.props
    const toolBarTitle =
      typeof title === 'string' ? (
        <Typography
          variant="h5"
          { ...titleProps }
          style={ {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            // fontWeight: fonts.fontWeight.medium,
            // color: colors.primary.main,
            paddingBottom: 0,
            ...(titleProps.style || {})
          } }
        >
          {title}
        </Typography>
      ) : (
        title
      )

    return <div className={ classes.title }>{toolBarTitle}</div>
  }

  renderGoBack () {
    const localization = {
      ...MTableToolbar.defaultProps.localization,
      ...this.props.localization
    }
    return (
      <ButtonGoBack
        id="new"
        onClick={ this.props.onGoBack }
        size="small"
        variant="outlined"
      >
        { localization.goBack}
      </ButtonGoBack>
    )
  }

  render () {
    const { classes } = this.props
    const localization = {
      ...MTableToolbar.defaultProps.localization,
      ...this.props.localization
    }
    const title =
      this.props.showTextRowsSelected &&
      this.props.selectedRows &&
      this.props.selectedRows.length > 0
        ? typeof localization.nRowsSelected === 'function'
          ? localization.nRowsSelected(this.props.selectedRows.length)
          : localization.nRowsSelected.replace(
            '{0}',
            this.props.selectedRows.length
          )
        : this.props.showTitle
          ? this.props.title
          : null
    return (
      <Toolbar
        className={ classNames(classes.root, {
          [classes.highlight]:
            this.props.showTextRowsSelected &&
            this.props.selectedRows &&
            this.props.selectedRows.length > 0
        }) }
      >
        {(title || this.props.onGoBack) && (
          <div style={ {
            display: 'flex', alignItems: 'center', marginBottom: 10, width: '100%'
          } }
          >
            {this.props.onGoBack && this.renderGoBack()}
            {title && this.renderToolbarTitle(title)}
          </div>
        )}
        {this.props.searchFieldAlignment === 'left' && this.renderSearch()}
        {this.props.toolbarButtonAlignment === 'left' && this.renderActions()}
        <div className={ classes.spacer } />
        {this.props.searchFieldAlignment === 'right' && this.renderSearch()}
        {this.props.toolbarButtonAlignment === 'right' && this.renderActions()}
      </Toolbar>
    )
  }
}

MTableToolbar.defaultProps = {
  actions: [],
  columns: [],
  columnsButton: false,
  localization: {
    addRemoveColumns: 'Add or remove columns',
    nRowsSelected: '{0} row(s) selected',
    showColumnsTitle: 'Show Columns',
    showColumnsAriaLabel: 'Show Columns',
    exportTitle: 'Export',
    exportAriaLabel: 'Export',
    exportCSVName: 'Export as CSV',
    exportPDFName: 'Export as PDF',
    searchTooltip: 'Search',
    searchPlaceholder: 'Search',
    searchAriaLabel: 'Search',
    clearSearchAriaLabel: 'Clear Search'
  },
  search: true,
  showTitle: true,
  searchText: '',
  showTextRowsSelected: true,
  toolbarButtonAlignment: 'right',
  searchAutoFocus: false,
  searchFieldAlignment: 'right',
  searchFieldVariant: 'standard',
  selectedRows: [],
  title: 'No Title!',
  titleProps: {},
  onGoBack: undefined,
  addTitle: null,
  activeFilter: false
}

MTableToolbar.propTypes = {
  // t: PropTypes.func.isRequired,
  actions: PropTypes.array,
  columns: PropTypes.array,
  columnsButton: PropTypes.bool,
  components: PropTypes.object.isRequired,
  getFieldValue: PropTypes.func.isRequired,
  localization: PropTypes.object.isRequired,
  onColumnsChanged: PropTypes.func.isRequired,
  dataManager: PropTypes.object.isRequired,
  searchText: PropTypes.string,
  onSearchChanged: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
  selectedRows: PropTypes.array,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  titleProps: PropTypes.object,
  showTitle: PropTypes.bool.isRequired,
  showTextRowsSelected: PropTypes.bool.isRequired,
  toolbarButtonAlignment: PropTypes.string.isRequired,
  searchFieldAlignment: PropTypes.string.isRequired,
  renderData: PropTypes.array,
  data: PropTypes.array,
  exportAllData: PropTypes.bool,
  exportButton: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({ csv: PropTypes.bool, pdf: PropTypes.bool })
  ]),
  exportDelimiter: PropTypes.string,
  exportFileName: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  exportCsv: PropTypes.func,
  exportPdf: PropTypes.func,
  classes: PropTypes.object,
  searchAutoFocus: PropTypes.bool,
  onFilterClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  onAddClick: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  onGoBack: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool
  ]),
  addTitle: PropTypes.string,
  activeFilter: PropTypes.bool
}

export const styles = (theme) => ({
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85)
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark
      },
  spacer: { flex: '1 1 0' },
  actions: {
    color: theme.palette.text.secondary,
    justifyContent: 'flex-end'
  },
  title: {
    overflow: 'hidden',
    width: '100%'
  },
  searchField: {
    minWidth: 100,
    maxWidth: 700,
    [theme.breakpoints.down('sm')]: { maxWidth: '100%' }
  },
  formControlLabel: {
    // paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  searchPlaceholder: undefined,
  downloadButton: { color: colors.blue, borderColor: colors.blue },
  root: {
    minHeight: 0,
    gridGap: 10,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignItems: 'flex-end'
    }
  }
})

export default flow(
  withT,
  withStyles(styles)
)(MTableToolbar)
