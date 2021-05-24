import { model, Schema, Types } from 'mongoose';
import { CollectionNames } from '../interfaces/enums';
import { IOrderItem } from '../interfaces/IDocuments';

const orderItemSchema = new Schema({
	productId: {
		type: Types.ObjectId,
		required: true,
		ref: CollectionNames.PRODUCT,
	},
	price: {
		type: Number,
		required: true,
	},
	qty: {
		type: Number,
		required: true,
	},
});

orderItemSchema.virtual('product', {
	ref: CollectionNames.PRODUCT,
	localField: 'productId',
	foreignField: '_id',
});

export default model<IOrderItem>(CollectionNames.ORDER_ITEM, orderItemSchema);
