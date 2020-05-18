// $(document).ready(function () {
    


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

    // Aula 24 - BOM

    // window.onmousemove = function(e) {
    //     if (e.pageY < 5) {
    //         alert("Já vai? Calma, espere para ver os nossos produtos!!!");
    //     }
    // };

    // Aula 25 - Local Storage

    // window.localStorage.setItem("nome", "Johann");

    // console.log(window.localStorage["nome"]);

    // localStorage.removeItem("nome");

    // console.log(window.localStorage["nome"]);

    // document.getElementById("enviar-nome").onclick = function() {
    //     // Guardar nome no LocalStorage
    //     var nome = document.getElementById("nome-usuario").value;
    //     window.localStorage.setItem("nome", nome);

    //     // Esconder formulário
    //     document.getElementById("name-field").style.display = "none";
        
    //     // Mudar mensagem de boas vindas
    //     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage["nome"] + ", tudo bem?";
    //     document.getElementById("not-me").innerHTML = "Não é " + localStorage["nome"] + "?";
        
    //     // Mostrar mensagem de boas vindas
    //     document.getElementById("welcome-area").style.display = "initial";
    // }

    // document.getElementById("not-me").onclick = function () {
    //     // Remover nome do localStorage
    //     window.localStorage.removeItem("nome");

    //     // Esconder mensagem de boas vindas
    //     document.getElementById("welcome-area").style.display = "none";

    //     // Mostrar formulário
    //     document.getElementById("name-field").style.display = "initial";
    // }

    // if (localStorage.nome) {
    //     // Esconder formulário
    //     document.getElementById("name-field").style.display = "none";

    //     // Mudar mensagem de boas vindas
    //     document.getElementById("welcome-text").innerHTML = "Olá " + localStorage["nome"] + ", tudo bem?";
    //     document.getElementById("not-me").innerHTML = "Não é " + localStorage["nome"] + "?";

    //     // Mostrar mensagem de boas vindas
    //     document.getElementById("welcome-area").style.display = "initial";
    // }

    // Aula 26 - Data e Hora

    // var data_hoje = new Date();

    // console.log(data_hoje.getDate());

    // var data_nascimento = "10/14/1998";

    // var ano_nascimento = new Date("10/14/1998").getFullYear();
    // var ano_atual = new Date().getFullYear();

    // var idade = ano_atual - ano_nascimento;

    // console.log(idade);

    // var data = new Date();

    // console.log(data.getTime() / 31536000000);

    // var data_envio = new Date("20 Mar 2018");
    // var data_entrega = new Date("06 Apr 2018");

    // var dias_ms = data_entrega.getTime() - data_envio.getTime();
    // var dias_ms = dias_ms / 86400000;

    // document.getElementById("dias_entrega").innerHTML = dias_ms + " dias";

    // Aula 27 - Métodos de tempo

    // console.log("Message 1");

    // window.setTimeout(function() {
    //     console.log("Mensagem 2");
    // }, 3000);

    // document.getElementById("mostrar-loader").onclick = function () {
    //     document.getElementById("spinner-loader").style.display = "initial";
    //     window.setTimeout(function() {
    //         document.getElementById("spinner-loader").style.display = "none";
    //     },5000);
    // };

    // var count = 0;

    // var periodo = window.setInterval(function () {
    //     console.log(count);
    //     count++;
    //     if (count >= 10) {
    //         clearInterval(periodo);
    //     }
    // }, 1000);

    // Desafio do relógio

    // window.setInterval(function () {
    //     var data = new Date();

    //     function formatar_tempo(tempo) {
    //         if (tempo >= 0 && tempo <= 9) {
    //             var tempo_formatado = tempo.toString();
    //             tempo_formatado = '0' + tempo_formatado;
    //         } else {
    //             var tempo_formatado = tempo.toString();
    //         }
    //         return tempo_formatado;
    //     }

    //     document.getElementById("relogio").innerHTML = formatar_tempo(data.getHours()) +":"+ formatar_tempo(data.getMinutes()) +":"+ formatar_tempo(data.getSeconds()); 
    // }, 1000);

    // Aula 28 - Switch

    // function valor_pedagio (categoria) {
    //     switch (categoria) {
    //         case "1":
    //             return 11.22;
    //             break;

    //         case "2":
    //             return 22.45;
    //             break;

    //         case "3":
    //             return 16.88;
    //             break;

    //         case "4":
    //             return 33.65;
    //             break;
            
    //         default:
    //             return "Categoria não encontrada";
    //     }
    // }

    // var cat_veiculo = "3";
    // console.log(valor_pedagio(cat_veiculo));

    // cat_veiculo = "2";
    // console.log(valor_pedagio(cat_veiculo));

    // cat_veiculo = "%";
    // console.log(valor_pedagio(cat_veiculo));

    // Aula 29 - Break e continue

    // var x = 0;

    // while (x < 10) {
    //     console.log(x);
    //     x++;
    //     if (x == 5) {
    //         break;
    //     }
    // }

    // var lista = [1, 2, 54, 64, 80, 91, 105, 128, 172, 195, 285, 366, 397, 426, 458, 490];

    // for (var a = 0; a < lista.length; a++) {
    //     if (lista[a] == 172) {
    //         console.log("Valor encontrado.");
    //         break;
    //     }
    //     console.log("Tentativa " + a)
    // }

    // var num = 0;

    // while (num < 20) {
    //     num++;
    //     if (num % 2 == 0) {
    //         continue;
    //     }
    //     console.log(num);
    // }

    // Aula 30 - Formulários

    // Select box

    // document.getElementById("mostrar_opcao").onclick = function () {
    //     // var campo_select = document.getElementById("options");
    //     // var indice_selecionado = campo_select.options.selectedIndex;
    //     // var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    //     // document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
        
    //     var valor_selecionado = document.getElementById("options").value;
    //     document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
    // };

    // // Radio buttons

    // document.getElementById("mostrar_radio").onclick = function () {
        //     var radio = document.getElementsByName("genero");
        //     var radio_selected;
        
        //     for (var a = 0; a < radio.length; a++) {
            //         if (radio[a].checked) {
                //             radio_selected = radio[a].value;
                //             break;
    //         }
    //     }

    //     document.getElementById("radio_selecionado").innerHTML = radio_selected;
    // };

    // // Check boxes

    // document.getElementById("mostrar_check").onclick = function () {
        //     var check = document.getElementsByName("interesse");
    //     var check_selected = "";
    //     document.getElementById("check_selecionado").innerHTML = check_selected;

    //     for (var b = 0; b < check.length; b++) {
        //         if (check[b].checked) {
            //             check_selected += "<li>" + check[b].value + "</li>";
            //         }
    //     }

    //     document.getElementById("check_selecionado").innerHTML = check_selected;
    // };

    // // Input de data

    // document.getElementById("mostrar_data").onclick = function () {
    //     var data_select = document.getElementById("data_evento").value;
    //     var data_completa = new Date(data_select);
    //     document.getElementById("data_selecionada").innerHTML = data_completa;
    // };

    // Aula 31 - Evento onchange

    // document.getElementById("escolaridade").onchange = function () {
    //     var campo_select = document.getElementById("escolaridade");
    //     var indice_selecionado = campo_select.options.selectedIndex;
    //     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    //     document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;
        
    //     // var valor_selecionado = document.getElementById("options").value;
    //     // document.getElementById("opcao_selecionada").innerHTML = valor_selecionado;
    // };

    // var check = document.getElementsByName("lanche");
    // for (var a = 0; a < check.length; a++) {
    //     check[a].onchange = function () {
    //         document.getElementById("check_selecionado").innerHTML = "";
    //         for (var b = 0; b < check.length; b++) {
    //             if (check[b].checked) {
    //                 document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
    //             }
    //         }
    //     }
    // }

    // Aula 33 - JQuery - Intro

    // Só a introdução e instalação da biblioteca JQuery, que deixa o uso do Javascript mais prático.

    // Aula 34 - JQuery -  Sintaxe

    // Forma de escrever em Vanilla Javascript (JS tradicional)
    // document.getElementById("exemplo").innerHTML = "Olá";

    // Forma de escrever em jQuery
    // $(".exemplo").html("Olá");

    // $("#esconder").click(function () {
    //     $(".exemplo").hide();
    // });

    // Aula 35 - JQuery - Manipulação de HTML

    // var conteudo_html = $("#paragrafo-html").text();
    // console.log(conteudo_html);

    // var conteudo_html = $("#paragrafo-html").html("Mudança de hábito.");
    // var conteudo_html = $("#paragrafo-html").text();
    // console.log(conteudo_html);

    // var url_link = $("#paragrafo-link").attr("href");
    // console.log(url_link);

    // $("#paragrafo-link").attr("href", "http://www.udemy.com");
    // url_link = $("#paragrafo-link").attr("href");
    // console.log(url_link);

    // $("#mudar_imagem").click(function(){
    //     $("#imagem_js").attr("src", "https://cdn.tutsplus.com/net/uploads/2013/12/managing-async-nodejs-retina-preview.png");
    //     $("#mudar_imagem").hide();
    // });

    // $("#paragrafo-empty").empty();

    // $("#paragrafo-empty").remove();

    // Aula 36 - JQuery - Loop Each

    // var lista = ["HTML", "CSS", "Javascript", "jQuery", "PHP"];

    // $.each(lista, function (indice, elemento) { 
    //      console.log("O elemento de índice " + indice + " tem o valor de " + elemento + ".");
    // });

    // var pessoa = {
    //     'nome': 'João Pedro',
    //     'DN': '20/01/1990',
    //     'CPF': '111.111.111-11'
    // };

    // $.each(pessoa, function( chave, valor ) {
    //     console.log('O elemento de chave [' + chave + '] tem o valor de ' + valor);
    // });

    // var lista_itens = $("#interesses li");

    // $.each(lista_itens, function (chave, valor) {
    //     console.log("O valor do item " + chave + " é " + $(valor).html());
    // });

    // Aula 37 - JQuery - Formulários

    // var conteudo_input = $("#campo_nome").val();
    // console.log(conteudo_input);

    // $("#options").change(function(){
    //     var novo_selecionado = $('#options').find(":selected").text();
    //     console.log(novo_selecionado);
    // });

    // $("input[name='interesse']").change(function() {

    //     var checkboxes_selecionados = $("input[name='interesse']:checked");
    //     var textos = [];

    //     $.each(checkboxes_selecionados, function( index, value ) {
            
    //         textos.push($(value).parent("span").text());
        
    //     });
        
    //     console.log(textos);
        
    // });

    // Aula 38 - JQuery - Manipulação de classes CSS

    // $("#adicionar_classe").click(function () { 
    //     $("#paragrafo-classes").addClass("styling");
    // });

    // $("#remover_classe").click(function () { 
    //     $("#paragrafo-classes").removeClass("styling");
    // });

    // $("#alternar_classe").click(function () { 
    //     $("#paragrafo-classes").toggleClass("styling");
    // });

    // Aula 39 - JQuery - Eventos

    // $("#nome").keyup( function () {
    //     var conteudo = $("#nome").val();
    //     console.log("Meu nome é " + conteudo);
    //     if (conteudo) {
    //         $("#confirmar").css("display", "initial");
    //     } else {
    //         $("#confirmar").hide();
    //     }
    // });

    // Aula 40 - JQuery - Efeitos

    // $("#botao-esconder").click(function () {
    //     $(this).hide(1000, function () {
    //         $("#texto-escondido").show(); 
    //     });
    // });

    // $("#toggle-tab").click(function () {
    //     $("#tab-content").slideToggle();
    //     $(this).toggleClass("flip");
    // });

    // Aula 41/42 - JQuery - Animate/Métodos em cadeia

    // $("#animar").click(function () {
    //     $("#quadrado")
    //         .animate({
    //             paddingLeft: "+=200px"
    //         }, 800)
    //         .animate({
    //             height: "+=200px"
    //         }, 800, function () {
    //             $("#quadrado").css("background-color", "green");
    //     });
    // });

    // Aula 43 - Funções callback

    // function pegar_usuario (callback) {
    //     window.setTimeout(function () {
    //         var u = {
    //             'nome' : 'Guilherme'
    //         };
    
    //         callback(u);
    //     }, 2000);
        
    // }

    // pegar_usuario(function (user) {
    //     console.log('Oi ' + user.nome + " tudo beimmm???");
    // });
    
    // Aula 44 - Error handling - lidando com erros

    // function pegar_usuario(){

    //     window.setTimeout(function(){
    //         var u = {
    //             'nome': 'João'
    //         };
    //         return u;
    //     }, 1000);
        
    // }
            
    // function saudar_usuario(user) {
    //     console.log('Olá ' + user.nome + ', como vai?');
    // }
            
    // var user = {'nome': ''};
    
    // try {
    //     if (user.nome == '') {
    //         throw "Nome em branco, favor inserir o nome.";
    //     }

    //     saudar_usuario(user);
    // } catch(err) {
    //     console.log(err);
    // }

    // Aula 45 - If ternário

    // condição ? "valor se for verdadeiro" : "valor se for falso";

    // Exemplo com if normal:
    // var nome = "", mensagem, idade;

    // if (nome) {
    //     var mensagem = "Olá " + nome;
    // } else {
    //     var mensagem = "Nome não informado";
    // }

    // Exemplo com if ternário:

    // nome ? mensagem = "Olá " + nome : mensagem = "Nome não informado";
    // console.log(mensagem);
    
    // Ou ainda mais simples:
    
    // mensagem = nome ? "Olá " + nome : "Nome não informado";
    // console.log(mensagem);

    // mensagem = (nome && idade) ? "Olá " + nome + ".\nVocê tem " + idade + " anos."
    //     : (!(nome || idade)) ? "Nome e idade não informados."
    //         : (!idade) ? "Idade não informada."
    //             : "Nome não informado.";
    
    // console.log(mensagem);

    // Aula 46 - Escopo

    // function criar_nome () {
    //     nome = "Maria";
    //     console.log(nome);
    // }
    
    // criar_nome();
    
    // console.log(window.nome);

    // var x = 0;

    // if (x == 0) {
    //     let nome = "Mariana";
    // }

    // console.log(nome);

    // for (let a = 0; a < 10; a += 0.1) {
    //     console.log(a);
    // }

    // const PI = "3.14159";
    // PI = 0;

    // Aula 46 - Namespaces

    // var meuWebApp = {
    //     'nome': "Felipe",
        
    //     'ver_nome' : function () {
    //         console.log(this.nome);
    //     }
    // };

    // var meuWebApp = (function (){
    //     var nome = "Felipe";

    //     return {
    //         'ver_nome': function () {
    //             return nome;
    //         },
    //         'mudar_nome': function (novo_nome) {
    //             nome = novo_nome;
    //         },
    //         'apagar_nome': function () {
    //             nome = null;
    //         }
    //     }
    // })();

    // meuWebApp.mudar_nome("Karina");
    // console.log(meuWebApp.ver_nome());

    // meuWebApp.apagar_nome();
    // console.log(meuWebApp.ver_nome());

    // Aula 47 - JSON

    // var funcionario = {
    //     'nome': "Fernanda Costa",
    //     'd_nascimento': '1988-10-01',
    //     'CPF': '111.111.111-11'
    // };

    // var funcionario_json = JSON.stringify(funcionario);

    // var funcionario_obj = JSON.parse(funcionario_json);

    // console.log(funcionario_obj.nome);

    // Aula 48 - Ajax - Intro

    // Nada de programação, só introduzindo o Ajax mesmo, é uma forma de conseguir informações de serviços externos por meio de requisições feitas ao servidor.

    // Aula 49 - Ajax - Requisição

    // var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    
    // xhttp.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(this.responseText);
    //     }
    // };

    // xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02");
    // xhttp.send();

    // Aula 50 - Ajax - Resposta

    // function mostrar_temperatura (dados) {
    //     var dados_obj = JSON.parse(dados);

    //     console.log("A temperatura em Londres é de " + dados_obj.main.temp + " graus Celsius.");
    // }
    
    // function mostrar_dados (dados) {
    //     var dados_obj = JSON.parse(dados);
    
    //     console.log(dados_obj);
    // }

    // function tempo_londres(callback) {
    //     var xhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                        
    //     xhttp.onreadystatechange = function() {
    //         if (this.readyState == 4 && this.status == 200) {
    //             callback(this.responseText);
                
    //         } 
    //     };
    //     xhttp.open("GET", "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02");
    //     xhttp.send();
    // }

    // tempo_londres(mostrar_temperatura);
    // tempo_londres(mostrar_dados);

    // Aula 51 - Ajax - jQuery

    // function inserir_temp (dados) {
    //     $("#temp_atual").html(dados.main.temp);
    //     $("#temp_max").html(dados.main.temp_max);
    //     $("#temp_min").html(dados.main.temp_min);
    // }

    // function pegar_dados (callback) {
    //     $.ajax({
    //         url: "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02",
    //         type: "GET",
    //         dataType: "json",
    //     }).done(function (response) {
    //         callback(response);
    //     }).fail(function () {
    //         console.log("Erro na requisição.");
    //     });
    // }

    // pegar_dados(inserir_temp);
    
    // success: function (response) {
    // },
    // error: function () {
    // }

    




// });