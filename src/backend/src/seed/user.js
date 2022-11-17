const mongoose = require('mongoose')
const User = require('../models/user')
require('dotenv').config()


// Data array containing seed data - documents organized by Model
var data = [
    {
        firstName: 'Lyorrei',
        lastName: 'Shono Quintão',
        email: 'lyorrei.quintao@sou.inteli.edu.br',
        password: '12345678',
        admin: true,
    },
]

// Connect to MongoDB via Mongoose
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const addUser = async () => {
    for (let i in data) {
        try {
            const user = new User(data[i])
            await user.save()
            console.log("Usuário adicionado ao banco de dados")
        }
       
        catch (err) {
            console.log(err)
        }
    }
}

addUser()

