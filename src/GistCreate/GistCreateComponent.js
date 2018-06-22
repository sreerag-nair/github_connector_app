import React, { Component } from 'react';
import axios from 'axios';
import Divider from '@material-ui/core/Divider'
import { TextField, Switch, Grid, Button } from '@material-ui/core';
class GistCreateComponent extends Component {


    state = {
        access_token: '',
        gist_name: '',
        gist_content: '',
        public: false,
        description: '',
    }

    componentDidMount() {
        // alert('GistCreateComponent')
        const access_token =
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1]
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSwitchChange(event) {
        this.setState({ [event.target.name]: !this.state.public })
    }

    create(){
        var githubAuthObj = {
            client_id: '3fb8c782622ac4a1d0a6',
            client_secret: 'fe62abf8e17b91d71e2c94c367af00e6ba7ba8e6',
            code: this.props.access_token
        }

        axios.post('https://api.github.com/gists',{
            "description": this.state.description,
            "public": this.state.public,
            "files": {
              [this.state.gist_name]: {
                "content": this.state.gist_content
              }
            }
          },
            {
                headers : {
                    'Authorization' : 'Bearer ' + this.props.access_token
                }
            })
        .then((response) =>{
            console.log("SUCCESS")
            console.log("RESPONSE CREATE : ", response)
        })
    }


    render() {



        return (

            <div>

                <h1>GistCreateComponent</h1>

                <Divider />
                <div style={{ width: '100%', height: '300px', background: 'azure', }} >

                    <Grid container spacing={24}>
                        <Grid xs = {12}>
                            <TextField id="name"
                                name="gist_name"
                                label="Gist name"
                                value={this.state.gist_name}
                                onChange={this.handleChange.bind(this)}
                                margin="normal" />
                        </Grid>
                        <Grid xs = {12}>
                            <TextField id="content"
                                name="gist_content"
                                label="Gist content"
                                value={this.state.gist_content}
                                onChange={this.handleChange.bind(this)}
                                margin="normal" />
                        </Grid>
                        <Grid xs = {12}>
                        Public?
                            <Switch
                                checked={this.state.public}
                                onChange={this.handleSwitchChange.bind(this)}
                                name="public"
                            />
                        </Grid>
                        <Grid xs = {12}>
                            <TextField id="description"
                                name="description"
                                label="Description"
                                value={this.state.description}
                                onChange={this.handleChange.bind(this)}
                                margin="normal" />
                        </Grid>
                        <Grid xs = {12}>
                            <Button onClick = { this.create.bind(this) } >Submit</Button>
                        </Grid>
                    </Grid>



                </div>
                <Divider />

                <div style={{ width: '100%', height: '300px', background: 'teal', marginTop: '20px' }}>
                    <p>{'{'}</p>

                    <div style={{ marginLeft: '40px' }}>Gist name (required) : {this.state.gist_name || 'Enter a name for the gist'}
                        <p></p>
                    </div>
                    <div style={{ marginLeft: '40px' }}>Gist content (required) : {this.state.gist_content || 'Enter something here'}
                        <p ></p>
                    </div>
                    <div style={{ marginLeft: '40px' }}>public : {this.state.public.toString()}
                        <p ></p>
                    </div>
                    <div style={{ marginLeft: '40px' }}>description : {this.state.description || 'Enter a short description'}
                        {/* <p style={{ marginLeft: '60px' }}></p> */}
                    </div>
                    <p>{'}'}</p>
                </div>

            </div>

        )
    }
}


export default GistCreateComponent;