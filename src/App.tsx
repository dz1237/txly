import React from 'react';
import logo from './assets/img/logo.svg';
import robots from './mockdata/robots.json'
import Robot from './components/Robot';
import styles from './App.module.css'
import ShoppingCart from './components/ShoppingCart'
interface Props{}
interface State{
  robotGallery:any
}
class App extends React.Component<Props, State> {
  constructor(props:any) {
    super(props);
    this.state = {
      robotGallery:[]
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data=>this.setState({robotGallery:data}))
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="" className={styles.appLogo} />
          <h1>qweqwdsafwedfwerqww</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r:any)=> <Robot id={r.id} email={r.email} name={r.name} />)}
        </div>
      </div>
    );
  }
}

export default App;
