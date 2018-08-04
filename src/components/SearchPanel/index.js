import React from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';
import SearchInput, { createFilter } from 'react-search-input';
import {
  spotifySearchURL,
  token,
  clientID,
  clientSecret
} from '../../constants';

export class SearchPanel extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      tracks: {},
      selectedOption: null,
      myTracks: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  getSearchValue(value, token) {
    this.setState({
      searchValue: value
    });
    this.handleSearch(value, token);
    console.log(value);
  }

  getResults() {
    let tracks = this.state.tracks;
    let track;

    return Object.keys(tracks).map(function(key, items) {
      track = tracks[key];

      return (
        <React.Fragment>
          <div data-id={track.id} data-uri={track.uri} data-link={track.href}>
            {' '}
            <img
              width="50px"
              height="50px"
              src={track.album.images[0].url}
              alt=""
            />{' '}
            <span>{track.name} </span> by <span>{track.artists[0].name}</span>
          </div>
        </React.Fragment>
      );
    });
  }

  handleSearch = (value, token) => {
    const encoded = encodeURIComponent(value);
    let url = `${spotifySearchURL}${encoded}&type=track`;
    console.log(url);

    const params = {
      headers: {
        Authorization: ' Bearer ' + token,
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: null
    };

    axios
      .get(url, params)
      .then(response => {
        this.setState({ tracks: response.data.tracks.items });

        console.log(response.data.tracks.items);
      })

      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className={`search-panel `}>
        <SearchInput
          className="search-input"
          value={this.state.searchValue}
          onChange={value => this.getSearchValue(value, this.props.token)}
        />

        {this.getResults()}
      </div>
    );
  }
}

export default SearchPanel;
