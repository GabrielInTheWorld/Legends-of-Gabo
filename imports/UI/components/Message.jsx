import React, {Component, PropTypes} from 'react'
import * as bootstrap from 'react-bootstrap'

let listGroup = bootstrap.ListGroup
let groupItem = bootstrap.ListGroupItem

export default class Message extends Component{
    formatTime(time){
        console.log("time: ", time.getHours + ":" + time.getMinutes())
        return time.getHours() + ":" + time.getMinutes()
    }

    render(){
        return (
            <li key={this.props.message.key}>
                {this.formatTime(this.props.message.time)} - {this.props.message.message}
            </li>
        )
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}