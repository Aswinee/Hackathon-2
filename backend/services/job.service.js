const { ObjectId } = require("mongodb");

const mongo = require("../shared/mongo");

const service = {
  getJobs() {
    return mongo.db.collection("jobs").find().toArray();
  },
};

module.exports = service;
