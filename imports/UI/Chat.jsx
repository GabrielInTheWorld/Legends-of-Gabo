import React, {Component} from 'react'
import * as bootstrap from 'react-bootstrap'
import {FieldGroup} from "../Components";

/**
 * bootstrap components
 */
const Button = bootstrap.Button
const FormGroup = bootstrap.FormGroup
const ControlLabel = bootstrap.ControlLabel
const FormControl = bootstrap.FormControl
const Panel = bootstrap.Panel
// const Grid = bootstrap.Grid
// const Row = bootstrap.Grid
// const Col = bootstrap.Col

export default class Chat extends Component{
    constructor(){
        super()
    }

    componentDidMount(){
        console.log("componentDidMount")
        console.log("chat: ", document.getElementById("chatUsername").style)
        console.log(document.getElementById("chatUsername") === document.activeElement)
        // console.log(document.getEventListeners(document.getElementById("chatUsername")))
    }

    sendMessage(){
        console.log("Hello World")
        var username = document.getElementById("chatUsername").value
        var messageInput = document.getElementById("chatMessageInput")
        // console.log(document.getElementById("chatUsername").value)
        // console.log(document.getElementById("chatMessageInput").value)
        console.log("Username: ", username)
        console.log("Message: ", messageInput.value)
        messageInput.value = ""
    }

    render(){
        return(
            <div id="chatComponent">
                <FieldGroup
                    id="chatUsername"
                    type="text"
                    placeholder="Type your Username in here..."
                    label="Username"
                    onFocus={() => {
                        console.log("onFocus")
                        // var elem = document.getElementById("chatComponent")
                        // console.log(elem)
                        document.getElementById("chatComponent").setAttribute("active", "true")
                    }}
                    onBlur={() => {
                        console.log("onBlur")
                        document.getElementById("chatComponent").setAttribute("active", "false")
                    }}
                    />

                <FormGroup
                    controlId="chatMessageInput"
                    onFocus={() => {
                        // console.log("onFocus textarea")
                        document.getElementById("chatComponent").setAttribute("active", "true")
                    }}
                    onBlur={() => {
                        document.getElementById("chatComponent").setAttribute("active", "false")
                    }}
                    >
                    <ControlLabel>Message</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Type your Message in here..." />
                </FormGroup>

                <Button type="submit" onClick={() => this.sendMessage()}>
                    Send
                </Button>
            </div>
        )
    }
}