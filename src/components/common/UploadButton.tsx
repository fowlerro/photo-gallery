import React from 'react';

import { Button, Input, Upload, UploadProps } from 'antd';
import { RcFile, UploadFile, UploadChangeParam } from 'antd/lib/upload/interface';
import TextArea from 'antd/lib/input/TextArea';
import FormItemLabel from 'antd/lib/form/FormItemLabel';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import { db } from '../../utils/db';

const dummyRequest: UploadProps['customRequest'] = ({ onSuccess }) => {
	setTimeout(() => onSuccess?.('ok'), 0);
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
	const reader = new FileReader();
	reader.addEventListener('load', () => callback(reader.result as string));
	reader.readAsDataURL(img);
};

export default function UploadButton(): JSX.Element {
	const [loading, setLoading] = React.useState(false);
	const [image, setImage] = React.useState<string>();
	const [fileName, setFileName] = React.useState<string>();
	const [title, setTitle] = React.useState('');
	const [description, setDescription] = React.useState('');

	const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
		if (info.file.status === 'uploading') {
			setLoading(true);
			return;
		}
		if (info.file.status === 'done') {
			// Get this url from response in real world.
			getBase64(info.file.originFileObj as RcFile, url => {
				setLoading(false);
				setImage(url);
				setFileName(info.file.name);
			});
		}
	};

	const handleSubmit = () => {
		console.log(image, fileName, title);
		if (!image || !fileName || !title) return;
		db.photos.add({
			fileName,
			photo: image,
			date: new Date(),
			title,
			description,
		});
	};

	const uploadButton = (
		<div>
			{loading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	return (
		<>
			<Upload
				name='image'
				listType='picture-card'
				accept='.png,.jpeg,.gif'
				showUploadList={false}
				customRequest={dummyRequest}
				onChange={handleChange}
			>
				{image ? <img src={image} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
			</Upload>
			<FormItemLabel htmlFor='title' label='Title' prefixCls='d' />
			<Input id='title' type='text' value={title} onChange={e => setTitle(e.target.value)} />
			<FormItemLabel htmlFor='description' label='Description' prefixCls='d' />
			<TextArea id='description' value={description} onChange={e => setDescription(e.target.value)} />
			<Button onClick={handleSubmit}>Submit</Button>
		</>
	);
}
