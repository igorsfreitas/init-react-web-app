export const theme = (muiTheme) => ({
  ...muiTheme,
  overrides: {
    ...(muiTheme.overrides || {}),
    MuiOutlinedInput: {
      ...(muiTheme.overrides?.MuiOutlinedInput || {}),
      root: {
        ...(muiTheme.overrides?.MuiOutlinedInput?.root || {}),
        height: 260 // tela alerta height:260, perfis height: undefined
      },
      multiline: {
        width: 'auto',
        borderRadius: 15
      }
    }
  }
})
