import mongooseLoader from '../loaders/mongoose';
import Product from '../models/product.model';
import ProductImage from '../models/productImage.model';
import ProductUnit from '../models/productUnit.model';

const generateProducts = async () => {
	await mongooseLoader();

	console.log('init');

	const unit = await ProductUnit.create({ name: 'kg' });

	for (let i = 0; i < 100; i++) {
		console.log(`create product ${i + 1}`);
		const image = await ProductImage.create({
			imageUrl:
				'https://res.cloudinary.com/hoangnguyennn/image/upload/v1621465858/yzzutbi4htoulq6zkbwb.png',
		});

		await Product.create({
			name: `Product ${i + 1}`,
			price: 123,
			unitId: unit._id,
			description: `Product ${i + 1} description`,
			imagesId: [image._id],
		});
	}
};

generateProducts();
