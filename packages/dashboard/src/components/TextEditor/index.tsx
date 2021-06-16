import { FC } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

type TextEditorProps = {
	onChange?: Function;
	value?: string;
};

const TextEditor: FC<TextEditorProps> = ({
	onChange = () => {},
	value = '',
}) => {
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

	return (
		<ReactQuill
			theme="snow"
			value={value}
			onChange={(content) => onChange(content)}
			modules={modules}
			formats={formats}
		/>
	);
};

export default TextEditor;
