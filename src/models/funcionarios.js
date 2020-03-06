const mongoose = require ('mongoose');

const mongoosePaginate = require ('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    rgf: {
        type: Number,
        required: true,
        min: 1,
        max: 999999,
        unique: true
    },
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlenght: 3,
        maxlenght: 100
    },
    cargo: {
        type: String,
        required: true,
        uppercase: true,
        minlenght: 3,
        maxlenght: 150
    },
    rendimentos: {
        type: Number,
        required: true,
        min: 1,
        max: 9999999999,
    }
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('Funcionario', UserSchema);