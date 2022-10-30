import React from "react";


export class Login extends React.Component {

state = {
    username: '',
    password: '',
    remember: false,
    loginButtonState: true
}

handleChange = (event) => {
    const name = event.target.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
    [name]: value,
    })
    this.setState((state) => {
    return {
        loginButtonState: !state.username.trim() || !state.password
    }
    })
}

handleReset = () => {
    this.setState({ username: '',
password: '',
    remember: false,
    loginButtonState: true
    })
}

handleLogin = () => {
    this.props.onLogin(this.state)
}

render() {
    return(
        <div>
            <label for="username">Username </label>
            <input id="username" name='username' onChange={this.handleChange} value={this.state.username} />
            <label for="password">password </label>
        <input name='password' id='password' type='password' onChange = { this.handleChange } value = { this.state.password } />
        <input name='remember' type='checkbox' onChange = { this.handleChange } checked = { this.state.remember } />

        <button name='login' type = 'button' onClick = { this.handleLogin } disabled = { this.state.loginButtonState } >Login</button>

        <button name = 'reset' type = 'button' onClick = { this.handleReset } >Reset</button>
    </div>
    )
}
}

Login.defaultProps = {
onLogin: ()=>{console.error('Missing login function')}
}