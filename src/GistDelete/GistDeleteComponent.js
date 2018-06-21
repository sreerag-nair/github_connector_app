import React, { Component } from 'react';
import axios from 'axios';

class GistDeleteComponent extends Component{


    state = {
        code : ''
    }
    
    componentDidMount(){
        // alert('GistCreateComponent')
        
        const code =
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1]
        this.setState({ code: code }, 
        () =>{

            axios.post('https://github.com/login/oauth/access_token',{
                client_id : '3fb8c782622ac4a1d0a6',
                client_secret : 'fe62abf8e17b91d71e2c94c367af00e6ba7ba8e6',
                code : this.state.code,
                redirect_uri : 'http://localhost:3000/dashboard'
            })
            .then(() =>{
                
            })

        })
    }
    
    render(){
        return(
            <h1>GistDeleteComponent</h1>
        )
    }
}


export default GistDeleteComponent;