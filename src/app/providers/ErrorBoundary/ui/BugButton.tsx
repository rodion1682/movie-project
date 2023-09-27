import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Component that throws an error when clicked to test ErrorBoundary
export const BugButton = () => {
	const [error, setError] = useState(false);
	const { t } = useTranslation();

	const onThrowError = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return <Button onClick={onThrowError}>{t('Throw an Error')}</Button>;
};
