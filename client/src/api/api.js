import * as axios from "axios";


export const API={




     getClient(){
       return  axios(`api/client`).then(res=>res.data).then(res=>{
          return res
        })
        
        }


   




}

