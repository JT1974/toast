import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { useToast } from '../ToastProvider/ToastProvider';

function ToastShelf() {
	const { toasts, removeToast } = useToast();

	return (
		<ol className={styles.wrapper}>
			{toasts?.map(({ id, variant, message }) => (
				<li key={id} className={styles.toastWrapper}>
					<Toast variant={variant} closeHandler={() => removeToast(id)}>
						{message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;

