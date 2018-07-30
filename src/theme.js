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
    },
    third: {
      main: '#4e4e4e'
    }
  }
});

export default theme;
