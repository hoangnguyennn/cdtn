import { FC, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

type TextEditorProps = {
	onChange: Function;
	description?: string;
};

const TextEditor: FC<TextEditorProps> = ({
	onChange = () => {},
	description = '',
}) => {
	const [value, setValue] = useState(description);

	const setEditorValue = (newValue: string) => {
		setValue(newValue);
		onChange(newValue);
	};

	const modules = {
		toolbar: [
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
	};

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

	useEffect(() => {
		setValue(description);
	}, [description]);

	return (
		<ReactQuill
			theme="snow"
			value={value}
			onChange={setEditorValue}
			modules={modules}
			formats={formats}
		/>
	);
};

export default TextEditor;
