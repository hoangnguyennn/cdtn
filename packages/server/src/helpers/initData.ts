import mongooseLoader from '../loaders/mongoose';

import ImageService from '../services/image';
import ProductService from '../services/product';
import ProductUnitService from '../services/productUnit';
import AuthService from '../services/auth';
import { UserTypes } from '../interfaces/enums';

const generateProducts = async () => {
	console.log('init products');

	const unit = await ProductUnitService.create({ name: 'kg' });

	const image = await ImageService.create({
		url: 'https://res.cloudinary.com/hoangnguyennn/image/upload/v1621465858/yzzutbi4htoulq6zkbwb.png',
	});

	const productsPromise = Array.from(new Array(100)).map((_, index) =>
		ProductService.create({
			name: `Product ${index}`,
			price: 100000,
			unitId: unit._id,
			description: `Product ${index} description`,
			imagesId: [image._id],
		})
	);

	return Promise.all(productsPromise).then(() => {
		console.log('Products created');
	});
};

const generateUsers = async () => {
	console.log('init users');

	const usersPromise = Array.from(new Array(3)).map((_, index) =>
		AuthService.register({
			email: `mail${index}@mail.com`,
			passwordHashed: '123',
			fullName: `Account ${index}`,
			phone: `011111111${index}`,
			userType: UserTypes.CUSTOMER,
			isActivated: true,
		})
	);

	return Promise.all(usersPromise).then(() => {
		console.log('Users created');
	});
};

const generate = async () => {
	await mongooseLoader();

	await generateProducts();
	await generateUsers();

	return 1;
};

generate();
