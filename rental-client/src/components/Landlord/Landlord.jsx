import React, { useEffect, useState } from 'react';
import axios from 'axios';

import  './landlord.css'





export default function Landlord() {

const [landlord, setLandlord] = useState([]);

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

function handleDelete(id){
  axios.delete(`http://localhost:5000/api/landlord/delete/${id}`)

}

            return(
              <div className='grid_container'>
              <header className='header'>
                <div className='menu_icon'>
                 <span className="material-icons-outlined">menu</span>
  
                 <div className='header_left'>
                 <span className="material-icons-outlined">search</span>
                 
                 </div>
  
                 <div className='header_right'>
                  <span className="material-icons-outlined">notifications</span>
                  <span className="material-icons-outlined">email</span>
                  <span className="material-icons-outlined">account_circle</span>
                 </div>
  
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
              <button type="button" class="btn btn-primary" style={{marginTop: '1rem', marginLeft:'1rem'}}>Add Landlord</button>
                
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
                 <tr key='_id'>
            <th scope="row">{row.idnumber}</th>
             <td>{row.firstname}</td>
             <td>{row.lastname}</td>
             <td>{row.email}</td>
             <td>
              <button type="button" className="btn btn-success" style={{marginRight:'1rem'}}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={()=> handleDelete(row._id)}>Delete</button>
             </td>
          </tr>
      
        
         </>
              ))
     }
     
     </tbody>
    </table>
      </main>
          </div>
            )
        
    
}