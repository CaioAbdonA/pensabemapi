const mongoose = require ('mongoose');
const Vereadores = mongoose.model('VereadoresEOutros');

module.exports = {
    async insert (req, res){
        const vereadores = await Vereadores.create(req.body);
        return res.json(vereadores);
    },
    async index (req, res){
        const { page } = req.query;

        const vereadores = await Vereadores.paginate({}, {page, limit: 5});

        return res.json(vereadores);
    },
    async details (req, res){
        const vereadores = await Vereadores.findById(req.params.id);

        return res.json(vereadores);
    }
}