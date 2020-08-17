import React,{Component} from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomSelect from './components/CustomSelect';


import './App.css';



class  App extends Component {

  


  render(){

 const   select={
      width:'25%',
      hight:'40%'
    }
  
  return (
    <div >
    
   <NavBar/>
   <CustomSelect style={select}/>
   <CustomSelect style={select}/>
   <CustomSelect style={select}/>
   <CustomSelect style={select}/>

  
    
    </div>
  );
  
  }
}
export default App;
