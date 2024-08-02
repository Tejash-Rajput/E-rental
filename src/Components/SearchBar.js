import React, { PureComponent } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export class SearchBar extends PureComponent {
  render() {
    return (
      <div className='input-wrapper'>
        <faSearch id="search-icon"/>
        <input placeholder='Type to search...'></input>
      </div>
    )
  }
}

export default SearchBar