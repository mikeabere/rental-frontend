import React, { useEffect, useState } from "react";
import './houses.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import AddHouseModal from "../AddHouseModal";
export default function Houses() {

  const [houses,setHouses] = useState([]);


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
            <AddHouseModal />
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
              houses.map(row =>(
           <tr>
            <th scope="row">{row.propertynumber}</th>
             <td>{row.location}</td>
             <td>{row.residencetype}</td>
             <td>{row.totalunits}</td>
             <td>
              <button type="button" class="btn btn-success" style={{marginRight:'1rem'}}>Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
             </td>
          </tr>
       
       ))
      }
     </tbody>
    </table>
      </main>
           
          
        </div>
    

    )
}