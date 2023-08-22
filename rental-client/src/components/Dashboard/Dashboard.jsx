import React from 'react';
import   './dashboard.css'
//import Chart from "chart.js/auto";
//import { Bar } from "react-chartjs-2";
import {Link} from "react-router-dom";




export default function Dashboard() {


 
 

 
   

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
                <span className="material-icons-outlined">person_outline</span><Link style={{textDecoration: 'none', color: 'white'}} to='/Landlord'>Landlord</Link>
                </li>
                <li className='sidebar_list_item'>
                <span className="material-icons-outlined">groups</span><Link style={{textDecoration: 'none', color: 'white'}} to='/Tennants'>Tennants</Link>
                </li>
                <li className='sidebar_list_item'>
                <span className="material-icons-outlined">apartment</span><Link style={{textDecoration: 'none', color: 'white'}} to='/Houses'>Houses</Link>
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

            <main className='main_section'>
              <div className='main_title'>
                <h2>DASHBOARD</h2>
              </div>
              <div className='main_cards'>

                <div className='card'>
                 <div className='card_inner'>
                  <h3>LANDLORDS</h3>
                  <span class="material-icons-outlined">person</span>
                 </div>
                 <h1>2</h1>
                </div>
                <div className='card'>
                 <div className='card_inner'>
                  <h3>TENNANTS</h3>
                  <span class="material-icons-outlined">group</span>
                 </div>
                 <h1>24</h1>
                </div>
                <div className='card'>
                 <div className='card_inner'>
                  <h3>HOUSES</h3>
                  <span class="material-icons-outlined">apartment</span>
                 </div>
                 <h1>5</h1>
                </div>
                <div className='card'>
                 <div className='card_inner'>
                  <h3>PAYMENT</h3>
                  <span class="material-icons-outlined">credit_card</span>
                 </div>
                 <h1>20000</h1>
                </div>

              </div>
              
             

            </main>
        </div>
    )
}