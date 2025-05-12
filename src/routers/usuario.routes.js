import { Router } from 'express'
import usuarioController from '../controllers/usuario.controller.js'

const routerUsuario = new Router()

routerUsuario.get('/', usuarioController.index)
routerUsuario.post('/', usuarioController.store)

export default routerUsuario