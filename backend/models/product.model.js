import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: int32,
        required: true,
    },
    stock: {
        type: int32,
        required: true,
    },
    color: [{
        type: String,
    }],
    images: [{
        type: String,
        required: true,
    }],
    size: {
        type: String,
    }
})

const Products = mongoose.model('Products', ProductSchema);
export default Products;