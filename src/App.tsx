import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'antd';
import styled from 'styled-components';

import './App.less';

const StyledButton = styled(Button)({
	margin: '1rem',
});

function App() {
	const { t, i18n } = useTranslation('common');

	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
	};

	return (
		<Suspense fallback='loading'>
			<div>
				<StyledButton type='primary'>{t('button')}</StyledButton>
				<Button type='default' onClick={changeLanguage}>
					{t('changeLanguage')}
				</Button>
			</div>
		</Suspense>
	);
}

export default App;
