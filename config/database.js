const mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log('Connected Database Successfull');
}).catch(error=>{
     console.log(error);
});

