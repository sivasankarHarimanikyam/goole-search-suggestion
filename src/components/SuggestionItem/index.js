import './index.css'

const SuggestionItem = props => {
  const {searchDetails, onSuggestion} = props
  const {suggestion} = searchDetails
  const onSelect = () => {
    onSuggestion(suggestion)
  }
  return (
    <li className="list">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onSelect}
      />
    </li>
  )
}

export default SuggestionItem
