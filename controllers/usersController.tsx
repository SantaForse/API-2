const express = require('express')
const controller = express.Router()
let users = require('../data/simulated_database')


interface UserRequest {
    firstName: string
    lastName: string
    email: string
    password: string
}



// POST - CREATE -  SKAPA EN ANVÄNDARE
// http://localhost:5000/api/users
controller.post('/', (httpRequest, httpResponse) => {
    let user: UserRequest = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
})






module.exports = controller 