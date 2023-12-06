
import { useState } from 'react';
import { SignInUser } from './services/Auth';
import { useUser } from '../../Context/userContext'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import Register from './Register';

export default function SignIn() {
//   const { setUser, logout } = useUser()
  const [show, setShow] = useState(true);
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const { userState: { token }, setUser } = useUser();
  const handleClose = () => {
    setShow(false);
  };
//   console.log('User after setting:', useUser()); // Log the user context

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = await SignInUser(formValues)
//       console.log('Logged in successfully:', payload)
//       setFormValues({ username: '', password: '' })
//       setUser(payload.username, payload.token)
//       handleClose()
//     } catch (error) {
//       console.log('Error during login', error)
//     }
//   };
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = await SignInUser(formValues);
      if (payload) {
        console.log('Logged in successfully:', payload);
        setFormValues({ username: '', password: '' });
        setUser(payload.user.username, payload.token);
        handleClose();
      } else {
        console.log('Login failed. Payload is undefined.');
      }
    } catch (error) {
      console.log('Error during login', error);
    }
  };
  return(
            <div className="signin col">
                <Modal 
                className='sign-in-modal'
                show={show}
                // onHide={handleClose}
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
                                name="username"
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
                        <button disabled={!formValues.username || !formValues.password}>
                            Sign In
                        </button>
                        </ModalFooter>
                        </form>
                    </div>
    
          </Modal>
        </div>
        )
    }