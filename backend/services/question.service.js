const { ObjectId } = require("mongodb");

const mongo = require("../shared/mongo");

const service = {
  getQuestions() {
    return mongo.db.collection("questions").find().toArray();
  },
};

module.exports = service;
