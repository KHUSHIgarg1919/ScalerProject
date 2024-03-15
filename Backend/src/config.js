const mongoose = require("mongoose");
module.exports = {
    mongodbUrl : process.env.mongodbUrl
};
  
// const mongoose = require("mongoose");
// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.mongodbUrl);                                      //await for connection to be established
//     console.log(`Server Running On ${mongoose.connection.host}`);           
//   } catch (error) {
//     console.log(`${error}`);
//   }
// };

// module.exports = connectDb;
