const userController = require("../Controllers/user");
const userModel = require("../Models/usermodel");

class userQuery {
  async insertUserDetails(req, res, next) {
    try {
      let data = req.body;
      let oldUser = await userModel.find({
        name: data.name,
        phone: data.phone,
      });

      if (oldUser && oldUser.length > 0) {
        return res.status(409).send("user already present");
      }

      let UserData = await userModel.create(data);

      if (UserData) {
        req.body.success = UserData;
      }
      next();
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: "Internal server Error" });
    }
  }
}

module.exports = new userQuery();
