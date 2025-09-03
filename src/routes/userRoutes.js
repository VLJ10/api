
// 1° Passo - importar o express
const express = require('express')

// 2° passo - criar um router e importar o controller de usuario
const router = express.Router()
const userController = require('../controller/userControler')

// 3° Passo - criar as rotas dos usuarios
router.get('/list', userController.getAllUsers)

module.exports = router