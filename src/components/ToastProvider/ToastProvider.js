import React from 'react';
import PropTypes from 'prop-types';

export const ToastContext = React.createContext();

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export const useToast = () => {
	return React.useContext(ToastContext);
};

function ToastProvider({ children }) {
	const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
	const [toastMessage, setToastMessage] = React.useState('');
	const [toasts, setToasts] = React.useState([]);

	const removeToast = (id) => {
		const filteredToasts = toasts?.filter((toast) => toast.id !== id);

		setToasts(filteredToasts);
	};

	const removeAllToasts = () => {
		setToasts([]);
	};

	const addToast = (event) => {
		event.preventDefault();

		const id = crypto.randomUUID();
		const toast = { id, variant: toastVariant, message: toastMessage };

		setToasts((currToasts) => [...currToasts, toast]);
		setToastVariant(VARIANT_OPTIONS[0]);
		setToastMessage('');
	};

	const changeToastVariant = setToastVariant;

	const addToastMessage = setToastMessage;

	const value = {
		toasts,
		removeToast,
		removeAllToasts,
		addToast,
		toastVariant,
		changeToastVariant,
		toastMessage,
		addToastMessage,
	};

	return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

ToastProvider.propTypes = { children: PropTypes.element };

export default ToastProvider;
