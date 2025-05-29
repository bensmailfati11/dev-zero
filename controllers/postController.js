const { default: mongoose } = require("mongoose");

exports.getAllPosts = (req, res) => {
  try {
    const users = mongoose.model.getAllPosts();
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ message: "failed to fetch all posts" });
  }
};
exports.getPostById = (req, res) => {
  /* return post by ID */
};
exports.createPost = (req, res) => {
  /* create a post */
};
exports.updatePost = (req, res) => {
  /* update a post */
};
exports.deletePost = (req, res) => {
  /* delete a post */
};
