// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchDetails, updateSearch} = props
  const {suggestion} = searchDetails

  const onEvent = () => {
    updateSearch(suggestion)
  }

  return (
    <li className="suggestion-list">
      <p>{suggestion}</p>
      <img
        onClick={onEvent}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow"
      />
    </li>
  )
}

export default SuggestionItem
