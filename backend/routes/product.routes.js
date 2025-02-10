import express from 'express';
import cloudinary, { cloudinaryConnect } from '../config/cloudinary.js';
import productModel from '../models/product.model.js';
import upload from '../middleware/multer.js'



const app = express();
cloudinaryConnect();







app.get('/test', (req, res) => {
    console.log("the test route from index.js")
    res.send("the test route from index.js")
})
app.get('/get-products', (req, res) => {
    productModel.find({})
        .then(users => res.json(users))
        .catch(error => res.json(error))
})
app.post('/add-product', async (req, res) => {
    const { name, description, price, stock, color, images, size, SKU, category, tag } = req.body;
    const product = new productModel({
        name,
        description,
        price,
        stock,
        color,
        images,
        size,
        SKU,
        category,
        tag,
    })



    await product.save();
    res.status(200).json({ message: "Product created Successfully", product })
})
app.delete('/delete-product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productModel.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted", product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.put('/edit/:id', async (req, res) => {
    try {
        const { name, description, price, stock, color, images, size } = req.body;
        const updatedProduct = await productModel.findByIdAndUpdate(
            req.params.id,
            { name, description, price, stock, color, images, size },
            { new: true, runValidators: true } // Return updated doc & validate
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error while updating the product", error });
    }
});
app.get('/get-product/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        res.json({ message: "Product found", product });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.post('/upload-img', upload.array('image'), async (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({
            success: false,
            message: "No image files uploaded"
        });
    }
    try {
        const uploadPromises = req.files.map(file => cloudinary.uploader.upload(file.path));
        const results = await Promise.all(uploadPromises);

        res.status(200).json({
            success: true,
            message: "Images uploaded successfully",
            urls: results.map(result => result.secure_url)
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error while uploading images"
        });
    }
});


export default app;




