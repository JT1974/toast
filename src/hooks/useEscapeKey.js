import React from 'react';

const useEscapeKey = (handler) => {
	React.useEffect(() => {
		const listener = (event) => {
			if (event.code !== 'Escape') {
				return;
			}

			handler();
		};

		document.addEventListener('keydown', listener);

		return () => document.removeEventListener('keydown', listener);
	}, []);

	return null;
};

export default useEscapeKey;

