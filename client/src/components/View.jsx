import React from 'react';
import axios from 'axios';
import {setUsersActionCreator,getUsersThunkCreator,setProcentsActionCreator} from "../redux/reducer/view-reducer";
import {connect} from 'react-redux';
import User from "./User";

    class View extends React.Component{
constructor(props){
    super(props);



}

getClient=()=>{
    axios(`api/client`).then(res=>res.data).then(res=>{
    
        let clients=res.map((data)=>data.name);
     

        this.props.setUsersActionCreator(res) 
       
        // console.log(res)
    })
    
    }



 componentDidMount(){

 this.props.getUsersThunkCreator();


 }


  
     


render(){



    return(
        <div>
            <User {...this.props}/>

      
       </div>



    )


}




    }

    
    let mapStateToProps=(state)=>{
        return{
            users:state.view.users,
            procent:state.view.procent
        }
    }

    
     export default connect(mapStateToProps,{setUsersActionCreator,getUsersThunkCreator,setProcentsActionCreator})(View);