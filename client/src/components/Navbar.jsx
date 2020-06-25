import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';

const Navbar=()=>{




return(
<nav className={s.nav}> 
<div className={s.item}>
<NavLink to="/View">ПРОСМОТР</NavLink>
</div>
<div className={s.item}>
<NavLink to="/Admin">ADMINKA</NavLink>
</div>



</nav>


)


}


 export default Navbar;