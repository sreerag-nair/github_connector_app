import React, { Component } from 'react';
import axios from 'axios';

class RedirectComponent extends Component {


    state = {
        code: '',
    }

    componentWillMount() {
        const code =
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1]
        this.setState({ code: code })



    }

    componentDidMount() {

        /* 
        setTimeout(() =>{

            this.props.history.push('/d?access_token=' + this.state.code)

        }, 10000)
        */

        var githubAuthObj = {
            client_id: '3fb8c782622ac4a1d0a6',
            client_secret: 'fe62abf8e17b91d71e2c94c367af00e6ba7ba8e6',
            code: this.state.code
        }
        console.log("GH : ", githubAuthObj)

        /* axios.post('https://github.com/login/oauth/access_token', githubAuthObj, {
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then((response) => {
                console.log("RESPONSE : ", response)
            }) */

       /*  fetch('https://github.com/login/oauth/access_token', {
            method: 'POST',
            mode: 'cors',
            headers : {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
            },
            body : {
              githubAuthObj
            }
        })
            .then((response) => {
                console.log('rs : ', response)
            }) */

    }

    render() {
        return (
            <div>
                <h1>Redirect.....</h1>
                <h1>Code : {this.state.code}</h1>
            </div>
        )
    }
}


export default RedirectComponent;