import React, {Component, PropTypes} from 'react'
import {createContainer} from 'meteor/react-meteor-data'
import * as bootstrap from 'react-bootstrap'
import {FieldGroup} from "../Components";
import Message from './components/Message.jsx'
import Alert from './components/Alert'
import {Messages} from "../Collections/Messages.js"

// Messages = new Meteor.Collection("Messages", {})
//
// Meteor.methods({
//     addMessage(text){
//         let message = {
//             time: new Date(),
//             text: text
//         }
//
//         Messages.insert(message)
//     }
// })

/**
 * bootstrap components
 */
const Button = bootstrap.Button
const FormGroup = bootstrap.FormGroup
const ControlLabel = bootstrap.ControlLabel
const FormControl = bootstrap.FormControl
const Panel = bootstrap.Panel
const ListGroup = bootstrap.ListGroup
// const Grid = bootstrap.Grid
// const Row = bootstrap.Grid
// const Col = bootstrap.Col

class Chat extends Component{
    constructor(){
        super()
    }

    componentDidMount(){
        // console.log("componentDidMount")
        // console.log("chat: ", document.getElementById("chatUsername").style)
        // console.log(document.getElementById("chatUsername") === document.activeElement)
        // console.log(document.getEventListeners(document.getElementById("chatUsername")))
    }

    sendMessage(){
        event.preventDefault()
        console.log("Hello World")
        var username = document.getElementById("chatUsername").value
        var messageInput = document.getElementById("chatMessageInput")
        // console.log(document.getElementById("chatUsername").value)
        // console.log(document.getElementById("chatMessageInput").value)
        console.log("Username: ", username)
        console.log("Message: ", messageInput.value)

        if(username == "" || messageInput.value == ""){
            console.log("Insert some text in username and message")
            return
        }else {
            let message = username + ": " + messageInput.value
            // Meteor.call("addMessage", message)
            console.log("Message: ", message)

            Messages.insert({
                time: new Date(),
                message
            })

            messageInput.value = ""
        }
    }

    // loadMessage(){
    //     return
    //         messages: Messages.find({}).fetch()
    // }

    renderMessages(){
        //
        return this.props.messages.map((message) => {
            console.log("message", message)
            return <Message key={message._id} message={message} />
        })
    }

    render(){
        return(
            <div id="chatComponent">
                <div id="messageBlock">
                    <ListGroup>{this.renderMessages()}</ListGroup>
                </div>
                <div id="chatInput">
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

                    <Button id="chatSendButton" type="submit" onClick={() => this.sendMessage()}>
                        Send
                    </Button>
                </div>
            </div>
        )
    }
}

Chat.propTypes = {
    messages: PropTypes.array.isRequired
}

export default createContainer(() => {
    return {
        messages: Messages.find({}).fetch()
    }
}, Chat)