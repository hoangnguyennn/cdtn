import mongooseLoader from '../loaders/mongoose';

import { ProductStatus, UserType } from '../interfaces/enums';
import AuthService from '../services/auth';
import ImageService from '../services/image';
import PaymentMethodService from '../services/paymentMethod';
import ProductService from '../services/product';
import ProductUnitService from '../services/productUnit';

const generateProducts = async () => {
	console.log('init products');

	const unit = await ProductUnitService.create({ name: 'kg' });

	const image = await ImageService.create({
		url: 'https://res.cloudinary.com/hoangnguyennn/image/upload/v1621465858/yzzutbi4htoulq6zkbwb.png',
	});

	const productsPromise = Array.from(new Array(100)).map((_, index) =>
		ProductService.create({
			name: `Product ${index + 1}`,
			price: 100000,
			unitId: unit._id,
			description: `Product ${index + 1} description`,
			imagesId: [image._id],
			status: ProductStatus.SELLING,
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
			email: `mail${index + 1}@mail.com`,
			passwordHashed: '123',
			fullName: `Account ${index + 1}`,
			phone: `011111111${index + 1}`,
			userType: UserType.CUSTOMER,
			isActivated: true,
		})
	);

	return Promise.all(usersPromise).then(() => {
		console.log('Users created');
	});
};

const generatePaymentMethod = async () => {
	console.log('init payment methods');

	PaymentMethodService.create({
		name: 'Thanh toán bằng tiền mặt',
		imageUrl: 'https://www.coolmate.me/images/momo-icon.png',
	});
};

const generate = async () => {
	await mongooseLoader();

	await generateProducts();
	await generateUsers();
	await generatePaymentMethod();

	return 1;
};

generate();
