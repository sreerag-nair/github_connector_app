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
        code : '',
        access_token: '',
        showCreateGistComponent: true,
    }

    componentDidMount() {
        /* const access_code =
            window.location.href.match(/\?access_code=(.*)/) &&
            window.location.href.match(/\?access_code=(.*)/)[1] 
            
            this.setState(access_code)
            */

        
        const code = 
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1]

        if(code){
            axios.get('http://localhost:8001/getaccesstoken?code=' + code)
            .then((response) =>{
                console.log("CODE RESPONSE : " , response.data.access_token)
                this.setState( {access_token : response.data.access_token} ,
                    () =>{
                        console.log("state : ", this.state)
                    })
            })
        }
    }

    showCreateGist(){

        // this.setState(access_code)
        
        const code = 
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1]


        if(code){
            axios.get('http://localhost:8001/authenticate?code=' + code)
            .then((response) =>{
                console.log("CODE RESPONSE : " , response)
            })
        }
        else{
            console.log("ELSE")
            axios.get('http://localhost:8001/authenticate')
        }

        this.setState({ showCreateGistComponent : true })
    }

    showDeleteGist(){

        const access_code =
            window.location.href.match(/\?access_code=(.*)/) &&
            window.location.href.match(/\?access_code=(.*)/)[1]

        this.setState(access_code)
        
        const code = 
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1]

        if(code){
            axios.get('http://localhost:8001/authenticate?code=' + code)
            .then((response) =>{
                console.log("CODE RESPONSE : " , response)
            })
            .catch(() =>{
                this.props.history.push('/d')
            })
        }
        

        this.setState({ showCreateGistComponent : false })
    }


    render() {
        return (
            <div>

                <Grid container spacing={24}>
                    <Grid item xs></Grid>
                    <Grid item xs={5}>
                       <a href = "http://localhost:8001/authenticate">
                       <Button type = "primary">
                        DashBoardComponent
                        </Button>
                       </a>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>


                <Grid container spacing={24}>
                    <Grid item xs></Grid>
                    <Grid item xs={5}>
                        <MuiThemeProvider theme={createGistButton}>
                            <Button onClick = { this.showCreateGist.bind(this) }  variant="contained" color="primary" style={{ width: '50%' }}>
                                Create gist
                            </Button>
                        </MuiThemeProvider>



                        <MuiThemeProvider theme={deleteGistButton}>
                            <Button onClick = { this.showDeleteGist.bind(this) } variant="contained" color="primary" style={{ width: '50%', right: '0px' }}>
                                Delete gist
                            </Button>
                        </MuiThemeProvider>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>


                <div>


                    <Grid container spacing={24}>
                        <Grid item xs></Grid>
                        <Grid item xs={10}>


                            {
                                this.state.showCreateGistComponent ?
                                <GistCreateComponent access_token = { this.state.access_token } /> : 
                                <GistDeleteComponent access_token = { this.state.access_token }/>
                                }

                        </Grid>
                        <Grid item xs></Grid>
                    </Grid>



                </div>

            </div>
        )
    }
}


export default DashBoardComponent;