import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AddLandlordModal() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" style={{marginTop: '1rem', marginLeft:'1rem'}} onClick={handleShow}>
        Add Landlord
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Landlord Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form className='signup-form'>
          <div className='signup-one'>
      <Form.Group className="mb-3" controlId="formBasicFirstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Firstname" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Lastname" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter Phone" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
      </Form.Group>
      </div>
      <div className='signup-two'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      </Form.Group>
      
     
     

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
      </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddLandlordModal;