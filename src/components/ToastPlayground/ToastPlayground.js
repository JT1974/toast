import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';
import { VARIANT_OPTIONS, useToast } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
	const { toasts, removeToast, addToast, toastVariant, changeToastVariant, toastMessage, addToastMessage } =
		useToast();

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf />

			<form className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							value={toastMessage}
							onChange={(event) => addToastMessage(event.target.value)}
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
									onChange={() => changeToastVariant(variant)}
								/>
								{variant}
							</label>
						</div>
					))}
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button onClick={addToast}>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;

