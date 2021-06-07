import { PlusOutlined } from '@ant-design/icons';
import { RcFile, UploadFile } from 'antd/lib/upload/interface';
import { Upload, Modal } from 'antd';
import { FC, useEffect, useState } from 'react';
import { IImage } from '../../interfaces';

function getBase64(file: RcFile): Promise<string | ArrayBuffer | null> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}

type UploadImageProps = {
	onChange: any;
	setIsUploaded?: any;
	images?: IImage[] | UploadFile[];
};

const UploadImage: FC<UploadImageProps> = ({
	onChange = () => {},
	setIsUploaded = () => {},
	images = [],
}) => {
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	const [preview, setPreview] = useState({
		isVisible: false,
		image: '',
		title: '',
	});

	const handlePreview = async (file: UploadFile) => {
		if (!file.url && !file.preview) {
			file.preview = (await getBase64(file.originFileObj as RcFile)) as string;
		}

		setPreview({
			image: file.url || file.preview || '',
			isVisible: true,
			title:
				file.name || file.url?.substring(file.url.lastIndexOf('/' + 1)) || '',
		});
	};

	const handleCancel = () => {
		setPreview((prevState) => ({ ...prevState, isVisible: false }));
	};

	const handleChange = ({ fileList }: { fileList: UploadFile[] }) => {
		const isUploaded = !fileList.some((file) => file.status === 'uploading');
		setIsUploaded(isUploaded);
		setFileList(fileList);
		onChange(fileList);
	};

	const requestHeaders = () => {
		const token = localStorage.getItem('access-token');
		return { Authorization: `Bearer ${token}` };
	};

	const uploadButton = (
		<div>
			<PlusOutlined />
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	);

	useEffect(() => {
		if (images.length !== fileList.length) {
			if (images.length) {
				if (images[0].hasOwnProperty('uid')) {
					setFileList(images as UploadFile[]);
				} else {
					const newFileList = (images as IImage[]).map((image) => {
						return {
							uid: image.id,
							name: image.url,
							status: 'done',
							response: { url: image.url, publicId: image.publicId },
							url: image.url,
						} as UploadFile;
					});

					setFileList(newFileList);
				}
			}
		}
	}, [fileList.length, images]);

	return (
		<>
			<Upload
				action="http://localhost:5000/upload"
				headers={requestHeaders()}
				listType="picture-card"
				fileList={fileList}
				onPreview={handlePreview}
				onChange={handleChange}
			>
				{fileList.length >= 8 ? null : uploadButton}
			</Upload>
			<Modal
				visible={preview.isVisible}
				title={preview.title}
				onCancel={handleCancel}
			>
				<img alt="example" style={{ width: '100%' }} src={preview.image} />
			</Modal>
		</>
	);
};

export default UploadImage;
