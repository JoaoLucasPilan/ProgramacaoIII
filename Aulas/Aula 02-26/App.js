const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Example app listenig on port http://localhost:${port}')
    //--------------------------------------------------------------------------------------------------------------

    class Pessoa{
        constructor(nome, email){
            this.nome = nome;
            this.email = email;
            this.telefone = '';
            this.endereco = {};
        }
    }
    //--------------------------------------------------------------------------------------------------------------

    class Cliente extends Pessoa{
        constructor(nome, email, cpf){
            super(nome, email);
            this.cpf = cpf;
            this.sobrenome = '';
        }
    }
    //--------------------------------------------------------------------------------------------------------------

    class Fornecedor extends Pessoa{
        constructor(nome, email, cnpj){
            super(nome, email);
            this.cnpj = cnpj;
            if(cnpj === undefined){
                throw new Error('Lhe falta CNPJ');
            }
            this.nomeFantasia = '';
        }
    }

    class Endereco{
        constructor(cep, rua, numero, bairro, complemento, cidade, estado){
            this.cep = cep; 
            this.rua = rua;
            this.numero = numero;
            this.bairro = bairro;
            this.complemento = complemento;
            this.cidade = cidade;
            this.estado = estado;
            if (cep === undefined) {
                throw new Error('Lhe falta CEP');
            }
        }
    }
    //----------------------------------------------------------------------------------------------------------------

    var cliente1 = new Cliente('João', 'email@gamil.com', '123.123.123-12');
    cliente1.sobrenome = 'Lucas';
    var endereco1 = new Endereco('87065450', 'Rua dourados', '401', 'PQ itaipu', 'Casa', 'Maringá', 'Paraná');
    cliente1.endereco = endereco1;

    var cliente2 = new Cliente('Pamela', 'pam@gmail.com', '321.654.987-78')
    cliente2.telefone = '44999584712';

    console.log(`\nNome: ${cliente1.nome} ${cliente1.sobrenome}\nCEP: ${cliente1.endereco.cep}\nCidade: ${cliente1.endereco.cidade}\nEstado: ${cliente1.endereco.estado}\n`);
    console.log(`Nome: ${cliente2.nome} \nEmail: ${cliente2.email} \nTelefone: ${cliente2.telefone}\n`);
    //----------------------------------------------------------------------------------------------------------------

    var fornecedor1 = new Fornecedor('Reginaldo', 'seila@gmail.com', '123.654.123.323');
    fornecedor1.nomeFantasia = 'Reginaldinho';

    var fornecedor2 = new Fornecedor('zezin', 'seila2313@gmail.com', '1213321');
    
    console.log(`Nome: ${fornecedor1.nome} \nCNPJ: ${fornecedor1.cnpj} \nNome Fantasia: ${fornecedor1.nomeFantasia}\n`)
    //----------------------------------------------------------------------------------------------------------------


})

//app.listen(port, () =>
//    console.log('Example app listenig on port http://localhost:${port}')
//)