const router = require("express").Router();
const UserController = require("../Controllers/user.controller");
const UserMiddleware = require("../Middlewares/user.middleware");
const ProductController = require("../Controllers/product.controller");
// router.get('/', (req, res) => {
//     res.render('index');
// });

//render vào trang login
router.get("/", UserController.renderLogin);
router.post("/login", UserController.login);
//khi login thì nó render qua trang welcome
router.get(
  "/index2",
  UserMiddleware.authMiddleware,
  UserController.renderWelcome
);
router.get("/logout", UserController.logout);

//products
//create
router.get(
  "/product/index",
  UserMiddleware.authMiddleware,
  ProductController.getAllProduct
);
router.post(
  "/products/create",
  UserMiddleware.authMiddleware,
  ProductController.createProduct
);
// Route để hiển thị form tạo sản phẩm
router.get("/products/create", (req, res) => {
  res.render("createProduct"); // Render trang tạo sản phẩm mới
});

// Route để hiển thị thông tin chi tiết sản phẩm
router.get("/products/:productId", ProductController.getProductDetail);

//edit and update
router.get('/products/:id/edit',UserController.authMiddleware, ProductController.getEditProduct);

//delete
router.post('/products/:id/delete',UserController.authMiddleware, ProductController.deleteProduct)
module.exports = router;
