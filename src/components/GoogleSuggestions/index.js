// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchItem: ''}

  onChangeInput = event => {
    this.setState({searchItem: event.target.value})
  }

  updateSearch = suggestion => {
    this.setState({searchItem: suggestion})
  }

  render() {
    const {searchItem} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchItem.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="image"
        />
        <div className="card-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              className="input"
              placeholder="Search Google"
              type="search"
              value={searchItem}
              onChange={this.onChangeInput}
            />
          </div>
          <ul>
            {searchResult.map(each => (
              <SuggestionItem key={each.id} searchDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
