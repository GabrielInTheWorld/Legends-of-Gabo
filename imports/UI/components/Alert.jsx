import React, {PropTypes} from 'react'

export default class Alert extends React.Component{
    render(){
        return(
            <div
                class={"alert alert-" + this.props.type}
                role="alert">
                {this.props.text}
            </div>
        )
    }
}

Alert.propTypes = {
    type: PropTypes.string.isRequired
}