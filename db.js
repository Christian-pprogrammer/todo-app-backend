const mongoose = require('mongoose');
module.exports = async() => {
    try{
        await mongoose.connect(process.env.DB_URL , {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`db connection successfull...`);
    }catch(err) {
        console.log(`db connection not successful: ${err.message}`);
        process.exit(-1);
    }
}