import './index.css'

const DenominationItem = props => {
  const {ItemDetails, doOperation} = props
  const {value, id} = ItemDetails
  const Onclicking = () => {
    doOperation(id)
  }

  return (
    <button className="button" type="button" onClick={Onclicking}>
      {value}
    </button>
  )
}
export default DenominationItem
