import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

function ButtonLink({ className, href, children }) {
  return (
    <Button>
      <a className={className} href={href}>
        {children}
      </a>
    </Button>
    
  );
}

ButtonLink.defaultProps = {
  href: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;