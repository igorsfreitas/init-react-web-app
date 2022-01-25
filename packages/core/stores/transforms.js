
import { createTransform } from 'redux-persist'

import {
  parse,
  stringify
} from 'flatted'

import find from 'lodash/find'

export const circularTransform = createTransform(
  (inboundState) => stringify(inboundState),
  (outboundState) => parse(outboundState)
)

export const blacklistTransform = (...blackListKey) => createTransform(
  (inboundState, key) => {
    if (!find(blackListKey, (item) => item === key)) {
      return inboundState
    }
    return undefined
  }
)
