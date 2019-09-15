const stateInitial={};

export function carrencyReducer(state=stateInitial,action){
  console.log('action.payload',action.payload);
  if (action.type==='EXCHANGE_RATES'){
    return {...state,[action.payload.currency]:action.payload.res};
  }
  return state;
}
