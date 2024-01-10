const jwt = require('jsonwebtoken'); // mã hoá  header, payload, signature
let User = require('../Models/user.model');

const authMiddleware = async(req, res, next) => {
    try {
        const token = req.header('Authorized');
        if(!token) {
            return res.status(401).json({error : 'Unauthorized'});
        }

        const decoded = jwt.verify('token, process.env.JWT_SECRET');
        const user = await User.findById(decoded.userId);
        if(!user) {
            return res.status(404).json({error : "not found!"});
        }
        req.user = user;
        next();
    }catch(err) {
        res.status(401).json({error: "lỗi máy chủ"})
    }
}
module.exports = authMiddleware;