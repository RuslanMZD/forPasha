import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {BrowserRouter,withRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import View from "./components/View";
import Admin from "./components/Admin";
import Header from "./components/Header";
import './App.css';

const App=()=>{




return(
  <div className='app-wrapper'>
 <BrowserRouter>
    <Header/>
    <Navbar />
 <div  className='app-wrapper-content'>

   <Route path="/View" render={()=><View/>}/>
   <Route path="/Admin" render={()=><Admin/>}/>

</div>
 
 
 
 </BrowserRouter>
</div>
)


}


 export default App;