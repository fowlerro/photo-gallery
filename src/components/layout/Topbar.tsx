import React from 'react';

import styled from 'styled-components';

import LanguageSwitcher from '../common/LanguageSwitcher';

const StyledTopbar = styled('div')({
	display: 'flex',
});

export default function Topbar(): JSX.Element {
	return (
		<StyledTopbar>
			<LanguageSwitcher />
		</StyledTopbar>
	);
}
