const mongoose = require("mongoose");

mongoose.set("strictQuery", true);
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect true");
  } catch (error) {
    console.log("Connect Fall");
  }
}

module.exports = { connect };

// Sửa
// const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017";

// const connectToMongo = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     mongoose.connect(mongoURI);
//     console.log("Mongo connected");
//   } catch (error) {
//     console.log(error);
//     process.exit();
//   }
// };
// module.exports = connectToMongo;
