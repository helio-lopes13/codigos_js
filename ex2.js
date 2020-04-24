// Questão 1

// console.log("Questão 1)");

var num1 = parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);

var result = num1 + num2;
document.getElementById("resultado").innerHTML = '<strong>' + result + '</strong>';

// Questão 2

// console.log("Questão 2)");

function conversaoCelsiusFahrenheit(graus_celsius) {
    var graus_fahrenheit = ((9 * graus_celsius) / 5) + 32;
    return graus_fahrenheit;
}

var grau_c = parseFloat(document.getElementById("caixa_azul").innerHTML);
var grau_f = conversaoCelsiusFahrenheit(grau_c);

document.getElementById("caixa_amarela").innerHTML = grau_f;

// Questão 3

var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];

var novos_grupos = grupos.slice(-2);

novos_grupos.push(["Mariana", "Felipe", "Carla"]);
console.log(novos_grupos);

// Questão 4

var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'total_avaliacoes' : function () {
        var total = this.n_aval_1_estrela + this.n_aval_2_estrelas + this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
        return total;
    },
    'media_avaliacoes' : function () {
        var media = (this.n_aval_1_estrela + this.n_aval_2_estrelas * 2 + this.n_aval_3_estrelas * 3 + this.n_aval_4_estrelas * 4 + this.n_aval_5_estrelas * 5) / this.total_avaliacoes();
        return media;
    }
};

// a)

var c_principal = curso.categoria[0];
document.getElementById("categoria_principal").innerHTML = '<strong>' + c_principal + '</strong>';

// b)

document.getElementById("total_aval").innerHTML = curso.total_avaliacoes();
document.getElementById("media_aval").innerHTML = curso.media_avaliacoes().toFixed(2);

// Questão 5

var pessoa = {
    'nome': "Karina",
    'sobrenome' : "Marques de Andrade",
    'email' : "kmandrade@gmail.com"
}

function retornoTabelaHTML(obj_p) {
    var tabela_html = '<div class="tableBox">';
    tabela_html +=      '<table>';
    tabela_html +=          '<tr>';
    tabela_html +=              '<th>Nome Completo</th>';
    tabela_html +=              '<th>Email</th>';
    tabela_html +=          '</tr>';
    tabela_html +=          '<tr>';
    tabela_html +=              '<td>' + obj_p.nome + ' ' + obj_p.sobrenome + '</td>';
    tabela_html +=              '<td>' + obj_p.email + '</td>';
    tabela_html +=          '</tr>';
    tabela_html +=      '</table>';
    tabela_html +=    '</div>';
    return tabela_html;
}

document.getElementById("tabela").innerHTML = retornoTabelaHTML(pessoa);