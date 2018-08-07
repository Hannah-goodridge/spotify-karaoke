import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Head from '../../components/Head';

export class Page extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, title } = this.props;

    return (
      <React.Fragment>
        <Head title={title} />
        <div className="page-container">{children}</div>
      </React.Fragment>
    );
  }
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,

  title: PropTypes.string.isRequired
};

export default withRouter(Page);
