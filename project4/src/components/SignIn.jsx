import { useState } from 'react'
import { SignInUser } from './services/Auth'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SignIn(props){
    const [show, setShow] = useState(true)
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await SignInUser(formValues)
        setFormValues({ email: '', password: '' })
        props.setUser(payload)
        props.toggleAuthenticated(true)
        navigate('/')
      }

    return(
        <div className="signin col">
            <Modal className='sign-in-modal'>
                <div className="card-overlay centered">
                    <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        value={formValues.email}
                        required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={formValues.password}
                        required
                        />
                    </div>
                    <button disabled={!formValues.email || !formValues.password}>
                        Sign In
                    </button>
                    </form>
                </div>
      </Modal>
    </div>
    )
}