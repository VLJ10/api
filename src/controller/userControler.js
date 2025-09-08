
// 1° Passo - importar o userModel
const userModel = require('../model/userModel')

//Função do controller que lista os usuarios
const getAllUsers = (req, res) => {
    // Chamando a Função findAll do model
    const users = userModel.findAll()
    //Devolver uma resposta para o cliente
    res.status(200).json(users)
}

//Função do controller que obtem um usuario por ID
const getUserById = (req, res) => {

    //Pegando o ID que foi enviado na requisição
    const id = parseInt(req.params.id)

    //Chamar o metodo findById do userModel
    const user = userModel.findById(id)

    if(user){
        //Responder com status code 200 (Sucesso)
        //e devolver os dados do usuario em formato Json
        res.status(200).json(user)
    }else{
        res.status(404).json({mensagem: 'Usuario não encontrado!'})
    }
}
// Função do controller que criar um novo usuario
const createUser = (req, res) => {

    //pegando os dados que foram enviados pelo body da requisição
    const {name, email} = req.body

    //Validar os valores enviados
    if (!name || !email) {
        return res.status(400).json({mensagem: 'Nome e email são obrigatorios'})
    } else {
        const newUser = userModel.create({name, email})
        res.status(201).json(newUser)
    }
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id)   

    //Excluir o usuario e retornar
    const deleteUser = userModel.deleteUser(id)

    if(deleteUser){
        res.status(200).json(deleteUser)
    } else {
        res.status(400).json({mensagem: 'Informe o id do usuario corretamente'})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
}