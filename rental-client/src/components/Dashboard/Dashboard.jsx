import React,{useEffect,useState} from 'react';
import   './dashboard.css'
//import Chart from "chart.js/auto";
//import { Bar } from "react-chartjs-2";
import {Link, useNavigate} from "react-router-dom";

import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';
import axios from 'axios';



export default function Dashboard() {
  const [landlordCount, setLandlordCount] = useState(null);
  const [houseCount, setHouseCount] = useState(null);

  const [data, setData] = useState([]);

  const navigate = useNavigate();

// Fetch the count of landlords from the API and update the state
  useEffect(() => {
    fetch("http://localhost:5000/api/landlords/count")
      .then(response => response.json())
      .then(data => setLandlordCount(data.count))
      .catch(error => console.error(error));
  }, []);
   // Fetch the count of Houses from the API and update the state
   useEffect(() => {
    fetch("http://localhost:5000/api/houses/count")
      .then(response => response.json())
      .then(data => setHouseCount(data.count))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/houses');
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const houseNames = data.map((house) => house.houseName);
  const houseValues = data.map((house) => house.propertyNumber);

  const chartData = {
    labels: houseNames,
    datasets: [
      {
        label: 'House Values',
        data: houseValues,
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

function Logout(){
  localStorage.clear();
  navigate('/');
}

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
                <span className="material-icons-outlined">settings</span><Link onClick={Logout} style={{textDecoration: 'none', color: 'white'}} to='/'>Logout</Link>
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
                 <h1>{landlordCount !== null ? landlordCount : "Loading..."}</h1>
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
                 <h1>{houseCount !== null ? houseCount : "Loading..."}</h1>
                </div>
                <div className='card'>
                 <div className='card_inner'>
                  <h3>PAYMENT</h3>
                  <span class="material-icons-outlined">credit_card</span>
                 </div>
                 <h1>20000</h1>
                </div>

              </div>
              
              <Bar data={chartData} options={{ maintainAspectRatio: false }} />
             

            </main>
        </div>
    )
}