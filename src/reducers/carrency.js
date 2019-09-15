const stateInitial={};

export function carrencyReducer(state=stateInitial,action){
  if (action.type==='EXCHANGE_RATES'){
    return {...state,[action.payload.currency]:action.payload.res};
  }
  return state;
}
