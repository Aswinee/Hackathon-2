const { ObjectId } = require("mongodb");

const mongo = require("../shared/mongo");

const service = {
  getTags() {
    return mongo.db.collection("Tags").find().toArray();
  },
};

module.exports = service;
