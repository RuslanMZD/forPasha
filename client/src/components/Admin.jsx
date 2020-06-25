import React from 'react';
import axios from 'axios';
const Admin=(props)=>{

let ssylkaName = React.createRef();
let ssylkaTelegram = React.createRef();
let ssylkaDepozit = React.createRef();

  const addUser=()=>{
    let name = ssylkaName.current.value;
    let telegram =ssylkaTelegram.current.value;
    let depozit =ssylkaDepozit.current.value;
    axios.post('api/client',{name,telegram,depozit}).then(res=>{
      console.log(res)
    });
  }




    return(
      <div>
          
      <label htmlFor="name">Имя</label>
      <input type="text" ref={ssylkaName} id="name"/>
      <label htmlFor="telegream">Телега</label>
      <input type="text" id="telegream" ref={ssylkaTelegram}/>
      <label htmlFor="depozit">Депозит</label>
      <input type="number" id="depozit" ref={ssylkaDepozit}/>
      <button id="btn" onClick={addUser}>Добавить</button>

      </div>
    )
    
    
    }
    
    
     export default Admin;