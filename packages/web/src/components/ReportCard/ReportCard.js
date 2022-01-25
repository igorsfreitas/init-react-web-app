import React from 'react'

import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'

import CircularStaticWithLabel from '~/components/CircularStaticWithLabel/CircularStaticWithLabel'

import useStyles from './styles'

const ReportCard = (props) => {
  const classes = useStyles()

  return (
    <Card className={ classes.root }>
      <div className={ classes.details }>
        <CardContent className={ classes.quantity }>

          <Typography variant="subtitle2" style={ { color: props.status === 'error' ? colors.error.main : colors.secondary } }>
            {props.value}
          </Typography>

        </CardContent>
        <CardContent className={ classes.title }>

          <Typography variant="subtitle2" color="textSecondary" style={ { fontSize: '10px' } }>
            {props.title}
          </Typography>

        </CardContent>
        <CardContent className={ classes.graph }>

          <CircularStaticWithLabel value={ props.percent } status={ props.status } />

        </CardContent>
      </div>
    </Card>
  )
}

ReportCard.propTypes = {
  value: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ReportCard
