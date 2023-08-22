import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddHouseModal() {
  
  const [houseName, setHouseName] = useState('');
  const [propertyNumber, setPropertyNumber] = useState();
  const [houseLocation, setHouseLocation] = useState('');
  const [landLordName, setLandLordName] = useState('');
  const [houseRent, setHouseRent] = useState();
  const [houseType, setHouseType] = useState('');
  const [houseDesc, setHouseDesc] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  return (
    <>
      <Button variant="primary" style={{marginTop: '1rem', marginLeft:'1rem'}} onClick={handleShow}>
        Add House
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Form  className='signup-form' >
        <Modal.Header closeButton>
          <Modal.Title>House Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        
          <div className='signup-one'>
      <Form.Group className="mb-3" controlId="formBasicHousename">
        <Form.Label>House Name</Form.Label>
        <Form.Control type="text" placeholder="House Name" value={houseName} onChange={(e)=> setHouseName(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPropertynumber">
        <Form.Label>Property Number</Form.Label>
        <Form.Control type="number" placeholder="Property Number" value={propertyNumber} onChange={(e)=> setPropertyNumber(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicHouselocation">
        <Form.Label>House Location</Form.Label>
        <Form.Control type="text" placeholder="House Location" value={houseLocation} onChange={(e)=> setHouseLocation(e.target.value)}/>
      </Form.Group>
      </div>
      <div className='signup-two'>
      <Form.Group className="mb-3" controlId="formBasicLandlordname">
        <Form.Label>Landlord Name</Form.Label>
        <Form.Control type="text" placeholder="Landlord Name" value={landLordName} onChange={(e)=> setLandLordName(e.target.value)}/>
      </Form.Group>
      
     
     

      <Form.Group className="mb-3" controlId="formBasicHouserent" >
        <Form.Label>House Rent</Form.Label>
        <Form.Control type="number" placeholder="House Rent" value={houseRent} onChange={(e)=> setHouseRent(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicHousetype">
        <Form.Label>House Type</Form.Label>
        <Form.Control type="text" placeholder="House Type" value={houseType} onChange={(e)=> setHouseType(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicHousedesc">
        <Form.Label>House Desc</Form.Label>
        <Form.Control type="text" placeholder="House Desc" value={houseDesc} onChange={(e)=> setHouseDesc(e.target.value)}/>
      </Form.Group>
      </div>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddHouseModal;