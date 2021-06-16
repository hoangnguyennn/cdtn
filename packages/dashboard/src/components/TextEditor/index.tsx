import { ChangeEvent, FC, useCallback, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';
import { uploadImage } from '../../apis/common';

type TextEditorProps = {
	onChange?: Function;
	value?: string;
};

const TextEditor: FC<TextEditorProps> = ({
	onChange = () => {},
	value = '',
}) => {
	const inputImageRef = useRef<HTMLInputElement>(null);
	const [quillRef, setQuillRef] = useState<ReactQuill | null>(null);

	const selectImageFile = () => {
		console.log('click to select image file');
		inputImageRef.current?.click();
	};

	const handleInputImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log('image change');
		const file = event.target.files?.[0];
		if (file) {
			uploadImage(file)
				.then((res) => {
					if (quillRef) {
						const range = quillRef.getEditor().getSelection(true);
						if (value) {
							quillRef
								.getEditor()
								.insertEmbed(range.index, 'image', res.url, 'user');
						}
					}
				})
				.finally(() => {
					if (inputImageRef.current) {
						inputImageRef.current.value = '';
					}
				});
		}
	};

	const imageHandler = useCallback(
		(image: any, callback: any) => {
			console.log('image', image, callback, quillRef);
			if (quillRef) {
				selectImageFile();
			}
		},
		[quillRef]
	);

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ font: [] }],
					[{ header: [1, 2, 3, 4, 5, 6, false] }],
					[{ align: [] }],
					['bold', 'italic', 'underline', 'strike'],
					[{ color: [] }, { background: [] }],
					[{ script: 'sub' }, { script: 'super' }],
					['blockquote', 'code-block'],
					[
						{ list: 'ordered' },
						{ list: 'bullet' },
						{ indent: '-1' },
						{ indent: '+1' },
					],
					['link', 'image', 'video'],
					['clean'],
				],
				handlers: {
					image: imageHandler,
				},
			},
		}),
		[imageHandler]
	);

	const formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'code-block',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'video',
		'align',
	];

	return (
		<>
			<ReactQuill
				ref={(el) => {
					setQuillRef(el);
					return el;
				}}
				theme="snow"
				value={value}
				onChange={(content) => onChange(content)}
				modules={modules}
				formats={formats}
			/>

			<input
				ref={inputImageRef}
				type="file"
				accept="image/*"
				style={{ display: 'none' }}
				onChange={handleInputImageChange}
			/>
		</>
	);
};

export default TextEditor;
