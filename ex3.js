// Questão 1

var campo_temp = document.getElementById("temp_celsius");
var botao_temp = document.getElementById("converter");
var caixa_temp = document.getElementById("temp_fahr");

botao_temp.onclick = function () {
    var graus_fahrenheit = ((9 * parseFloat(campo_temp.value)) / 5) + 32;
    caixa_temp.innerHTML = graus_fahrenheit;
};

// Questão 2

var lista_copa = document.getElementById("anos_copa");
lista_copa.innerHTML = "";

for (var ano = 1930; ano <= 2018; ano += 4) {
    lista_copa.innerHTML += '<li> ' + ano + '</li>';
}

// Questão 3

/* Aprovado se tiver 70% de presença em 20 aulas = 14 aulas presente = no máximo 6 faltas
Aprovado com média maior que 6.5
*/

var campo_n1 = document.getElementById("nota1");
var campo_n2 = document.getElementById("nota2");
var campo_faltas = document.getElementById("n_faltas");
var botao_aluno = document.getElementById("calcular");
var lugar_result = document.getElementById("result");


botao_aluno.onclick = function () {
    var n1 = parseFloat(campo_n1.value);
    var n2 = parseFloat(campo_n2.value);
    var faltas = parseFloat(campo_faltas.value);

    var media = (n1 + n2) / 2;
    if (media >= 6.5 && faltas <= 6) {
        lugar_result.innerHTML = "<strong> Aluno aprovado. </strong>"
    } else {
        if (media < 6.5 && faltas > 6) {
            lugar_result.innerHTML = "<strong> Aluno reprovado por média insuficiente e por faltas. </strong>"
        } else {
            if (faltas > 6) {
                lugar_result.innerHTML = "<strong> Aluno reprovado por faltas. </strong>"
            } else {
                lugar_result.innerHTML = "<strong> Aluno reprovado por média insuficiente. </strong>"
            }
        }
    }
}

// Questão 4

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

var corpo_tabela_vendas = document.getElementById("vendas_cursos");
var total_vendas_tabela = document.getElementById("total_vendas");
corpo_tabela_vendas.innerHTML = "";
var lista_tabela = "";
var t_vendas = 0;
for (var v = 0; v < vendas_cursos.length; v++) {
    if (vendas_cursos[v].reembolso == null) {
        lista_tabela +=    "<tr>";
        lista_tabela +=        "<td>" + vendas_cursos[v].aluno + "</td>";//<td>" + vendas_cursos[v].data + "</td><td>" + vendas_cursos[v].valor + "</td>";
        lista_tabela +=        "<td>" + vendas_cursos[v].data + "</td>";
        lista_tabela +=        "<td>" + vendas_cursos[v].valor + "</td>";
        lista_tabela +=    "</tr>";
        t_vendas += vendas_cursos[v].valor;
    }
}

corpo_tabela_vendas.innerHTML += lista_tabela;
total_vendas_tabela.innerHTML = t_vendas;
