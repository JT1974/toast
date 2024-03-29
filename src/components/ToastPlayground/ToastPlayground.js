import React from 'react';

import mascot from '../../../assets/toast.png';

import Button from '../Button';
import { useToast } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = React.useState('');
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
	const { addToast } = useToast();

	const submitHandler = (event) => {
		event.preventDefault();

		const id = crypto.randomUUID();
		const toast = { id, variant, message };

		addToast(toast);
		setVariant(VARIANT_OPTIONS[0]);
		setMessage('');
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src={mascot} />
				<h1>Toast Playground</h1>
			</header>

			<form className={styles.controlsWrapper} onSubmit={submitHandler}>
				<div className={styles.row}>
					<label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							value={message}
							onChange={(event) => setMessage(event.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					{VARIANT_OPTIONS?.map((option) => (
						<div key={option} className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
							<label htmlFor={`variant-${option}`}>
								<input
									id={`variant-${option}`}
									type='radio'
									name='option'
									value={option}
									checked={option === variant}
									onChange={() => setVariant(option)}
								/>
								{option}
							</label>
						</div>
					))}
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;

