const User = require("../../models/user")

const updateShuffle = async (req, res) => {
  try{
    const user = await User.findById(req.user.id).select("-refreshToken -password");
    user.isShuffle = !user.isShuffle;
    await user.save();

    res.send({ isShuffle: user.isShuffle }); 
  }catch{
    res.status(500).json({ message: "SERVER_ERROR" });
  }
}

module.exports = updateShuffle;