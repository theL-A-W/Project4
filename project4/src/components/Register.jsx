import { useState} from 'react'
import { RegisterUser } from './services/Auth'
import { useNavigate } from 'react-router-dom'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'

export default function Register(){
  const [show, setShow] = useState();
    let navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    
      const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        await RegisterUser({
            name: formValues.name,
            email: formValues.email,
            password: formValues.password
        })
        setFormValues({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          })
          navigate('/signin')
      }
      const handleShow = () => setShow(true);
      const handleClose = () => setShow(false);

    return(
        <div className="signin col">
          <Button id='register-button' onClick={handleShow}>Sign-Up</Button>
          <Modal            
          className='register-modal'
            show={show}
            backdrop="static"
            keyboard={false}>
              <ModalHeader className='sign-in-modal-header' closeButton></ModalHeader>
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
          <ModalBody className='sign-in-modal-body'>
            <div className="input-wrapper">
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="John Smith"
                value={formValues.name}
                required
              />
            </div>
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
            <div className="input-wrapper">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
              />
            </div>
            </ModalBody>
            <ModalFooter>
            <Button id='close-button' onClick={handleClose}>Close</Button>
            <button
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              Create User
            </button>
            </ModalFooter>
          </form>
          
        </div>
        
        </Modal>
      </div>
    )
}