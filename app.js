const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const UsuarioRegistrar = require('./Routes/usuario.route');


//Settings 
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

app.use(cors(corsOptions));
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Routes
app.use('/api/usuarios',UsuarioRegistrar);


module.exports = app;



