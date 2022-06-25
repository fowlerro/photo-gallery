import React from 'react';

import Topbar from '../components/layout/Topbar';
import Photos from '../components/main/Photos';
import UploadButton from '../components/common/UploadButton';

export default function Main(): JSX.Element {
	return (
		<>
			<Topbar />
			<Photos />
			<UploadButton />
		</>
	);
}
