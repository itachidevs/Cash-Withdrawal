import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  doOperation = id => {
    const {denominationsList} = this.props
    const withDrawlOption = denominationsList.filter(each => each.id === id)
    const withDrawlAmount = parseInt(withDrawlOption[0].value)
    this.setState(prevState => ({balance: prevState.balance - withDrawlAmount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="cashwithdrawl-container">
          <div className="profile-container">
            <div className="profile-img">S</div>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <div className="balance">
              <p className="balance-heading">Your Balance</p>
              <p className="balance-number">{balance}</p>
            </div>
            <p className="blanace-desc">In Rupees</p>
          </div>
          <div className="withdrawl-container">
            <h1 className="withdrawl-heading">Withdraw</h1>
            <p className="withdrawl-desc">CHOOSE SUM IN (RUPEES)</p>
          </div>
          <div className="sum-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                ItemDetails={eachItem}
                key={eachItem.id}
                doOperation={this.doOperation}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
