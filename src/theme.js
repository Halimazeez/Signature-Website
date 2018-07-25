import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    //blue
    primary: {
      main: '#3a93f0',
      contrastText: '#fff'
    },
    //dark grey
    secondary: {
      main: '#fff',
      contrastText: '#3a93f0'
    }
  }
});

export default theme;
