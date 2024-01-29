import React from 'react';
import PropTypes from 'prop-types';

import styles from './VisuallyHidden.module.css';

const VisuallyHidden = ({ children, className = '', ...delegated }) => {
	const [forceShow, setForceShow] = React.useState(false);

	React.useEffect(() => {
		// eslint-disable-next-line no-undef
		if (process.env.NODE_ENV !== 'production') {
			const handleKeyDown = (ev) => {
				if (ev.key === 'Alt') {
					setForceShow(true);
				}
			};

			const handleKeyUp = () => {
				setForceShow(false);
			};

			window.addEventListener('keydown', handleKeyDown);
			window.addEventListener('keyup', handleKeyUp);

			return () => {
				window.removeEventListener('keydown', handleKeyDown);
				window.removeEventListener('keyup', handleKeyUp);
			};
		}
	}, []);

	if (forceShow) {
		return <span className={styles.showWrapper}>{children}</span>;
	}

	return (
		<span className={`${className} ${styles.wrapper}`} {...delegated}>
			{children}
		</span>
	);
};

VisuallyHidden.propTypes = {
	children: PropTypes.element,
	className: PropTypes.className,
};

export default VisuallyHidden;
