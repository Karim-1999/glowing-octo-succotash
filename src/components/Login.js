import { useState } from 'react'; 


export function LoginForm() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleInputChange(event) {
        const { name, type, value, checked } = event.target

        setData({
            [name]: type === 'checkbox' ? checked : value
        })
    }

        return (
            <div>
                <input onChange={handleInputChange} value={data.username} name='username' placeholder='username'/>
                <input onChange={handleInputChange} value={data.password} type='password' name='password' placeholder='password'/>
                <input onChange={handleInputChange} value={data.remember} type='checkbox'/>
            </div>
        )
}