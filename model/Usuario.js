const {model,Schema} = require('mongoose');


const usuarioSchema = new Schema({
     nombre : {
         type : String,
         required :true,
     },
     email : {
         type : String,
         required : true,

     },
     cc : {
         type : Number,
         required : true
     },
     
     telefono : {
         type : Number,
         required : true
     }
});


module.exports = model('Usuario',usuarioSchema);