const app = require('./app');
const conexion = require('./config/database');

app.listen(process.env.PORT || 4000,()=>{
    console.log('Starting Port . . . '+`${process.env.PORT}`);
});
