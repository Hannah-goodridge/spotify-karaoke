import React from 'react';
//import PropTypes from 'prop-types';


export class SearchPanel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleSubmit = (value) => {
  }

  render() {
    return (
      <div className={`search-panel `}>
        <input type="search" name="" id="" placeholder="search for a track"/>
        <input type="submit" value="search"/>
      </div>
    );
  }
}


export default SearchPanel;
