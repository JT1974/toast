import React from 'react';
import PropTypes from 'prop-types';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';
import { useToast } from '../ToastProvider/ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ variant = 'notice', id, children }) {
	const { removeToast } = useToast();
	const Icon = ICONS_BY_VARIANT[variant];

	return (
		<div className={`${styles.toast} ${styles[variant]}`}>
			<div className={styles.iconContainer}>
				<Icon size={24} />
			</div>
			<p className={styles.content}>
				<VisuallyHidden>{variant} - </VisuallyHidden>
				{children}
			</p>
			<button
				className={styles.closeButton}
				onClick={() => removeToast(id)}
				aria-label='Dismiss message'
				aria-live='off'
			>
				<X size={24} />
			</button>
		</div>
	);
}

Toast.propTypes = {
	variant: PropTypes.string,
	children: PropTypes.string,
	id: PropTypes.string,
};

export default Toast;

