import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {followingLink} from '../actions/actionsMain';
import {convert} from '../actions/actionsMain';
import 'crypto-icons/styles.css';
import 'crypto-icons/font.css';
import search from '../06magnify.png';

class Main extends Component{
    handleClick(event){
      this.props.followingLink(event.currentTarget.name);
    }
    componentDidMount(){
      this.props.convertCarrency();
    }
    render(){
      const {wallets,carrency}=this.props;
      let sum=0;
      wallets.forEach(wallet=>sum+=wallet.sum*carrency[wallet.name]);
    return(
    <div className='main'>
      <header>
        <div className='searching'>
        <img src={search}/>
        </div>
        <div className='call'></div>
      </header>
      <main>
        <div className='info'>
          <p>Your total balance</p>
          <h1>
            &#x24;{sum.toFixed(2)}
          </h1>
        </div>
        <ul className='list'>
        {
          wallets.map(wallet=>{
            return(
              <Link key={wallet.key} className='link' name={wallet.name} to='/Wallet' onClick={this.handleClick.bind(this)}>
                <li className={wallet.name}>
                  <div className={"icon icon-"+wallet.name.toLowerCase()}></div>
                  <div className='name'>
                    <p className='font'>{wallet.name}</p>
                    <p>{wallet.allName}</p>
                  </div>
                  <div className='money'>
                    <p className='font'>{wallet.sum.toFixed(4)}</p>
                    <p>{(carrency[wallet.name]*wallet.sum).toFixed(2)}&#x24;</p>
                  </div>
                </li>
              </Link>
              )
          }
          )
        }
        </ul>
      </main>
    </div>)
    }
}

const mapStatetoProps=(state,ownProps)=>{
  return ({
    wallets:state.wallets,
    carrency:state.carrency,
  })
}

const mapDispatchtoProps=dispatch=>{
  return{
    followingLink:name=>dispatch(followingLink(name)),
    convertCarrency:()=>dispatch(convert()),
  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Main);
