import React from 'react';
import PropTypes from 'prop-types';

export class PageIntro extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="page-intro">
        {this.props.title && (
          <h1 className="page-intro__title">{this.props.title}</h1>
        )}
        {this.props.subtitle && (
          <h2 className="page-intro__subtitle">{this.props.subtitle}</h2>
        )}
        {this.props.desc && (
          <p className="page-intro__desc">{this.props.desc}</p>
        )}
      </div>
    );
  }
}

PageIntro.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  desc: PropTypes.string
};

export default PageIntro;
