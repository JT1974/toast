import React from 'react';
import { useToast } from '../components/ToastProvider';

const useEscapeKey = () => {
	const { removeAllToasts } = useToast();

	React.useEffect(() => {
		const listener = (event) => {
			if (event.code !== 'Escape') {
				return;
			}

			removeAllToasts();
		};

		document.addEventListener('keydown', listener);

		return () => document.removeEventListener('keydown', listener);
	}, []);

	return null;
};

export default useEscapeKey;
