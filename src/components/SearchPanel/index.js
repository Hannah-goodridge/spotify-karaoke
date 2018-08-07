import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchInput from 'react-search-input';
import { spotifySearchURL } from '../../constants';

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
    this.storeTrack = this.storeTrack.bind(this);
  }

  storeTrack(e, track) {
    if (e.target.classList.contains('queued')) {
      e.target.classList.remove('queued');
      const index = this.state.myTracks.indexOf(track);
      this.state.myTracks.splice(index, 1);
      this.setState({ myTracks: this.state.myTracks });
    } else {
      e.target.classList.add('queued');
      if (this.state.myTracks.includes(track)) {
        alert('already in there bitches');
        return;
      }
      this.setState({ myTracks: [...this.state.myTracks, ...[track]] });
    }
  }

  getSearchValue(value, token) {
    this.setState({
      searchValue: value
    });
    this.handleSearch(value, token);
  }

  clearResults() {
    this.setState({ tracks: {} });
  }

  getResults() {
    let tracks = this.state.tracks;

    if (tracks.length) {
      return Object.keys(tracks).map((key, items) => {
        let track = tracks[key];

        return (
          <div
            key={`${items}-wrap`}
            data-id={track.id}
            data-uri={track.uri}
            data-link={track.href}
          >
            <img
              key={`${items}-img`}
              width="40px"
              height="40px"
              src={track.album.images[0].url}
              alt=""
            />
            <span key={`${items}-track-name`}>
              {items + 1} {track.name}{' '}
            </span>{' '}
            by{' '}
            <span key={`${items}-artists-name`}>{track.artists[0].name}</span>
            <button
              className={`btn`}
              key={`${items}-button`}
              onClick={e => this.storeTrack(e, track)}
            >
              +
            </button>
          </div>
        );
      });
    } else {
      return;
    }
  }

  handleSearch = (value, token) => {
    const encoded = encodeURIComponent(value);
    let url = `${spotifySearchURL}${encoded}&type=track`;

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
      })

      .catch(error => {});
  };

  render() {
    return (
      <div className={`search-panel `}>
        <SearchInput
          className="search-input"
          value={this.state.searchValue}
          onChange={value => this.getSearchValue(value, this.props.token)}
        />
        <button
          className="btn"
          onClick={e => {
            this.clearResults();
          }}
        >
          Clear search
        </button>

        {this.getResults()}
      </div>
    );
  }
}

SearchPanel.propTypes = {
  token: PropTypes.string.isRequired
};

export default SearchPanel;
