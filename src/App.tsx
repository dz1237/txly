import React from 'react';
import logo from './assets/img/logo.svg';
import robots from './mockdata/robots.json'
import Robot from './components/Robot';
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'
function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="" className= {styles.appLogo}/>
        <h1>qweqwdsafwedfwerqww</h1>
      </div>
      <ShoppingCart/>
      <div className={styles.robotList}>
        {robots.map(r => <Robot id={r.id} email={r.email} name={r.name} />)}
      </div>
    </div>
  );
}

export default App;
