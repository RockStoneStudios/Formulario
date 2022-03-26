const Usuario = require('../model/Usuario');

const registrar = async (req,res)=>{
      const {nombre,email,cc,telefono} = req.body;
      if([nombre,email,cc,telefono].includes('')) {
          return res.status(300).json({message : "Todos los campos son Obligatorios"});
      }
      const usuario = await Usuario.findOne({email});
      if(usuario){
          return res.status(403).json({message : "Email ya esta en Uso"});
      }
       const nuevoUsuario = new Usuario(req.body);
       await nuevoUsuario.save();
      return res.status(201).json({message : "Registro Exitoso"});
}

const saludar = async (req,res)=>{
    return res.status(200).json({message : "Hello World"});
}



module.exports = {
    registrar,
    saludar
}