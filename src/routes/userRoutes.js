
// 1° Passo - importar o express
const express = require('express')

// 2° passo - criar um router e importar o controller de usuario
const router = express.Router()
const userController = require('../controller/userControler')

// 3° Passo - criar as rotas dos usuarios
router.get('/list', userController.getAllUsers)

// Criando a rota que ira obter os dados do usuario por id
router.get('/:id', userController.getUserById)

//Criando uma rota que ira Criar um novo usuario
router.post('/', userController.createUser)

// Criando uma rota que ira deletar um usuario
router.delete('/:id', userController.deleteUser)
module.exports = router