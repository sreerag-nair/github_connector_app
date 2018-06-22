import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Button, TextField } from '@material-ui/core';

class GistDeleteComponent extends Component {


    state = {
        username: '',
        userGistObject : ''
    }


    updateInput(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    getUserGists() {
        axios.get("https://api.github.com/users/" + this.state.username + "/gists")
        .then((response) =>{
            console.log("RESPONSE : ", response.data)
            // this.setState({ userGistObject :  })
        })
    }

    render() {
        return (
            <div>

                <h1>GistDeleteComponent</h1>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="username"
                            label="Enter the username"
                            onChange={this.updateInput.bind(this)}
                            value={this.state.username}
                        >

                        </TextField>
                        <Button
                            onClick={this.getUserGists.bind(this)}
                        >Submit
                        </Button>
                    </Grid>

                    {
                        this.state.userGistObject ?
                        (
                            <h1>Something will come here</h1>
                        )
                        :
                        null
                    }
                </Grid>

            </div>
        )
    }
}


export default GistDeleteComponent;