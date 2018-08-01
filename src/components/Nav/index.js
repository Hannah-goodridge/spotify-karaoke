import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toJS } from '../../components/HOC/to-js';
import { toggleSearch } from '../../containers/App/actions';
import { makeSelectSearchOpen,  } from '../../containers/App/selectors';

import SearchPanel from '../../components/SearchPanel';

import ProfileIcon from '../../images/svg/profile.svg';
import CloseIcon from '../../images/svg/cross-white.svg';
import SearchIcon from '../../images/svg/search.svg';


export class Nav extends React.PureComponent {

  constructor(props) {
    super(props);
    this.toggleActive = this.toggleActive.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchOpen === false && nextProps.searchOpen === true) {
      setTimeout(() => {
        document.querySelector('#Search').focus();
      }, 500);
    }
  }


  handleLogout() {
    //logout user here
  }

  isHome() {
    let homepage = false;
    if (this.props.location.pathname === `/${this.props.service.slug}`) {
      homepage = true;
    }
    return homepage;
  }

  toggleActive(type) {
    this.setState({
      [`${type}Active`]: !this.state[`${type}Active`],
    });
  }

  render() {
    const { service, onToggleSearch, searchOpen } = this.props;
    const {  profileActive } = this.state;

    return (
      <React.Fragment>
        <nav className={`header-nav ${this.isHome() ? 'is-home' : 'has-search'}`}>
          <ul role="menubar" className="nav-row nav-row-first">
            <li role="none" className="nav-item nav-item-logo">
              <Link role="menuitem" className={`nav-link ${this.state.isActive ? 'is-active' : ''}`} to={`/${service.slug}`}>
                <div style={{ backgroundImage: `url(${service.logo})` }} className={`nav-logo ${service.name.toLowerCase()}-logo`} alt={`${service.name}-logo`} ></div>
              </Link>
            </li>
            <li role="none" className="nav-item nav-item-search">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  onToggleSearch();
                }}
                href="/"
                role="menuitem"
                className={`nav-link ${searchOpen ? 'is-active' : ''}`}
              >
                <span className="nav-icon icon-search"><SearchIcon /> </span>
                <span className="nav-link-text">Search <span>benefits</span></span>
              </a>
            </li>

            <li role="none" className="nav-item nav-item-profile">
              <Link
                onClick={() => {
                  this.toggleActive('profile');
                }
                }
                role="menuitem"
                className={`nav-link ${profileActive ? 'is-active' : ''}`}
                to={this.props.profileLink}
              >
                <span className="nav-icon icon-profile"><ProfileIcon /> </span>
                <span className="nav-link-text">Profile</span>
              </Link>
            </li>

          </ul>
          <div className={`header-searchbar ${searchOpen ? 'is-active' : ''}`}>
            {searchOpen && (
              <SearchPanel
                bgColor={'bg-gray'}
                title={'Welcome'}
                text={'Explore all of your personal benefits, entitlements and allowances.'}
                service={service}
                hasSubmitted={onToggleSearch}
                renderInputOnly
              />
            )}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

Nav.propTypes = {
  profileLink: PropTypes.string,
  location: PropTypes.object,
  onToggleSearch: PropTypes.func.isRequired,
  searchOpen: PropTypes.bool.isRequired,
};


const mapStateToProps = (state) => {
  const searchOpen = makeSelectSearchOpen(state);
  return {
    searchOpen,
  };
};

const mapDispatchToProps = (dispatch) => ({

  onToggleSearch: () => dispatch(toggleSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(toJS(withRouter(Nav)));
