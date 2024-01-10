const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    mauser: { type: Number, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: {
      type: String,
      require: true,
      unique: true, //unique chỉ ly 1 email duy nhất
      validate: {
        validator: function (v) {
          return /^\S+@\S+\.\S+$/.test(v); //kiểm tra email
        },
      },
    },
    phone: {
      type: String,
      require: true,
      validata: {
        validator: function (v) {
          return /^[0-9]{10}$/.test(v);
        },
        message: (props) => `${props.value} sdt khong hop le !`,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
