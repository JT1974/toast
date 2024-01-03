import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
	const [toastMessage, setToastMessage] = React.useState('');
	const [showToast, setShowToast] = React.useState(false);

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			{showToast && (
				<Toast variant={toastVariant} message={toastMessage} closeHandler={() => setShowToast(false)} />
			)}

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							value={toastMessage}
							onChange={(event) => setToastMessage(event.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					{VARIANT_OPTIONS?.map((variant) => (
						<div key={variant} className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
							<label htmlFor={`variant-${variant}`}>
								<input
									id={`variant-${variant}`}
									type='radio'
									name='variant'
									checked={toastVariant === variant}
									onChange={() => setToastVariant(variant)}
								/>
								{variant}
							</label>
						</div>
					))}
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button onClick={() => setShowToast(true)}>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;

