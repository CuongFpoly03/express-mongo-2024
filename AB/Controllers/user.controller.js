const bcrypt = require("bcrypt");
const User = require("../Models/user.model");

//login
exports.renderLogin = (req, res) => {
  res.render("index");
};
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).end("Tên đăng nhập không tồn tại");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).end("Mật khẩu không đúng");
    }
    res.redirect("/index2");
  } catch (err) {
    res.status(500).end("loi may chu");
  }
};

exports.renderWelcome = (req, res) => {
  res.render("index2");
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).end("lỗi trong quá trình đăng xuất");
    }
    res.redirect("/");
  });
};
