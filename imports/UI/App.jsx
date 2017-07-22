import React, {Component} from 'react'
import * as bootstrap from 'react-bootstrap'

import Chat from './Chat.jsx'

export default class App extends Component{
    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <p></p>
                <Chat/>
            </div>
        )
    }
}