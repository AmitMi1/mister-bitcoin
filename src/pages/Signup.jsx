import React, { Component } from 'react'
import { userService } from '../services/userService'

export class Signup extends Component {
    constructor(props) {
        super(props)

        this.username = React.createRef()
    }
    componentDidMount() {
        // console.log(this.username);
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(this.username);
    }

    signup = () => {
        console.log(this.username.current);
        console.log(this.username.current.value);
        if (!this.username.current.value) return
        const name = this.username.current.value.trim()
        if (!name) return
        userService.signUp(name)
        this.props.history.push('/')
    }
    render() {
        // const { username } = this.state
        return (
            <section className="signup">
                <h2>Please enter your name</h2>
                <input type="text" name="" id="" ref={this.username} />
                <button onClick={this.signup}>Sign up</button>
            </section >
        )
    }
}

export default Signup