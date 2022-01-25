import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import {
  Chart,
  registerables
} from 'chart.js'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import useStyles, {
  DoughnutContainer,
  DoughnutInner
} from './styles'

Chart.register(...registerables)

// import colors from '@idea/styles/colors'
// FALTA POR LEGENDAS E TITULO DO GRÁFICO

const SimpleDoughnutChart = ({
  title, datasets, labels, doughnutInner, legends
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
        <Grid item md={ 6 }>
          <DoughnutContainer>
            <Doughnut
              data={ {
                labels,
                datasets
              } }
              options={ {
                cutout: 90,
                plugins: { legend: { display: false } }
              } }
            />
            <DoughnutInner>
              <h2>{doughnutInner.number}</h2>
              <div>{doughnutInner.label}</div>
            </DoughnutInner>
          </DoughnutContainer>
        </Grid>

        <Grid item md={ 5 }>
          {legends.map((legend) => <h3 key={ `legend${ legend.color }` } style= { { color: legend.color } }>{legend.percent} <small>{legend.referenceTo} - {legend.referenceNumber}</small></h3>)}
        </Grid>
      </Grid>

    </Card>
  )
}

SimpleDoughnutChart.propTypes = {
  title: PropTypes.string.isRequired,
  datasets: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  legends: PropTypes.array.isRequired,
  doughnutInner: PropTypes.object.isRequired
}
// value: PropTypes.number.isRequired,
// status: PropTypes.string.isRequired

// PARAMS: COLORS string[],

export default SimpleDoughnutChart
