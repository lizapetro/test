import React,{Component} from 'react';
import {Chart} from 'react-google-charts';

class Shedule extends Component{
  render(){
    console.log(this.props);
    return(
      <Chart
        width={'100%'}
        height={'300px'}
        chartType="AreaChart"
        loader={<div>Loading Chart</div>}
        data={this.props.data}
        options={{
        hAxis: {
          title: 'Time',
        },
        vAxis: {
          format:  '$',
        },
        }}
      />
  )
  }
}

export default Shedule;
