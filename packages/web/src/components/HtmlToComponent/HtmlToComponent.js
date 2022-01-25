import React, { useRef } from 'react'

import HtmlToReactParser from 'html-to-react/lib/parser'
import PropTypes from 'prop-types'

const HtmlToComponent = (props) => {
  const { html } = props
  const parserRef = useRef(new HtmlToReactParser())
  return (
    <>
      { parserRef.current.parse(html) }
    </>
  )
}

HtmlToComponent.propTypes = { html: PropTypes.string.isRequired }

export default HtmlToComponent
