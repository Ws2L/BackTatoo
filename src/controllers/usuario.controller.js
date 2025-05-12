import usuario from '../models/usuario.js'

class usuarioController {
    async store(req, res) {
        const { nome, email, senha } = req.body
        try {
            const usuario = await usuario.create({ nome, email, senha })
            return res.status(201).json(usuario)
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar usuário' })
        }
    }

    async index(req, res) {
        try {
            const usuarios = await usuario.findAll()
            return res.status(200).json(usuarios)
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao listar usuários' })
        }
    }
}

export default new usuarioController()