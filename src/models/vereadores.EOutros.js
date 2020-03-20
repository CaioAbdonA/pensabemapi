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
    vencimentos: {
        type: Number,
        required: true,
        min: 1,
        max: 9999999999,
    },
    outrosVencimentos: {
        type: Number,
        min: 1,
        max: 9999999999,
    },
    totalBruto: {
        type: Number,
        min: 1,
        max: 9999999999,
    },
    previdencia: {
        type: Number,
        min: 1,
        max: 9999999999,
    },
    irrf: {
        type: Number,
        min: 1,
        max: 9999999999,
    },
    outrosDescontos: {
        type: Number,
        min: 1,
        max: 9999999999,
    },
    totalDescontos: {
        type: Number,
        min: 1,
        max: 9999999999,
    },
    totalLiquido: {
        type: Number,
        min: 1,
        max: 9999999999,
    }
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('VereadoresEOutros', UserSchema);