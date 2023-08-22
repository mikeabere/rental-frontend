import React, { useEffect, useState } from "react";
import './houses.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddHouseModal from "../AddHouseModal";

export default function Houses() {

  const [houses,setHouses] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editingId, setEditingId] = useState(null); // Track the ID of the house being edited
  const [editModalVisible, setEditModalVisible] = useState(false);


  function handleAddData(data) {
    axios.post('http://localhost:5000/api/house/add', data)
      .then((response) => {
        // Assuming `houses` is the array holding all houses' data on the frontend
      // Update `houses` with the new cleaner data received from the response
      setHouses( [...houses, response.data]);
      setShowDeleteModal(false);
      })
     
      .catch((error) => {
        console.error(error);
      });
      
  }

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5000/api/houses');
        setHouses(result.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  },[])



  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/house/${deletingId}`);
      setHouses(houses.filter(row => row._id !== deletingId));
      setDeletingId(null);
      setShowDeleteModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (_id) => {
    setEditingId(_id);
    setEditModalVisible(true);
  };

  const handleSave = async () => {
    // Perform the update request using axios
    axios
      .put(`http://localhost:5000/api/house/edit/${editingId._id}`, editingId)
      .then((response) => {
        const updatedData = houses.map((house) => {
          if (house._id === editingId._id) {
            return response.data;
          }
          return house;
        });
        setHouses(updatedData);
        
        setEditingId(null);
      })
      .catch((error) => {
        console.error(error);
      });
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
                <span className="material-icons-outlined">person_outline</span><Link style={{textDecoration: 'none', color: 'white'}} to='./Landlord'>Landlord</Link>
                </li>
                <li className='sidebar_list_item'>
                <span className="material-icons-outlined">groups</span>Tennants
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
              <AddHouseModal 
              onSubmit={handleAddData}
              
              />
               
          

              <table className="table" style={{width: '800px',
               marginTop:'4rem', marginLeft:'3rem',
               textAlign:'center'}}
               >
              <thead>
               <tr>
                <th scope="col">#</th>
                <th scope="col">Location</th>
                <th scope="col">Landlord</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
              </tr>
           </thead>
          <tbody>
            {
              houses.map(row =>(
           <tr key={row._id}>
           <th scope="row">{row.propertyNumber}</th>
           <td>{row.houseLocation}</td>
           <td>{row.landLordName}</td>
           <td>{row.houseType}</td>
           <td>
          
               <>
                 <button className="btn btn-success" style={{marginRight:'10px'}} onClick={() => handleEdit(row._id)}>Edit</button>
                 <button className="btn btn-danger" onClick={() => {
                   setDeletingId(row._id);
                   setShowDeleteModal(true);
                  }}>Delete</button>
               </>
         

             </td>
          </tr>
       
       ))
      }
     </tbody>
     {showDeleteModal && (
      <Modal 
       title="Confirm Delete"
       show={showDeleteModal}
       >
      <p style={{color:'black'}}>Are you sure you want to delete this house?</p>
      <div className="modal-content" style={{display:'flex',flexDirection:'row',
        gap:'10px',justifyContent:'flex-end',padding:'10px'}}>
      <button className="btn btn-danger" onClick={handleDelete}>Yes</button>
      <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>No</button>
      </div>
    </Modal>
     )}
    </table>
      </main>
           
      <Modal
       
        show={editModalVisible}
        onOk={handleSave}
        
        onCancel={handleEditModalCancel}
        
      >
        {editingId && (
          <Form>
              <Modal.Header closeButton>
               <Modal.Title>Edit House</Modal.Title>
             </Modal.Header>
             <Modal.Body>
            <Form.Group>
            <Form.Label>House Name</Form.Label>
              <Form.Control
                value={editingId.houseName}
                onChange={(e) =>
                  setEditingId((prevData) => ({
                    ...prevData,
                    houseName: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group>
            <Form.Label>property Number</Form.Label>
              <Form.Control
                value={editingId.propertyNumber}
                onChange={(e) =>
                  setEditingId((prevData) => ({
                    ...prevData,
                    propertyNumber: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group>
            <Form.Label>house Location</Form.Label>
              <Form.Control
                value={editingId.houseLocation}
                onChange={(e) =>
                  setEditingId((prevData) => ({
                    ...prevData,
                    houseLocation: e.target.value,
                  }))
                }
              />
            </Form.Group>
            <Form.Group>
            <Form.Label>landLordName</Form.Label>
              <Form.Control
                value={editingId.landLordName}
                onChange={(e) =>
                  setEditingId((prevData) => ({
                    ...prevData,
                    landLordName: e.target.value,
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
          <Button variant="primary" type='submit' onClick={handleSave}>
            Submit
          </Button>
        </Modal.Footer>
          </Form>
        )}
      </Modal>
        </div>
    

    )
}