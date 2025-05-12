import express from 'express'
import dotenv from 'dotenv'
import homeRoutes from './routers/home.routers.js'
import usuarioRouter from './routers/usuario.routes.js'

dotenv.config()

class App {
    constructor() {
        this.app = express()
        this.middlawares()
        this.routes()
    }

    middlawares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.app.use('/', homeRoutes)
        this.app.use('/usuarios', usuarioRouter)
    }
}

export default new App().app