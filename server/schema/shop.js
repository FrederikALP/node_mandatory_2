import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema(
	{
        itemname: String,
        category: String,
        Price: Number
	},
	{ collection: 'shop' }
);

const shop = mongoose.model('Shop', ShopSchema);

export default shop;