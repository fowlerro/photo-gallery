import React from 'react';

import { useLiveQuery } from 'dexie-react-hooks';

import { Button, List } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

import { db, Photo } from '../../utils/db';

export default function Photos(): JSX.Element {
	const photos = useLiveQuery(() => db.photos.toArray());

	const handleDelete = (id: Photo['id']) => {
		if (!id) return;
		db.photos.delete(id);
	};

	return (
		<List
			itemLayout='horizontal'
			dataSource={photos}
			renderItem={item => (
				<List.Item actions={[<Button icon={<DeleteFilled />} key='delete' onClick={() => handleDelete(item.id)} />]}>
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
