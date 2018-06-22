import React, { Component } from 'react';
import axios from 'axios';
import Divider from '@material-ui/core/Divider'
import { TextField, Switch } from '@material-ui/core';
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

    handleChange(event){
            this.setState({ [event.target.name] : event.target.value })
    }

    handleSwitchChange(event){
        this.setState({ [event.target.name] : !this.state.public })
    }

    render() {

       

        return (

            <div>

                <h1>GistCreateComponent</h1>

                <Divider />
                <div style={{ width: '100%', height: '300px', background: 'azure', }} >

                    <TextField id="name"
                        name = "gist_name"  
                        label="Gist name"
                        value={this.state.gist_name}
                        onChange={this.handleChange.bind(this)}
                        margin="normal" />
                    
                    <TextField id="content"
                        name = "gist_content"  
                        label="Gist content"
                        value={this.state.gist_content}
                        onChange={this.handleChange.bind(this)}
                        margin="normal" />
                    
                    <Switch
                    checked = { this.state.public }
                    onChange = { this.handleSwitchChange.bind(this) }
                    name = "public"
                    />

                    <TextField id="description"
                        name = "description"  
                        label="Description"
                        value={this.state.description}
                        onChange={this.handleChange.bind(this)}
                        margin="normal" />



                </div>
                <Divider />

                <div style={{ width: '100%', height: '300px', background: 'teal', marginTop: '20px' }}>
                    <p>{'{'}</p>

                    <div style={{ marginLeft: '40px' }}>Gist name (required) :
                        <p style={{ marginLeft: '60px' }}>{this.state.gist_name || 'Enter a name for the gist'}</p>
                    </div>
                    <div style={{ marginLeft: '40px' }}>Gist content (required) :
                        <p style={{ marginLeft: '60px' }}>{this.state.gist_content || 'Enter something here'}</p>
                    </div>
                    <div style={{ marginLeft: '40px' }}>public :
                        <p style={{ marginLeft: '60px' }}>{this.state.public.toString()}</p>
                    </div>
                    <div style={{ marginLeft: '40px' }}>description :
                        <p style={{ marginLeft: '60px' }}>{this.state.description || 'Enter a short description'}</p>
                    </div>
                    <p>{'}'}</p>
                </div>

            </div>

        )
    }
}


export default GistCreateComponent;