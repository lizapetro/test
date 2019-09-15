const stateInitial={
  name:'',
  term:'day'
}

export function activeWalletReducer(state=stateInitial,action){
  if (action.type==='OPEN_LINK'){
    return {
      name:action.payload,
      term:'day'
    }
  }
  if (action.type==='CHANGE_WALLET'){
    return {
      name:action.payload,
      term:'day'
    }
  }
  return state;
}
