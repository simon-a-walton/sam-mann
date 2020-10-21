import React from 'react';
import PropTypes from 'prop-types';
import { colors } from './../constants/StyleConstants';
import { css } from 'glamor';


class AppContent extends React.PureComponent {
  static propsTypes = {
    link: PropTypes.string,
    children: PropTypes.node.isRequired,
    containerClassName: PropTypes.string
  };

  render() {
    return (
      <li>
        <a href={this.props.link}>
          <span className='fa-li'>
            <i className={`${this.props.containerClassName} ${css({ color: colors.purple})}`} />
          </span>
          &nbsp;
          {this.props.children}
        </a>
      </li>
    );
  }
}

export default AppContent;

