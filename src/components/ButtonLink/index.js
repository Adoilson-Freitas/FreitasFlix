import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from './styles';

function ButtonLink({ className, to, children }) {
  return (
    <Button>
      <Link className={className} to={to}>
        {children}
      </Link>
    </Button>
  );
}

ButtonLink.defaultProps = {
  to: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
