const mongoose = require('mongoose');
const URL = process.env.MONGODB_URI;

async function connectToDatabse(){

    await mongoose.connect(URL,{
        dbName: "leetcode-tracker"
    })
    .then(()=>{
        console.log("Database Connected")
    }
    )
    .catch((e)=>console.log(e));
}

module.exports = connectToDatabse;