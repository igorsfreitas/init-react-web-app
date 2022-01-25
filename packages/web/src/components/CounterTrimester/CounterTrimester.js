import {
  useState,
  useEffect
} from 'react'
import { useSelector } from 'react-redux'

import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'

import { selectCurrentTrimester } from '@idea/stores/gestation/gestation.selectors'

import TrimesterDown from '../icons/TrimesterDown'
import TrimesterUp from '../icons/TrimesterUp'
import {
  Counter,
  CounterContent,
  Texto,
  Wrapper
} from './styles'

const CounterTrimester = (props) => {
  const {
    trimesterCallback,
    exam,
    consultation
  } = props
  const currentTrimester = useSelector(selectCurrentTrimester)
  const [trimesterNumber, setTrimesterNumber] = useState(currentTrimester || 1)
  const handleTrimesterReturn = (direction) => {
    if (trimesterNumber > 1 && direction === 'up') {
      setTrimesterNumber(trimesterNumber - 1)
    } else if (direction === 'down' && trimesterNumber < 3) {
      setTrimesterNumber(trimesterNumber + 1)
    }
  }
  useEffect(() => {
    if (trimesterNumber) {
      trimesterCallback(trimesterNumber)
    }
  }, [trimesterCallback, trimesterNumber])

  return (
    <Grid container >
      <Wrapper>
        <Grid item xs={ 12 } sm={ 12 } md={ 12 }>
          {
            exam &&
            (
              <Texto>
                Este é o seu {trimesterNumber}º trimestre e você realizou { props.exames } {props.exames === 0 || props.exames === 1 ? 'exame' : 'exames'} até o momento.
              </Texto>
            )
          }
          {
            consultation &&
            (
              <Texto>
                Este é o seu {trimesterNumber}º trimestre e você realizou { props.exames }  {props.exames === 0 || props.exames === 1 ? 'consulta' : 'consultas'} até o momento.
              </Texto>
            )
          }

        </Grid>
        <Grid item>

          <Counter>
            <IconButton size="small"
              onClick={ () =>
                handleTrimesterReturn('up')
              }
            >
              <TrimesterUp/>
            </IconButton>
            <CounterContent>
              {trimesterNumber} trimestre
            </CounterContent>
            <IconButton
              size="small"
              onClick={ () =>
                handleTrimesterReturn('down')
              }
            >
              <TrimesterDown/>
            </IconButton>
          </Counter>
        </Grid>
      </Wrapper>
    </Grid>
  )
}

CounterTrimester.propTypes = {
  exames: PropTypes.number,
  trimesterCallback: PropTypes.func,
  exam: PropTypes.bool,
  consultation: PropTypes.bool
}

CounterTrimester.defaultProps = {
  exames: 0,
  trimesterCallback () {},
  exam: false,
  consultation: false
}

export default CounterTrimester
