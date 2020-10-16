import express from 'express'
import path from 'path'
import cors from 'cors'
import 'express-async-errors'
import '.database/connection'

import routes from './routes'
import errorHandler from './erros/handler'

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

//GET = Buscar uma informação (Lista, Item)
//POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query Parans: http://localhost:3333/users?search=diego
// Route Parans: http://localhost:3333/users/1 (identificar um rescurso)
// Body:  http://localhost:3333/users (Fluxo de dados)


app.listen(3333)