const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongoose Connected");
    }).catch((error) => {
        console.log(error);
    });
}

module.exports = connectDatabase;