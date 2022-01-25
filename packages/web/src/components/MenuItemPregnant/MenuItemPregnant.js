import React, {
  useMemo,
  useState,
  useCallback
} from 'react'
import {
  NavLink,
  useLocation
} from 'react-router-dom'

import clsx from 'clsx'
import PropTypes from 'prop-types'

import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import startsWith from 'lodash/startsWith'

import Collapse from '@material-ui/core/Collapse'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'

import useStyles, { Container } from './styles'

const MenuItemPregnant = (props) => {
  const {
    drawerIsOpen,
    Icon,
    label,
    onOpen,
    url,
    exact,
    withIndicator,
    withArrow,
    subMenu,
    listItemClassName,
    handleLeftDrawerOpen
  } = props

  const classes = useStyles()
  const { pathname } = useLocation()

  const [openSubMenu, setOpenSubMenu] = useState(false)

  const hasSubMenu = useMemo(() => !isEmpty(subMenu), [subMenu])

  const handleItemClick = useCallback(
    () => {
      onOpen()
      if (hasSubMenu) {
        if (!drawerIsOpen) {
          handleLeftDrawerOpen()
          setOpenSubMenu(true)
        } else {
          setOpenSubMenu((old) => !old)
        }
      }
    },
    [drawerIsOpen, handleLeftDrawerOpen, hasSubMenu, onOpen]
  )

  const menuPregnantItem = useMemo(
    () => {
      const item = (
        <>
          {withIndicator && <div className={ classes.activeIndicator } />}

          {Icon && (
            <ListItemIcon classes={ { root: classes.listItemIcon } }>
              <Icon fontSize="small" size={ 35 } />
            </ListItemIcon>
          )}
          {drawerIsOpen && (
            <ListItemText
              primary={ label }
              primaryTypographyProps={ { noWrap: true, style: { lineHeight: 1 } } }
              classes={ { root: classes.text } }
            />
          )}

          {withArrow && hasSubMenu && drawerIsOpen && (
            <ListItemIcon classes={ { root: classes.arrow } }>
              {openSubMenu ? <IconExpandLess fontSize="small" className={ classes.icon }/> : <IconExpandMore fontSize="small" className={ classes.icon }/>}
            </ListItemIcon>
          )}
        </>
      )

      return (hasSubMenu || !url) ? item : (
        <NavLink
          to={ url }
          exact={ exact }
          className={ classes.menuPregnantLink }
          activeClassName={ classes.menuPregnantActive }
        >
          {item}
        </NavLink>
      )
    },
    [Icon, classes.activeIndicator, classes.arrow, classes.icon, classes.listItemIcon, classes.menuPregnantActive, classes.menuPregnantLink, classes.text, drawerIsOpen, exact, hasSubMenu, label, openSubMenu, url, withArrow, withIndicator]
  )

  return (
    <Container opened={ openSubMenu }>
      <ListItem
        button
        className={ clsx(listItemClassName, {
          [classes.listItem]: true,
          [classes.menuPregnantLink]: !url || hasSubMenu,
          [classes.menuPregnantActive]: hasSubMenu && startsWith(pathname, url)
        }) }
        onClick={ handleItemClick }
        classes={ { gutters: classes.gutters } }
      >
        <div>
          {menuPregnantItem}
        </div>
      </ListItem>
      {hasSubMenu && drawerIsOpen && (
        <Collapse
          in={ openSubMenu }
          timeout="auto"
          classes={ { wrapper: classes.collapse } }
          unmountOnExit
        >
          <List component="div" disablePadding>
            {map(subMenu, ({ path, menuPregnant }) => (
              <MenuItemPregnant
                key={ path }
                url={ path }
                label={ menuPregnant.title }
                Icon={ menuPregnant.Icon }
                exact={ menuPregnant.exact }
                drawerIsOpen={ drawerIsOpen }
                subMenu={ menuPregnant?.subMenu }
                listItemClassName={ classes.listItem }
              />
            ))}
          </List>
        </Collapse>
      )}
    </Container>
  )
}

MenuItemPregnant.propTypes = {
  drawerIsOpen: PropTypes.bool,
  Icon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]),
  label: PropTypes.string.isRequired,
  onOpen: PropTypes.func,
  url: PropTypes.string,
  exact: PropTypes.bool,
  subMenu: PropTypes.array,
  withIndicator: PropTypes.bool,
  withArrow: PropTypes.bool,
  listItemClassName: PropTypes.string,
  handleLeftDrawerOpen: PropTypes.func
}

MenuItemPregnant.defaultProps = {
  Icon: null,
  url: '',
  exact: false,
  onOpen () {},
  subMenu: undefined,
  withIndicator: false,
  withArrow: false,
  listItemClassName: null,
  handleLeftDrawerOpen () {},
  drawerIsOpen: true
}

export default MenuItemPregnant
