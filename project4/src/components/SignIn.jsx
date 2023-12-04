import { useState } from 'react'
import { SignInUser } from './services/Auth'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ModalBody, ModalFooter, ModalHeader, Toast, ToastBody } from 'react-bootstrap';
import Register from './Register'

export default function SignIn(props){
    const [show, setShow] = useState(true)
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({ email: '', password: '' })

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }
    
    //   const handleClose = () => {
    //     if ( props.user && props.authenticted ) {
    //          setShow(false);
    //   } else{
    //     <Toast><ToastBody>Oops... You haven't signed in!</ToastBody></Toast>

    //     console.log("You must sign-in")
    //   }
    // }



//USE THIS HANDLE CLOSE FOR WORKING ON APP ONLY... FOR IMPLEMENTATION USE HANDLE SUBMIT ABOVE
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

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
            <Modal 
            className='sign-in-modal'
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
                <ModalHeader className='sign-in-modal-header' closeButton></ModalHeader>
                <div className="card-overlay centered">
                    <form className="col" onSubmit={handleSubmit}>
                    <ModalBody className='sign-in-modal-body'>
                        <div className="input-wrapper">
                            <div>
                                <label htmlFor="email" id="email-label">Username:</label>
                            </div>
                            <input
                            id="email-input"
                            onChange={handleChange}
                            name="email"
                            // type="email"
                            type="input"
                            // placeholder="example@example.com"
                            placeholder="example123"
                            value={formValues.email}
                            required
                            />
                        </div>

                        <div className="input-wrapper">
                            <div>
                                <label htmlFor="password">Password:</label>
                            </div>
                            <input
                            id="password-input"
                            onChange={handleChange}
                            type="password"
                            name="password"
                            value={formValues.password}
                            required
                            />
                        </div>

                        <div>
                            <p>Don't have an account?</p>
                            <Register/>
                            </div>
                    </ModalBody>
                    <ModalFooter>
                    <button disabled={!formValues.email || !formValues.password}>
                        Sign In
                    </button>
                    </ModalFooter>
                    </form>
                </div>

      </Modal>
    </div>
    )
}