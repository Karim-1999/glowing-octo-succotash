import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.querySelector('#root'))
export default class UncontrolledLogin extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false
    }

    handleUsernameInputChange = (event) => {
        this.setState({username: event.target.value})
    }

    handlePasswordInputChange = (event) => {
        this.setState({password: event.target.value})
    }

    handleRememberInputChange = (event) => {
        this.setState({remember: event.target.checked})
    }

    resetAll = () => {
        this.setState({
            username: "",
        password: "",
        remember: false
        })
    }

    onLogin = (event) => {
		event.preventDefault()
		console.log(this.state)
	}

    componentDidMount() {
        this.searchInput.focus()
    }

    render() {
        return (
            <div>
                <input ref={inputEl => (this.searchInput = inputEl)} name='username' placeholder='username' value={this.state.username} onChange={this.handleUsernameInputChange}/>
                <input name='password' placeholder='password' type='password' value={this.state.password} onChange={this.handlePasswordInputChange}/>
                <input name='remember' type='checkbox' checked={this.state.remember} onChange={this.handleRememberInputChange}/>
                
                <button type="submit" disabled = {!this.state.username || !this.state.password} onClick={this.onLogin}>LogIn!!</button>
                <button onClick={this.resetAll}>Reset!</button>
            </div>
        )
    }
}

root.render(<UncontrolledLogin />)

