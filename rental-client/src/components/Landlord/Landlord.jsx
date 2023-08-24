import React, { useEffect, useState } from 'react';
import axios from 'axios';

import  './landlord.css'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddLandlordModal from '../AddLandlordModal';




export default function Landlord() {

const [landlord, setLandlord] = useState([]);
const [deletingId, setDeletingId] = useState(null);
const [editingId,setEditingId] = useState(null);
const [editModalVisible,setEditModalVisible] = useState(false);
const [showDeleteModal, setShowDeleteModal] = useState(false);






useEffect(()=>{
  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/landlords');
      setLandlord(result.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
},[]);

const handleEdit = (house) => {
  setEditingId(house);
  setEditModalVisible(true);
};

const handleSave = async (e) => {
  e.preventDefault();
  // Perform the update request using axios
  axios
    .put(`http://localhost:5000/api/landlord/edit/${editingId._id}`, editingId)
    .then((response) => {
      const updatedData = landlord.map((landlords) => {
        if (landlords._id === editingId._id) {
          return response.data;
        }
        return landlords;
      });
      setLandlord(updatedData);
      setEditModalVisible(false);
      setEditingId(null);
    })
    .catch((error) => {
      console.error(error);
    });
};

const handleDelete = async () => {
  try {
    await axios.delete(`http://localhost:5000/api/landlord/delete/${deletingId}`);
    setLandlord(landlord.filter(row => row._id !== deletingId));
    setDeletingId(null);
    setShowDeleteModal(false);
  } catch (error) {
    console.error(error);
  }
};

const handleEditModalCancel = () => {
  setEditModalVisible(false);
  setEditingId(null);
};
            return(
              <div className='grid_container'>
              <header className='header'>
                <div className='menu_icon'>
                 <span className="material-icons-outlined">menu</span>
                 </div>
                 <div className='header_left'>
                 <span className="material-icons-outlined">search</span>
                 
                 </div>
  
                 <div className='header_right'>
                  <span className="material-icons-outlined">notifications</span>
                  <span className="material-icons-outlined">email</span>
                  <span className="material-icons-outlined">account_circle</span>
                 </div>
  
                
              </header>
              <aside className='sidebar'>
                <div className='sidebar_title'>
                  <div className='sidebar_brand'>
                  <span className="material-icons-outlined">home</span>Keja Smart
                  </div>
                  <span className="material-icons-outlined">close</span>
                </div>
  
                <ul className='sidebar_list'>
                  <li className='sidebar_list_item'>
                  <span className="material-icons-outlined">dashboard</span>Dashboard
                  </li>
                 
                  <li className='sidebar_list_item'>
                  <span className="material-icons-outlined">groups</span>Tennants
                  </li>
                  <li className='sidebar_list_item'>
                  <span className="material-icons-outlined">apartment</span>Houses
                  </li>
                  <li className='sidebar_list_item'>
                  <span className="material-icons-outlined">payment</span>Payment
                  </li>
                  <li className='sidebar_list_item'>
                  <span className="material-icons-outlined">analytics</span>Reports
                  </li>
                  <li className='sidebar_list_item'>
                  <span className="material-icons-outlined">settings</span>Settings
                  </li>
                </ul>
              </aside>
  
              <main>
                
              <AddLandlordModal />
                
              <table className="table" style={{width: '800px',marginTop:'4rem', marginLeft:'3rem', textAlign:'center'}}>
              <thead>
               <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
           </thead>
          <tbody>
            {
              landlord.map(row =>(
                <>
                 <tr key={row._id}>
            <th scope="row">{row.phone}</th>
             <td>{row.firstName}</td>
             <td>{row.lastName}</td>
             <td>{row.email}</td>
             <td>
              <button type="button" className="btn btn-success" style={{marginRight:'1rem'}} onClick={()=> handleEdit(row)}>Edit</button>
              <button className="btn btn-danger" onClick={() => {
                   setDeletingId(row._id);
                   setShowDeleteModal(true);
                  }}>Delete</button>
             </td>
          </tr>
      </>
              ))
     }
     
     </tbody>
     {showDeleteModal && (
      <Modal 
       title="Confirm Delete"
       show={showDeleteModal}
       centered
       >
      <p style={{color:'black'}}>Are you sure you want to delete this landlord?</p>
      <div className="modal-content" style={{display:'flex',flexDirection:'row',
        gap:'10px',justifyContent:'flex-end',padding:'10px'}}>
      <button className="btn btn-danger" onClick={handleDelete}>Yes</button>
      <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>No</button>
      </div>
    </Modal>
     )}
    </table>

    
      </main>
      <Modal show={editModalVisible} onHide={()=>{setEditModalVisible(false);}}>
        {editingId && (
          <Form  onSubmit={handleSave}>
              <Modal.Header closeButton>
               <Modal.Title>Edit Landlord</Modal.Title>
             </Modal.Header>
             <Modal.Body>
            <Form.Group>
            <Form.Label>First Name</Form.Label>
              <Form.Control
                value={editingId.firstName}
                onChange={(e) =>
                  setEditingId((prevData) => ({
                    ...prevData,
                    firstName: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group>
            <Form.Label>Last Name</Form.Label>
              <Form.Control
                value={editingId.lastName}
                onChange={(e) =>
                  setEditingId((prevData) => ({
                    ...prevData,
                    lastName: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group>
            <Form.Label>Phone</Form.Label>
              <Form.Control
                value={editingId.phone}
                onChange={(e) =>
                  setEditingId((prevData) => ({
                    ...prevData,
                    phone: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group>
            <Form.Label>Email</Form.Label>
              <Form.Control
                value={editingId.email}
                onChange={(e) =>
                  setEditingId((prevData) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
            </Form.Group>
            {/* Add more fields as needed */}
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditModalCancel}>
            Close
          </Button>
          <Button variant="primary" type='submit' >
            Submit
          </Button>
        </Modal.Footer>
          </Form>
        )}
      </Modal>
          </div>
            )
        
    
}