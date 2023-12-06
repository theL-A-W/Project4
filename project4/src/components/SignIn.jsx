import { useState } from 'react';
import { SignInUser } from './services/Auth';
import { useUser } from '../../Context/userContext';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap';
import Register from './Register';

export default function SignIn() {
  const { userState, setUser } = useUser();
  const [show, setShow] = useState(true);
  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = await SignInUser(formValues);
      console.log('Response from server:', payload);

      if (payload && payload.user && payload.token) {
        console.log('Logged in successfully:', payload);
        setFormValues({ username: '', password: '' });
        setUser(payload.user.username, payload.token);
        console.log('User state after setting:', userState);
        handleClose();
      } else {
        console.log('Login failed. Payload is undefined or incomplete.');
      }
    } catch (error) {
      console.log('Error during login', error);
    }
  };

  console.log('User state before setting:', userState);

  return (
    <div className="signin col">
      <Modal
        className='sign-in-modal'
        show={show}
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
                  type="input"
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
                <Register />
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
  );
}
