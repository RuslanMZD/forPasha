import React from "react";
import s from './User.module.css';

const User=(props)=>{

let prosent = React.createRef();

let procentInDay =props.procent;
let summaProc=null;



const changeProcent=(event)=>{
let value = event.target.value
props.setProcentsActionCreator(value)
 console.log(value)

}








let clients=props.users.map((data)=><div >
<span className={s.str}><b>Имя :</b> {data.name}</span> 
<span className={s.str}><b>Телеграм:</b> {data.telegram || "нету"}</span>
<span className={s.str}><b>Сумма Депозита :</b>{data.depozit}</span> 
{ procentInDay>0 ? <span><b>Сумма % в день :</b>{Math.floor((data.depozit/100)*procentInDay)}</span> : <span></span>}




<hr/></div>);

 console.log(props)
return(
<>
<input type="number" placeholder="% in day" onChange={changeProcent} />
{clients}
</>


)


}

export default User;