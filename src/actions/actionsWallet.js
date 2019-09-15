import {dataForRequest} from '../functions';

export function changeActiveWallet(name){
  return dispatch=>{
    dispatch({
      type:'CHANGE_WALLET',
      payload:name
    });
  }
}

export function getShedule(term,wallet){
  return dispatch=>{
    dispatch({
      type:'LOADING_SHEDULE',
      payload:true
    });
      console.log(term);
     let dataForReq=dataForRequest(term,wallet);
     console.log(dataForReq);
     fetch(dataForReq.link)
     .then(res=>res.json())
     .then(res=>{
       let data=res.Data;
       for (let i=0;i<dataForReq.count;i++){
         let time=new Date(data.Data[i].time*1000);
         if (term==='day'){
           dataForReq.data.push([time.getHours(),data.Data[i].open]);
         }
         if (term==='month'||term==='week'){
           dataForReq.data.push([time.getDate(),data.Data[i].open]);
         }
       }
       dispatch({
        type:'READY_SHEDULE',
        payload:{
           data:dataForReq.data,
           term:term
        }
       });
     });
  }
}
