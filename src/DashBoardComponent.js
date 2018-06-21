import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
    withStyles,
    MuiThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';
import GistCreateComponent from './GistCreate/GistCreateComponent';
import GistDeleteComponent from './GistDelete/GistDeleteComponent';


import green from '@material-ui/core/colors/green'
import lime from '@material-ui/core/colors/lime'


const createGistButton = createMuiTheme({
    palette: {

        primary: {
            main: '#3D5AFE',
            light: '',
            dark: '',
            contrastText: ''
        }
    }
})

const deleteGistButton = createMuiTheme({
    palette: {

        primary: {
            light: '#F50057',
            dark: '',
            contrastText: '',
            main: '#3D5AFE'
        }
    }
})



class DashBoardComponent extends Component {

    state = {
        access_code: ''
    }

    componentDidMount() {
        const code =
            window.location.href.match(/\?access_code=(.*)/) &&
            window.location.href.match(/\?access_code=(.*)/)[1]

        this.setState({ access_code: code })
    }

    render() {
        return (
            <div>

                <Grid container spacing={24}>
                    <Grid item xs></Grid>
                    <Grid item xs={5}>
                        DashBoardComponent
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>


                <Grid container spacing={24}>
                    <Grid item xs>XS</Grid>
                    <Grid item xs={5}>
                        <Link to='/d/create'>
                            <MuiThemeProvider theme={createGistButton}>
                                <Button variant="contained" color="primary" style={{ width: '50%' }}>
                                    Create gist
                            </Button>
                            </MuiThemeProvider>
                        </Link>



                        <Link to='/d/delete'>
                            <MuiThemeProvider theme={deleteGistButton}>
                                <Button variant="contained" color="primary" style={{ width: '50%', right: '0px' }}>
                                    Delete gist
                            </Button>
                            </MuiThemeProvider>
                        </Link>
                    </Grid>
                    <Grid item xs>XS</Grid>
                </Grid>


                <div>


                    <Grid container spacing={24}>
                        <Grid item xs>XS</Grid>
                        <Grid item xs={10}>

                            <Switch>
                                <Route path='/d/create' render={() => <GistCreateComponent />} />
                                <Route path='/d/delete' render={() => <GistDeleteComponent />} />
                            </Switch>

                        </Grid>
                        <Grid item xs>XS</Grid>
                    </Grid>



                </div>

            </div>
        )
    }
}


export default DashBoardComponent;