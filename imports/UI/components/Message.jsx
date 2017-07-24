import React, {Component, PropTypes} from 'react'
import * as bootstrap from 'react-bootstrap'

// let listGroup = bootstrap.ListGroup
let ListGroupItem = bootstrap.ListGroupItem

export default class Message extends Component{
    formatTime(time){
        console.log("time: ", time.getHours + ":" + time.getMinutes())
        return time.getHours() + ":" + time.getMinutes()
    }

    render(){
        return (
            <ListGroupItem key={this.props.message.key}>
                {this.formatTime(this.props.message.time)} - {this.props.message.message}
            </ListGroupItem>
        )
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}