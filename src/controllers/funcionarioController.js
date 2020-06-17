const mongoose = require ('mongoose');
const Funcionario = mongoose.model('Funcionario');

module.exports = {
    async insert (req, res){
        const funcionarios = await Funcionario.create(req.body);
        return res.json(funcionarios);
    },
    async index (req, res){
        const { page } = req.query;

        const funcionarios = await Funcionario.paginate({}, {page, limit: 5});

        return res.json(funcionarios);
    },
    async details (req, res){
        const nome = req.params.nome;
        const funcionarios = await Funcionario.findOne({nome}, function (err, item){ });
        return res.json(funcionarios);
    }
}