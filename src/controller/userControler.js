
// 1° Passo - importar o userModel
const userModel = require('../model/userModel')

//Função do controller que lista os usuarios
const getAllUsers = (req, res) => {
    // Chamando a Função findAll do model
    const users = userModel.findAll()
    //Devolver uma resposta para o cliente
    res.status(200).json(users)
}

module.exports = {
    getAllUsers
}