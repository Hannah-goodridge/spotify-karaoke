import React from 'react';
//import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import { toJS } from '../../components/HOC/to-js';
import Logo from '../../images/svg/logo.svg';

import SearchPanel from '../../components/SearchPanel';

export class Nav extends React.PureComponent {
  state = {
    toggleSearch: false
  };

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
  toggleSearch() {
    // const search = document.querySelector('.search');
    // if(search.classList.contains('is-open')){
    //   document.querySelector('.search').classList.remove('is-open');
    // }else{
    //   document.querySelector('.search').classList.add('is-open');
    // }

    this.setState({
      toggleSearch: !this.state.toggleSearch
    });
  }

  handleLogout() {
    //logout user here
  }

  isHome() {
    let homepage = false;
    if (this.props.location.pathname === `/landing`) {
      homepage = true;
    }
    return homepage;
  }

  toggleActive(type) {
    this.setState({
      [`${type}Active`]: !this.state[`${type}Active`]
    });
  }

  render() {
    const { toggleSearch } = this.state;

    return (
      <React.Fragment>
        <nav className={`nav ${this.isHome() ? 'is-home' : 'has-search'}`}>
          <ul role="menubar" className="nav-row nav-row-first">
            <li role="none" className="nav-item nav-item-logo">
              <Link role="menuitem" className={`nav-link `} to={`/`}>
                <img src={Logo} alt="" />
              </Link>
            </li>
            <li role="none" className="nav-item nav-item-search">
              <a
                onClick={e => {
                  e.preventDefault();
                  this.toggleSearch();
                }}
                href="/"
                role="menuitem"
                className={`nav-link `}
              >
                <span className="nav-icon icon-search"> </span>
              </a>
            </li>
          </ul>
          <div className={`header-searchbar `}>
            {this.state.toggleSearch && (
              <SearchPanel
                bgColor={'bg-gray'}
                text={
                  'Explore all of your personal benefits, entitlements and allowances.'
                }
                token={this.props.token}
              />
            )}
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

Nav.propTypes = {};

// const mapStateToProps = (state) => {
//   const searchOpen = makeSelectSearchOpen(state);
//   return {
//     searchOpen,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({

//   onToggleSearch: () => dispatch(toggleSearch()),
// });

export default toJS(withRouter(Nav));
