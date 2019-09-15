const stateInitial=[];

function configState(key,name,allName,sum){
  stateInitial.push({
    key:key,
    name:name,
    allName:allName,
    sum:sum,
  });
}

configState(1,'BTC','Bitcoin',0.241234523);
configState(2,'ETH','Ethereum',2.6545634);
configState(3,'XRP','Ripple',135.767835);

export function walletsReducer(state=stateInitial,action){
  return state;
}
