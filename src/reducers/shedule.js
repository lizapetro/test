const stateInitial={
  isLoading:false,
  term:'',
  data:[]
};

export function sheduleReducer(state=stateInitial,action){
  if (action.type==='LOADING_SHEDULE'){
    return {...state,isLoading:true}
  }
  if (action.type==='READY_SHEDULE'){
    return {
      isLoading:true,
      term:action.payload.term,
      data:action.payload.data,
    }
  }
  return state;
}
