import React, { Component } from 'react';
import axios from 'axios';

class RedirectComponent extends Component {


    state = {
        code: '',
    }

    componentDidMount() {
        const code =
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1]
        this.setState({ code: code })

        setTimeout(() =>{

            this.props.history.push('/d?access_token=' + this.state.code)

        }, 3000)
    }

    render() {
        return (
            <div>
                <h1>Redirect.....</h1>
                <h1>Code : { this.state.code }</h1>
            </div>
        )
    }
}


export default RedirectComponent;