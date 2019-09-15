import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getShedule} from '../actions/actionsWallet';
import {Chart} from 'react-google-charts';
import Shedule from './Shedule';
import {changeActiveWallet} from '../actions/actionsWallet';

class Wallet extends Component{
  handleClick(event){
    this.props.changeActiveWallet(event.currentTarget.name);
    this.props.getShedule(this.props.wallet.term,this.props.wallet.name);
  }
  getShedule(event){
    this.props.getShedule(event.target.value,this.props.wallet.name);
  }

  componentDidMount(){
    this.props.getShedule(this.props.wallet.term,this.props.wallet.name);
  }
  render(){


    const {wallet,shedule,wallets}=this.props;
    return(
        <div>
          <header>
            <Link className='back' to='/'>&#8592;</Link>
          </header>
          <div className='list-wallets'>
            <ul className='list'>
            {wallets.map(wallet=>{
                return(
                  <Link key={wallet.key} className='link' name={wallet.name} onClick={this.handleClick.bind(this)}>
                    <li className={wallet.name}>
                      <div className={"icon icon-"+wallet.name.toLowerCase()}></div>
                      <div className='name'>
                        <p className='font'>{wallet.name}</p>
                        <p>{wallet.allName}</p>
                      </div>
                      <div className='money'>
                        <p className='font'>{wallet.sum.toFixed(4)}</p>
                      </div>
                    </li>
                  </Link>
                  )
              })
            }
            </ul>
          </div>
            {
              wallets.map(wal=>{
                if (wal.name===wallet.name){
                  return(
                  <div className='presentation'>
                    <div className={"icon icon-"+wal.name.toLowerCase()}></div>
                    <div className='name'>
                      <p className='font'>{wal.name}</p>
                      <p>{wal.allName}</p>
                    </div>
                    <div className='money'>
                      <p className='font'>{wal.sum}</p>
                    </div>
                  </div>)
                }
              })
            }

          <div className='btn'>
            <button onClick={this.getShedule.bind(this)} value='day' >Day</button>
            <button onClick={this.getShedule.bind(this)} value='week'>Week</button>
            <button onClick={this.getShedule.bind(this)} value='month'>Month</button>
          </div>
            {shedule.isLoading?<Shedule data={shedule.data}/>:<p>Loading</p>}
      </div>
    )
  }
}

const mapStatetoProps=state=>{
  return{
    wallet:state.activeWallet,
    shedule:state.shedule,
    wallets:state.wallets
  }
}

const mapDispatchtoProps=dispatch=>{
  return{
    getShedule:(term,wallet)=>{dispatch(getShedule(term,wallet))},
    changeActiveWallet:name=>dispatch(changeActiveWallet(name)),
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Wallet);
