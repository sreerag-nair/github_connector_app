import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PermIdentity from '@material-ui/icons/PermIdentity'
import orange from '@material-ui/core/colors/orange'
import blueGrey from '@material-ui/core/colors/blueGrey'


const buttonTheme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: orange,
  },
})

class App extends Component {



  render() {
    // const { classes } = props;
    return (
      <div style={{ marginTop: '250px' }}>
        <Grid container spacing={24}>
          <Grid item xs></Grid>
          <Grid item xs={5}>
            <MuiThemeProvider theme={buttonTheme}>
              <a href="https://github.com/login/oauth/authorize?client_id=3fb8c782622ac4a1d0a6&redirect_uri=http://localhost:3000/redirect"
              style = {{ textDecoration : 'none' }}>
                <Button variant="contained" color="primary" style={{ width: '100%' }}>
                  <PermIdentity />
                  Login to GitHub
              </Button>
              </a>
            </MuiThemeProvider>
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
