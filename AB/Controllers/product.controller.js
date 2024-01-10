const Product = require('../Models/product.model');

exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.render('products/index', { products: products });
  } catch (err) {
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
};


exports.createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    // res.status(201).json(newProduct);
    res.redirect(`/products/${newProduct._id}`);
  } catch (err) {
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: 'Không tìm thấy sản phẩm !' });
    // res.json({ message: "Xoá sản phẩm thành công" });
    res.redirect('/products');
  } catch (err) {
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
};

exports.getEditProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Không tìm thấy sản phẩm !" });
    }
    // res.json(product);
    res.render('products/edit', {product})
  } catch (err) {
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ error: "Không tìm thấy sản phẩm !" });
    }
    // res.json(product);
    res.redirect(`/products/${product._id}`);
  } catch (err) {
    res.status(500).json({ error: "Lỗi máy chủ" });
  }
};