import React from 'react';
import PropTypes from 'prop-types';

export const ToastContext = React.createContext();

import useEscapeKey from '../../hooks/useEscapeKey';

export const useToast = () => {
	return React.useContext(ToastContext);
};

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	const addToast = (toast) => {
		setToasts((currToasts) => [...currToasts, toast]);
	};

	const removeToast = (id) => {
		const filteredToasts = toasts?.filter((toast) => toast.id !== id);
		setToasts(filteredToasts);
	};

	const removeAllToasts = React.useCallback(() => {
		setToasts([]);
	}, []);

	useEscapeKey(removeAllToasts);

	const value = {
		toasts,
		removeToast,
		removeAllToasts,
		addToast,
	};

	return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

ToastProvider.propTypes = { children: PropTypes.array };

export default ToastProvider;

