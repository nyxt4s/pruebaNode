import express from 'express'
import {obtenerUsuario,
        obtenerUsuarios,
        ModificarUsuario,
        EliminarUsuario,
        GuardarUsuario} from '../Controllers/userControllers.js';

const router = express.Router();

// http://localhost:3000/api/modificarUsuario/1
router.get('/obtenerUsuarios', obtenerUsuarios);
router.get('/obtenerUsuario', obtenerUsuario);
router.put('/ModificarUsuario/:id', ModificarUsuario);
router.delete('/borrarUsuario/:id', EliminarUsuario);
router.post('/guardarUsuario', GuardarUsuario);

export default router;