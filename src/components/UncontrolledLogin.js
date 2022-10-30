import React from "react";



export class UncontrolledLogin extends React.Component {

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked
    
    console.log({username,password,remember})
    }


    render() {
        return (
            <>
                <h3>UncontrolledLogin</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <input
                        name="username"
                    />
                    <input
                        name="password"
                        type="password"
                    />
                    <input
                        name="remember"
                        type="checkbox"
                    />
                    <button type="submit">
                        Submit
                    </button>
                    <button type="reset">
                        Reset
                    </button>
                </form>
            </>
        )
    }
}