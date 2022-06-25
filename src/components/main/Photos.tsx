import React from 'react';

import { useLiveQuery } from 'dexie-react-hooks';

import { List } from 'antd';

import { db } from '../../utils/db';

export default function Photos(): JSX.Element {
	const photos = useLiveQuery(() => db.photos.toArray());

	return (
		<List
			itemLayout='horizontal'
			dataSource={photos}
			renderItem={item => (
				<List.Item>
					<List.Item.Meta
						avatar={<img src={item.photo} alt={item.fileName} />}
						title={item.title}
						description={item.description}
					/>
				</List.Item>
			)}
		/>
	);
}
