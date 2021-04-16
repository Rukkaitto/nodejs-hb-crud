const { Schema } = require("mongoose");

module.exports = (mongoose) => {
  const schema = new Schema({
    firstName: String,
    lastName: String,
  });
  const model = mongoose.model("User", schema);
  return model;
};
