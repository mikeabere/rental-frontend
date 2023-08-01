import React from "react";
import styles from './styles.module.css'





export default function Landlord(){


            return(
                <div className={styles.grid_container}>
                    <header className={styles.header}>
                      <div className={styles.menu_icon}>
                       <span class="material-icons-outlined">menu</span>
        
                       <div className={styles.header_left}>
                       <span class="material-icons-outlined">search</span>
                       
                       </div>
        
                       <div className={styles.header_right}>
                        <span class="material-icons-outlined">notifications</span>
                        <span class="material-icons-outlined">email</span>
                        <span class="material-icons-outlined">account_circle</span>
                       </div>
        
                      </div>
                    </header>
                    <aside className={styles.sidebar}>
                      <div className={styles.sidebar_title}>
                        <div className={styles.sidebar_brand}>
                        <span class="material-icons-outlined">home</span>Smart Hama
                        </div>
                        <span class="material-icons-outlined">close</span>
                      </div>
        
                      <ul className={styles.sidebar_list}>
                        <li className={styles.sidebar_list_item}>
                        <span class="material-icons-outlined">dashboard</span>Dashboard
                        </li>
                        <li className={styles.sidebar_list_item}>
                        <span class="material-icons-outlined">person_outline</span><Link style={{textDecoration: 'none', color: 'white'}} to='/Landlord'>Landlord</Link>
                        </li>
                        <li className={styles.sidebar_list_item}>
                        <span class="material-icons-outlined">groups</span>Tennants
                        </li>
                        <li className={styles.sidebar_list_item}>
                        <span class="material-icons-outlined">apartment</span>Houses
                        </li>
                        <li className={styles.sidebar_list_item}>
                        <span class="material-icons-outlined">payment</span>Payment
                        </li>
                        <li className={styles.sidebar_list_item}>
                        <span class="material-icons-outlined">analytics</span>Reports
                        </li>
                        <li className={styles.sidebar_list_item}>
                        <span class="material-icons-outlined">settings</span>Settings
                        </li>
                      </ul>
                    </aside>
        
                  
                </div>
            )
        
    
}