// // Questão 1

// function gerar_option (dados) {
//     $.each(dados, function (indice, elemento) { 
//         $("#paises").html($("#paises").html() + '<option value="p' + indice + '">'+ elemento.name + "</option>");
//     });
// }

// function pegar_paises (callback) {
//     $.ajax({
//         url: "https://restcountries.eu/rest/v2/all",
//         type: "GET",
//         dataType: "json",
//         success: function (response) {
//             callback(response);
//         },
//         error: function () {
//             console.log("Erro na requisição.")
//         }
//     });
// }

// pegar_paises(gerar_option);

// // Questão 2

// var cursos = [
//     {
//         "titulo": "PHP",
//         "aval": []
//     },
//     {
//         "titulo": "Javascript",
//         "aval": [5,5,4.5,4,5,5,5,4.5]
//     },
//     {
//         "titulo": "Python",
//         "aval": [5,5,4,4,5,3,5,4,4,5]
//     },
//     {
//         "titulo": "Machine Learning",
//         "aval": [5,5,4.5]
//     }
// ];

// function media_aval (lista_cursos) {
//     var soma;
//     $.each(lista_cursos, function (indice, elemento) { 
//         soma = 0;
//         try {
//             if (elemento.aval.length == 0) {
//                 throw "Curso não possui nenhuma avaliação."
//             } else if (elemento.aval.length < 5) {
//                 throw "Curso não tem avaliações suficientes."
//             }

//             $.each(elemento.aval, function (indice, nota) {
//                 soma += nota;
//             });

//             soma /= elemento.aval.length;
            
//             console.log("A média de avaliações do curso " + elemento.titulo + " é " + soma + ".");
        
            
//         } catch (err) {
//             console.log(err);
//         }
//     });
// }

// media_aval(cursos);

// // Questão 3
// var controle = {
//     usuarios : {
//         "33884h": "João Gomes",
//         "43585f": "Maria Luisa",
//         "93661h": "Pedro Henrique",
//         "23172g": "Paula Carvalho",
//     },
//     acessos : [
//         {
//             "usuario": "33884h",
//             "data": "10/07/18"
//         },
//         {
//             "usuario": "33884h",
//             "data": "11/07/18"
//         },
//         {
//             "usuario": "43585f",
//             "data": "19/07/18"
//         },
//         {
//             "usuario": "93661h",
//             "data": "24/07/18"
//         },
//         {
//             "usuario": "23172g",
//             "data": "13/08/18"
//         },
//         {
//             "usuario": "93661h",
//             "data": "14/08/18"
//         }
//     ], 
//     lista_acessos: function () {
//         $.each(this.acessos, function (indice, elemento) { 
//             try {
//                 if (!controle.usuarios[elemento.usuario]) {
//                     throw "Usuário não registrado."
//                 }

//                 // Formato da listagem de acesso:  "Acesso de Eduardo Jorge, no dia 13/07/18"
//                 $("#acessos").html($("#acessos").html() + "<li>Acesso de " + controle.usuarios[elemento.usuario] + ", no dia " + elemento.data + ".</li>");
//             } catch (erro) {
//                 console.log(erro);
//             }
//         });
//     }
// };

// controle.lista_acessos();

// Questão 4 - Desafio
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function gerador_quiz (callback) {
    $.ajax({
        url: "https://opentdb.com/api.php?amount=1&category=11",
        type: "GET",
        dataType: "json",
        success: function (response) {
            callback(response);
        },
        error: function () {
            console.log("Erro na requisição.")
        }
    });
}

function montador_quiz (quiz_obj) {
    // var jump = 0;
    $("#pergunta").html(quiz_obj.results[0].question);
    // val_resposta_certa = Math.floor(Math.random() * 4);
    // console.log(val_resposta_certa);
    var resposta_certa = quiz_obj.results[0].correct_answer;
    var respostas = quiz_obj.results[0].incorrect_answers;
    respostas.push(resposta_certa);
    respostas = shuffle(respostas);
    
    for (let i = 0; i < respostas.length; i++) {
        $("#area-quiz").append('<input type="radio" name="quiz" value="' + respostas[i] + '" > ' + respostas[i] + '<br>');
    }


    // <span><input type="radio" name="quiz" value="' + indice + '" checked> Masculino</span><br>
    
    // for (var i = 0; i <= quiz_obj.results[0].incorrect_answers.length; i++) {
    //     if (i == val_resposta_certa) {
    //         $("#area-quiz").append('<input type="radio" name="quiz" value="' + i + '" > ' + resposta_certa + '<br>');
    //         jump++;
    //     } else {
    //         $("#area-quiz").append('<input type="radio" name="quiz" value="' + i + '" > ' + quiz_obj.results[0].incorrect_answers[i - jump] + '<br>');
    //     }
    // }

    // 
    // $("#pergunta").html(quiz_obj.results[0].question);
    // val_resposta_certa = quiz_obj.results[0].correct_answer;
    // $("#area-quiz").append('<input type="radio" name="quiz" value="True" > True <br>');
    // $("#area-quiz").append('<input type="radio" name="quiz" value="False" > False <br>');
     
    $("input[name='quiz']").click(function () { 
        $("#conferir-resposta").show();
    });
    
    $("#conferir-resposta").click(function () { 
        if ($("input[name='quiz']:checked").val() == resposta_certa) {
            $("#resposta").css("color", "green").html("Você acertou, parabéns!")
        } else {
            $("#resposta").css("color", "red").html("Você errou, que pena. A resposta certa era " + resposta_certa);
        }
        $(this).hide();
        $("input[name='quiz']").attr("disabled", true);
        $("#nova-pergunta").show();
    });
}

$("#nova-pergunta").click(function () {
    $("#pergunta").html("");
    $("#area-quiz").html("");
    $("#resposta").html("");
    $(this).hide();
    gerador_quiz(montador_quiz);
});

$(document).ready(function () {

    // $("input[name='quiz']").ready(function () { 
    //     $("input[name='quiz']").click(function () { 
    //         $("#conferir-resposta").show();
    //     });
    // });
    

    gerador_quiz(montador_quiz);
});