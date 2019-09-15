export function dataForRequest(term,wallet){
  let time=new Date();
  let hour=time.getHours()-1;
  let day=time.getDate()-1;
  let link,data,count;
  if (term==='day'){
    link='https://min-api.cryptocompare.com/data/v2/histohour?fsym='+wallet+'&tsym=USD&limit='+hour;
    data=['Time','Sum'];
    count=hour+1;
  }
  if (term==='month'){
    link='https://min-api.cryptocompare.com/data/v2/histoday?fsym='+wallet+'&tsym=USD&limit='+day;
    data=['Data','Sum'];
    count=day+1;
  }
  if (term==='week'){
    link='https://min-api.cryptocompare.com/data/v2/histoday?fsym='+wallet+'&tsym=USD&limit='+7;
    data=['Data','Sum'];
    count=8;
  }
  return {
    data:[data],
    link:link,
    count:count
  }
}
