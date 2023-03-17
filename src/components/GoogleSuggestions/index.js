import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSuggestion = suggestion => {
    this.setState({searchInput: suggestion}) 
    event.target.value = suggestion
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo-edit"
        />
        <div className="sub-container">
          <div className="search-line">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="logo-edit2"
            />
            <input
              type="search"
              placeholder="Search Engine"
              onChange={this.onSearchInput}
              className="search"
            />
          </div>
          <div>
            <ul>
              {searchResult.map(eachSearch => (
                <SuggestionItem
                  searchDetails={eachSearch}
                  key={eachSearch.id}
                  onSuggestion={this.onSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
