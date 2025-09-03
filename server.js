
// Importar o modulo do express
const express = require('express')

// Importar o arquivo das rotas do usuarios
const userRoutes = require('./src/routes/userRoutes')

// Criar uma aplicação express
const app = express()



// definir a porta que o servidor irá funcionar (escutar)
const porta = 8000

// Roda de teste da API
app.get('/api', (req, res) => {
    res.send('API de Usuários está Funcionando')
})

//Configurando as rotas de usuarios
app.use('/api/users', userRoutes)


// Iniciar o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})