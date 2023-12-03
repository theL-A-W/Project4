import { useState } from 'react'
import { SignInUser } from './services/Auth'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalBody, ModalFooter, ModalHeader, Toast, ToastBody } from 'react-bootstrap';

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
                            <label htmlFor="email" id="email-label">Email</label>
                            <input
                            id="email-input"
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