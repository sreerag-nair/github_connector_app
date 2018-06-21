import React, { Component } from 'react';
import axios from 'axios';
import Divider from '@material-ui/core/Divider'
class GistCreateComponent extends Component{


    state = {
        code : '',
        files : '',
        description : 'THIS IS A TEST DESCRIPTION',
        public : false,
    }
    
    componentDidMount(){
        // alert('GistCreateComponent')
        const code =
            window.location.href.match(/\?code=(.*)/) &&
            window.location.href.match(/\?code=(.*)/)[1]
    }
    
    render(){
        return(
            
            <div>
                
                <h1>GistCreateComponent</h1>

                <Divider />
                <div style = {{ width : '100%', height : '300px', background : 'yellow', }} >
                </div>
                <Divider />
                <div style = {{ width : '100%', height : '300px', background : 'teal', marginTop : '20px' }}>
                <p>{'{'}</p>
                <p style = {{ marginLeft : '40px' }}>Sreerag</p>
                <p style = {{ marginLeft : '40px' }}>Sreerag</p>
                <p style = {{ marginLeft : '40px' }}>public : 
                        <p style = {{ marginLeft : '60px' }}>{ this.state.public.toString() }</p>
                </p>
                <p style = {{ marginLeft : '40px' }}>description : 
                        <p style = {{ marginLeft : '60px' }}>{ this.state.description }</p>
                </p>
                <p>{'}'}</p>
                </div>

            </div>

        )
    }
}


export default GistCreateComponent;