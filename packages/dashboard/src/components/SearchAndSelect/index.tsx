import { ReactNode, useState, useRef, useMemo } from 'react';
import { Select, Spin } from 'antd';
import { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';

export interface DebounceSelectProps<ValueType = any>
	extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
	fetchOptions: (search: string) => Promise<ValueType[]>;
	debounceTimeout?: number;
}

function DebounceSelect<
	ValueType extends {
		key?: string;
		label: ReactNode;
		value: string | number;
	} = any
>({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps) {
	const [fetching, setFetching] = useState(false);
	const [options, setOptions] = useState<ValueType[]>([]);
	const fetchRef = useRef(0);

	const debounceFetcher = useMemo(() => {
		const loadOptions = (value: string) => {
			fetchRef.current += 1;
			const fetchId = fetchRef.current;
			setOptions([]);
			setFetching(true);

			fetchOptions(value).then((newOptions) => {
				if (fetchId !== fetchRef.current) {
					// for fetch callback order
					return;
				}

				setOptions(newOptions);
				setFetching(false);
			});
		};

		return debounce(loadOptions, debounceTimeout);
	}, [fetchOptions, debounceTimeout]);

	return (
		<Select<ValueType>
			labelInValue
			filterOption={false}
			onSearch={debounceFetcher}
			notFoundContent={fetching ? <Spin size="small" /> : null}
			{...props}
			options={options}
		/>
	);
}

// Usage of DebounceSelect
interface UserValue {
	label: string;
	value: string;
}

async function fetchUserList(username: string): Promise<UserValue[]> {
	console.log('fetching user', username);

	return fetch('https://randomuser.me/api/?results=5')
		.then((response) => response.json())
		.then((body) =>
			body.results.map(
				(user: {
					name: { first: string; last: string };
					login: { username: string };
				}) => ({
					label: `${user.name.first} ${user.name.last}`,
					value: user.login.username,
				})
			)
		);
}

const SearchAndSelect = () => {
	const [value, setValue] = useState<UserValue[]>([]);

	return (
		<DebounceSelect
			mode="multiple"
			value={value}
			placeholder="Select users"
			fetchOptions={fetchUserList}
			onChange={(newValue) => {
				setValue(newValue);
			}}
			style={{ width: '100%' }}
		/>
	);
};

export default SearchAndSelect;