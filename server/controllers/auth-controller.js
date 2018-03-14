const User = require("../models/user-model");

module.exports = {
  register: async (req, res) => {
    try {
      const user = await User.create({
        email: req.body.email,
        password: req.body.password
      });

      res.status(201).json({
        success: true,
        user: user
      });
    } catch (error) {
      res.status(201).json({
        success: true,
        user: user
      });
    }
  },

  login: async (req, res) => {
    try {
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
      });

      res.status(200).json({
        success: true,
        user: user
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error
      });
    }
  }
};
