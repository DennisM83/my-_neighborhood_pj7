import React, { Component } from 'react'

class Error extends Component {

    state = {
        hasAnError: false
    }

    componentDidCatch() {
        this.setState({ hasAnError: true })
    }
    render() {
        if (this.setState.hasAnError) {
            return <h2>Oops! Looks like something went wrong with the map!</h2>
        } 
        return this.props.children
    }
}

export default Error;