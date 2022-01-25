import styled from 'styled-components'

import TextField from '@material-ui/core/TextField'

export const TextFieldStyled = styled(TextField).attrs((props) => ({
  variant: 'outlined',
  ...props
})).withConfig({
  shouldForwardProp: (propName) =>
    propName !== 'minWidth' && propName !== 'validateOnBlur'
})`
  width: ${ (props) => props.width ? `${ props.width }px` : '100%' };

  pointer-events: ${ (props) => props.readOnly ? 'none' : 'auto' };

  margin-bottom: 10px;
  // padding: 0 4px; 

  label {
    inline-size: max-content;
  }

  input {
    font-size: 15px;
    margin-top: 10px;
  } 

  .asterisk {
    color: 'blue'
  }
`
