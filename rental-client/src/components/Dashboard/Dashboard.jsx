import React from "react";
import styles from './styles.module.css'




export default function Dashboard(){


    return(
        <div className={styles.grid_container}>
            <header className={styles.header}>
              <div className={styles.menu_icon}>
               <span className="material-icons-outlined">menu</span>

               <div className={styles.header_left}>
               <span className="material-icons-outlined">search</span>
               
               </div>

               <div className={styles.header_right}>
                <span className="material-icons-outlined">notifications</span>
                <span className="material-icons-outlined">email</span>
                <span className="material-icons-outlined">account_circle</span>
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
                <span class="material-icons-outlined">person_outline</span>Landlord
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

            <main className={styles.main_section}>
              <div className={styles.main_title}>
                <h2>DASHBOARD</h2>
              </div>
              <div className={styles.main_cards}>

                <div className={styles.card}>
                 <div className={styles.card_inner}>
                  <h3>LANDLORDS</h3>
                  <span class="material-icons-outlined">inventory_2</span>
                 </div>
                 <h1>2</h1>
                </div>
                <div className={styles.card}>
                 <div className={styles.card_inner}>
                  <h3>TENNANTS</h3>
                  <span class="material-icons-outlined">inventory_2</span>
                 </div>
                 <h1>24</h1>
                </div>
                <div className={styles.card}>
                 <div className={styles.card_inner}>
                  <h3>HOUSES</h3>
                  <span class="material-icons-outlined">inventory_2</span>
                 </div>
                 <h1>5</h1>
                </div>
                <div className={styles.card}>
                 <div className={styles.card_inner}>
                  <h3>PAYMENT</h3>
                  <span class="material-icons-outlined">inventory_2</span>
                 </div>
                 <h1>20000</h1>
                </div>

              </div>
            </main>
        </div>
    )
}