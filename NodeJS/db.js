const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // await mongoose.connect('mongodb://localhost:27017/CrudDB');   Somehow, this dosent work.
        await mongoose.connect('mongodb://127.0.0.1:27017/CrudDB');
        console.log('MongoDB connection succeeded.');
    } catch (err) {
        console.log('Error occurred: ' + JSON.stringify(err, undefined, 2));
    }
};

connectDB();

module.exports = mongoose;

