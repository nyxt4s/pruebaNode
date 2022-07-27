import { response } from 'express';
import user from '../models/users.js'

const obtenerUsuarios = (req, res) => {
    res.json({user})
}

const obtenerUsuario = (req, res) => {
    const idUsuario = Number(req.params.id);
    let usuario = user.find(user => user.id == idUsuario)
    res.json({usuario});
}

const ModificarUsuario = (req, res) => {
    const idUsuario = Number(req.params.id);
    let usuario = user.find(user => user.id == idUsuario)
    if (usuario){
        req.body 
    }
}

const EliminarUsuario = (req, res) => {
    const idUsuario = Number(req.params.id);
    let usuario = user.find(user => user.id == idUsuario)
    // users.fi


}

const GuardarUsuario = (req, res) => {
    let newUser = req.body;
    const ids = user.map(newUser => newUser.id);
    const maxID = Math.max(... ids);
    console.log('new user', newUser)

    let guardarNewUsuario ={
    // "id" : maxID + 1,
    // "nombre": newUser.nombre,
    // "edad": newUser.edad,
    // "genero": newUser.genero,
    // "intereses": newUser.Intereses 
    };

    // user = [...user, guardarNewUsuario];
    response.json(guardarNewUsuario);
}

export { 
    obtenerUsuarios,
    obtenerUsuario,
    ModificarUsuario,
    EliminarUsuario,
    GuardarUsuario 
}