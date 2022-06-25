import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Tooltip } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)({
	margin: '1rem',
	marginLeft: 'auto',
	textTransform: 'uppercase',
});

export default function LanguageSwitcher(): JSX.Element {
	const { t, i18n } = useTranslation('common');

	const handleLanguageChange = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
	};

	return (
		<Tooltip title={t('changeLanguage')} placement={'left'}>
			<StyledButton shape='circle' size='large' onClick={handleLanguageChange}>
				{i18n.language}
			</StyledButton>
		</Tooltip>
	);
}
