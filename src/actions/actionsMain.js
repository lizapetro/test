export function followingLink(name){
  return dispatch=>{
    dispatch({
      type:'OPEN_LINK',
      payload:name
    });
  }
}

export function convert(){
  return dispatch=>{
    function exchange(currency){
      fetch('https://min-api.cryptocompare.com/data/price?fsym='+currency+'&tsyms=USD')
      .then(res=>res.json())
      .then(res=>{
        dispatch({
          type:'EXCHANGE_RATES',
          payload:{res:res.USD,currency:currency}
        });
      });
    }
    exchange('BTC');
    exchange('ETH');
    exchange('XRP');
  }
}
