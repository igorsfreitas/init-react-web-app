/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Bar } from 'react-chartjs-2'

import {
  Chart,
  registerables
} from 'chart.js'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

Chart.register(...registerables)

const SimpleBarGraph = ({
  title, labels, data, colors
}) => {
  const classes = useStyles()
  return (
    <Card className={ classes.root }>
      <Grid container>
        <Grid item>
          <CardContent>
            <Typography variant="subtitle2" color="textSecondary">
              {title}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container>
        <Bar
          data={ {
            labels,
            datasets: [
              {
                data,
                backgroundColor: colors,
                barPercentage: 0.3
              }
            ]
          } }
          options={ {
            indexAxis: 'y',
            plugins: { legend: { display: false } }
          } }
        />
      </Grid>
    </Card>
  )
}

SimpleBarGraph.propTypes = {
  title: PropTypes.string.isRequired, labels: PropTypes.arrayOf(PropTypes.string).isRequired, data: PropTypes.array.isRequired, colors: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SimpleBarGraph
