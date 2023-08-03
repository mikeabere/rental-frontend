import React from 'react';

import  './landlord.css'





export default function Landlord() {


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
                  <span className="material-icons-outlined">home</span>Smart Hama
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
              <table className="table" style={{width: '800px',marginTop:'4rem', marginLeft:'3rem'}}>
              <thead>
               <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Action</th>
              </tr>
           </thead>
          <tbody>
           <tr>
            <th scope="row">1</th>
             <td>Mark</td>
             <td>Otto</td>
             <td>@mdo</td>
             <td>
              <button type="button" className="btn btn-success" style={{marginRight:'1rem'}}>Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
             </td>
          </tr>
          <tr>
           <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <button type="button" className="btn btn-success" style={{marginRight:'1rem'}}>Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
             </td>
         </tr>
        <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>Bird</td>
         <td>@twitter</td>
         <td>
              <button type="button" className="btn btn-success" style={{marginRight:'1rem'}}>Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
             </td>
       </tr>
       <tr>
           <th scope="row">4</th>
            <td>Mike</td>
            <td>Abere</td>
            <td>@mike</td>
            <td>
              <button type="button" className="btn btn-success" style={{marginRight:'1rem'}}>Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
             </td>
         </tr>
     </tbody>
    </table>
      </main>
          </div>
            )
        
    
}