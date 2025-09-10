

// Simulaçõa de um banco de dados e memorio

let users = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 2, name: 'Roberto', email: 'roberto@gmail.com'},
    {id: 3, name: 'Josué', email: 'josue@gmail.com'}
]

//Funções que irão simular interação com banco de dados

// Função que lista todos os usuarios (comando Select)
const findAll = () => {
    return users;
}

//Função que busca um usuario por id (Comando Select + from usuarios where id = 1)
const findById = (id) => {
    return users.find(user => user.id === id)
}

//Função para adicionar um novo usuario(Comando Insert)
const create = (newUser) => {
    //Gerando o id do proximo item (usuario)
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1

    //Criando um novo usuario com o id novo
    const userWithId = {id: newId, ...newUser}

    //Adicionar o userWith no array users
    users.push(userWithId)

    //retornar o usuario cadastrado
    return userWithId
}

// função para deletar um usuario
const deleteUser = (id) => {
    // Descobrir o index do elemento para excluir
    const index = users.findIndex(user => user.id === id)

    if (index !== -1) {
        const [deleteUser] = users.splice(index,1)
        return deleteUser
    }

    return null
}

//Função para atualizar um usuario
const updateUser = (dataUser) => {

    const index = users.findIndex(user => user.id === dataUser.id)

    //Alterando os dados 
    users[index] = dataUser

    return users[index]
}
module.exports = {
    findAll,
    findById,
    create,
    deleteUser,
    updateUser
}