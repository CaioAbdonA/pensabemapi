var mongoose = require('mongoose');

var funcionariosSchema = new mongoose.Schema({
    rgf: Number,
    nome: String,
    tags: [String],
    cargo: String,
    rendimentos: Number
});

var funcionariosModel = mongoose.model('funcionarios', funcionariosSchema);

module.exports = (servidores) => {
    const funcionarios = [];
    servidores.forEach(function(item){
		var funcionario = new funcionariosModel();

        funcionario.rgf = item.rgf;
        funcionario.nome = item.nome;
        funcionario.tags = item.nome.split(" ");
        funcionario.cargo = item.cargo;
        // var ponto com o uso do replace retira o ponto da string
        var ponto = item.rendimentos.replace(".", "");
        // var virgula recebe a string ja sem o ponto e troca a virgula pelo ponto para a conversão da string em double funcionar
        var virgula = ponto.replace(",", ".");
        funcionario.rendimentos = virgula;
        funcionarios.push(funcionario);
    });
    
    mongoose.connect('mongodb://localhost:27017/pensabem', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}, function(error){
	    if(!error){
            mongoose.connection.db.dropCollection('funcionarios', function(err, result) {
                console.log('Collection funcionarios dropped');
            });
	    	funcionariosModel.insertMany(funcionarios)
	    .then(function(docs){
		    console.log('Collection funcionarios adicionada, base de dados atualizada com sucesso');
		    
    	})
	    .catch(function(error){
	    	console.log(error);
		    process.exit(2);
	    });

	    }else{
	         console.log(error);
	         process.exit(1);
    	}
    });

}