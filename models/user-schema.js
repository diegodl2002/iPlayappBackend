const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let userSchema = new Schema({
    nombre: {
        type: String
    },
    fecha: {
        type: Date
    },
    falla: {
        type: String
    },
    equipo: {
        type: String
    },
    estadoorden: {
        type: String
    }
}, {
        collection: 'users'
    })
module.exports = mongoose.model('User', userSchema)