
//Aula 3 - Variáveis

// var latitude = 40.87663;
// var longitude = -8.08373;
// console.log(latitude);
// console.log(longitude);

//Aula 4 - Strings

// var nome = "João";  // podem ser usadas aspas duplas
// var sobrenome = 'Gomes';  // ou aspas simples
// var cpf = '111.111.111-11';  
// var telefone = "998887655";
// var ddd = '21';
// var email = 'joao@gmail.com';
// var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

// console.log('Nome completo: '+ nome + ' ' + sobrenome);

// console.log('(' + ddd + ')' + telefone);

// console.log('Primeira letra do nome:' + nome[0]);
// console.log('Última letra do nome: ' + nome[3]);

// console.log('Número de algarismos no telefone: ' + telefone.length);

//Aula 5 - Numbers

// var num1 = 20;
// var num2 = 3;

// var soma = num1 + num2;
// var subtracao = num1 - num2;
// var divisao = num1 / num2;
// var multiplicacao = num1 * num2;

// var media = (num1 + num2) / 2;

// console.log('A média aritmética é: ' + media);

// console.log(Math.pow(num1,4));

// var increment = 20;
// increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
// console.log(increment); // O console mostrará 25

// // esta estrutura variável = variável + valor, pode ser simplificada com o operador incremental +=

// increment = 1;
// increment += 5;
// console.log(increment); // O console mostrará 6

// // podemos também usar *=, /= e -= para multiplicação, divisão e subtração

// increment = 10;
// increment++;
// increment++;
// console.log(increment);

// var telefone = 998887655;
// var ddd = 21;

// var ddd_string = ddd.toString();
// var tel_string = telefone.toString();

// console.log('(' + ddd_string + ') ' + tel_string);

// var idade = "17";

// idade = parseInt(idade);
// idade++;
// console.log(idade);

//Aula 6 - Booleans

// var idade = 65;
// var teste = idade != 65;

// console.log(teste);

// var vType = 95;
// console.log(typeof vType == 'number');

//Aula 7 - null e undefined

// var teste;
// console.log(teste);

// var nome = "Pedro";
// console.log(nome[10]);

// var temperatura = 35;
// console.log(temperatura);

// temperatura = null;
// console.log(temperatura);

// console.log(temperatura == teste);
// console.log(typeof temperatura);

// Módulo 2 - Javascript Básico - Parte 1

// Aula 10 - Trabalhando com o DOM

// var conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

// console.log(conteudo_caixa);

// document.getElementById("caixa_amarela").innerHTML = conteudo_caixa;

// conteudo_caixa = document.getElementById("caixa_azul").innerHTML;

// document.getElementById("caixa_amarela").innerHTML = '<h1>' + "Caixa amarela" + '</h1>';

// var conteudo = document.getElementById("caixa_azul").innerHTML;

// document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudo + '</h1>';

// Aula 11 - Funções

// function soma_numeros() {
//     var x = 5;
//     var y = 2;
//     var soma = x + y;
//     console.log(soma);
// }

// soma_numeros();

// function soma_args(num1, num2) {
//     var soma = num1 + num2;
//     return soma;
// }

// soma_args(10, 25);
// soma_args(1000, 257);

// var n1 = -23;
// var n2 = 42;

// var soma_f = soma_args(n1, n2);

// function valor_imc(peso, altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }

// var peso_caixa = document.getElementById('peso').innerHTML;
// peso_caixa = parseFloat(peso_caixa);

// var altura_caixa = document.getElementById('altura').innerHTML;
// altura_caixa = parseFloat(altura_caixa);

// imc_caixa = valor_imc(peso_caixa, altura_caixa);
// document.getElementById('imc').innerHTML = imc_caixa.toFixed(2);

// Aula 12 - Arrays

// var alunos = [ "João" , "Maria", "José" ];
// var num_primos = [ 2, 3, 5, 7, 11, 13 ];

// // console.log(alunos.length);
// // console.log(num_primos[3]);
// // console.log(num_primos[10]);

// var grupos = [ 
//     [ "João" , "Maria" ],
//     [ "Pedro" , "Joana", "André", "Júlio" ],
//     [ "Carolina" , "Helena", "Marcelo" ]
// ];

// console.log(grupos.length);
// console.log(grupos[1][1]);

// var ingredientes = [ "pão branco", "queijo", "presunto" ];

// ingredientes[0] = "pão integral";

// console.log(ingredientes);

// alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];

// console.log(alunos.slice(-2));

// Aula 13 - Objetos

// var funcionario = {
//     'nome': 'Pedro Souza Gomes',
//     'ano_nasc': 1972,
//     'cpf': '111.111.111.11',
//     'cargo': 'Analista de Sistemas'
// };

// console.log(funcionario['nome']);
// console.log(funcionario.ano_nasc);

// funcionario.cargo = "Gerente de T.I.";
// funcionario.cnh = "1999897663";
// console.log(funcionario);

// var cursos = [
//     {
//         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
//         'avaliacoes': 680,
//         'alunos': 2300,
//         'categorias': ['programacao', 'tecnologia']
//     },

//     {
//         'titulo': 'Aprenda PHP e faça sites dinâmicos',
//         'avaliacoes': 180,
//         'alunos': 350,
//         'categorias': ['desenvolvimento web', 'programacao']
//     },

//     {
//         'titulo': 'Excel do Zero ao Avançado',
//         'avaliacoes': 420,
//         'alunos': 1800,
//         'categorias': ['produtividade', 'gestão']
//     }

// ];

// console.log(cursos[1].categorias[0]);

// cursos[2].categorias[1] = 'administração de empresas';
// console.log(cursos[2].categorias[1]);

// Aula 14 - Métodos de Objetos

// var aluno = {
//     'nome' : 'Maria',
//     'sobrenome' : 'Pereira',
//     'ano_nasc' : 1992,
//     'nome_completo' : function () {
//         var n_completo = this.nome + " " + this.sobrenome;
//         return n_completo;
//     },
//     'idade' : function () {
//         var idade_aluno = 2020 - this.ano_nasc;
//         return idade_aluno;
//     }
// };

// console.log(aluno.nome_completo());
// console.log(aluno.idade());


// console.log( document.getElementById("tudo_obj").innerHTML );

// Módulo 3 - Javascript básico 2

// Aula 16 - Eventos

// document.getElementById("click-me").onclick = function () {
//     alert("Você clicou no botão.");
// };

// document.getElementById("hover-me").onmouseover = function () {
//     alert("Você passou com o cursor no botão.");
// };

// document.getElementById("leave-me").onmouseout = function () {
//     alert("Você saiu com o cursor do botão.");
// };

// document.onkeydown = function() {
//     alert("Você apertou alguma tecla " + event.keyCode);
// }

// function button_clicked() {
//     alert("Você clicou no botão.")
// }

// Aula 17 - Manipulação de CSS

// var botao = document.getElementById("botao_cor");
// botao.onclick = function() {
//     this.style['background-color'] = "purple";
//     this.style.transform = "translateX(100px)";
// };

// Aula 18 - Outros Métodos getElement

// var exemplo = document.getElementsByClassName("exemplo");

// exemplo[0].innerHTML = 'teste1';
// console.log(exemplo);

// var exemplo = document.getElementsByTagName("p");

// console.log(exemplo);

// Aula 19 - Loops for e for/in

// for (var a = 0; a < 5; a++) {
//     console.log(a);
// }

// var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

// for (var b = 0; b < alunos.length; b++) {
//     console.log(alunos[b]);
// }

// var carro = {
//     'Ano': 2018,
//     'Modelo': 'Fox',
//     'Cilindradas': '1.8',
//     'Combustível': 'Gasolina'
// }

// for (var prop in carro) {
//     console.log( prop + ': ' + carro[prop] );
// }

// var elementos = document.getElementsByTagName("p");

// for (var c = 0; c < elementos.length; c++) {
//     elementos[c].style.color = "orange";
//     elementos[c].style["font-weight"] = "bold";
// }

// Aula 20 - Loops while e dowhile

// var count = 0;

// while (count < 5) {
//     console.log(count);
//     count++;
// }

// var count2 = 10;

// do {
//     console.log(count2);
//     count2++;
// } while (count2 < 5);

// Aula 21 - Condicionais

// var idade = 18;

// if (idade < 18) {
//     console.log("Menor de idade.");
// } else if (idade == 18) {
//     console.log("Tem 18 anos.");
// } else {
//     console.log("Maior de idade.");
// }

// var nota = 8;
// var faltas = 1;

// if (nota >= 7 && faltas <= 4) {
//     console.log("Aprovado.")
// } else {
//     console.log("Reprovado.");
// }

// if (nota < 7 || faltas > 4) {
//     console.log("Reprovado.")
// } else {
//     console.log("Aprovado.");
// }

// var nome;

// if (nome) {
//     console.log("Nome: " + nome);
// } else {
//     console.log("Nome não informado.");
// }

// Aula 22 - Aninhamento de loops e condicionais

// var socio = true;
// var idade = 25;

// if (socio || idade >= 65) {
//     console.log("O ingresso é grátis.");
// } else {
//     if (idade < 18) {
//         console.log("Preço a pagar: R$ 6,00.")
//     } else {
//         console.log("Preço a pagar: R$ 12,00.")
//     }
// }

// var funcionarios = [
        
//     {
//         'nome': 'Carlos Henrique da Silva',
//         'idade': 45,
//         'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
//     },

//     {
//         'nome': 'Maria Helena Pereira',
//         'idade': 32,
//         'filhos': undefined
        
//     },

//     {
//         'nome': 'José Feliciano Maia',
//         'idade': 39,
//         'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
//     }

// ];

// var listaHTML = document.getElementById("filhos");
// listaHTML.innerHTML = "";

// for (var a = 0; a < funcionarios.length; a++) {
//     if (funcionarios[a].filhos) {
//         var lista_filhos = funcionarios[a].filhos;
        
//         for (var b = 0; b < lista_filhos.length; b++) {
//             listaHTML.innerHTML += '<li>' + lista_filhos[b] + ' - Filho de ' + funcionarios[a].nome + '</li>';
//         }
//     }
// }
