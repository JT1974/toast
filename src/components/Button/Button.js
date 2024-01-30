import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

function Button({ className = '', ...delegated }) {
	return <button className={`${styles.button} ${className}`} {...delegated} />;
}

Button.propTypes = {
	className: PropTypes.func,
};

export default Button;

