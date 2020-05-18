// Questão 1

// id select: estados
document.getElementById("estados").onchange = function () {
    //Pegar índice da opção selecionada
    var estado_selected = this.options.selectedIndex;

    //Salvar item no local storage
    window.localStorage.setItem("estado", estado_selected);
};
if (localStorage.estado) {
    document.getElementById("estados").options.selectedIndex = window.localStorage.estado;
}

// Questão 2

/* id select: envios
id botao: confirmar_pedido
id pedido: data_pedido
id entrega: data_entrega
*/

function format(tempo) {
    if (tempo < 10) {
        return '0' + tempo.toString();
    } else {
        return tempo.toString();
    }
}

document.getElementById("confirmar_pedido").onclick = function () {
    var data_pedido = new Date();
    var data_pedido_ms = data_pedido.getTime();
    var envio_selecionado = document.getElementById("envios").options.selectedIndex;
    var data_entrega;

    switch (envio_selecionado) {
        case 1:
            data_entrega = data_pedido_ms + (18 * 86400000);
            data_entrega = new Date(data_entrega);
            document.getElementById("data_pedido").innerHTML = format(data_pedido.getDate()) + "-" + format(data_pedido.getMonth() + 1) + "-" + format(data_pedido.getFullYear());
            document.getElementById("data_entrega").innerHTML = format(data_entrega.getDate()) + "-" + format(data_entrega.getMonth() + 1) + "-" + format(data_entrega.getFullYear());
            break;
        case 2:
            data_entrega = data_pedido_ms + (12 * 86400000);
            data_entrega = new Date(data_entrega);
            document.getElementById("data_pedido").innerHTML = format(data_pedido.getDate()) + "-" + format(data_pedido.getMonth() + 1) + "-" + format(data_pedido.getFullYear());
            document.getElementById("data_entrega").innerHTML = format(data_entrega.getDate()) + "-" + format(data_entrega.getMonth() + 1) + "-" + format(data_entrega.getFullYear());
            break;
        default:
            alert("Pedido inválido, selecione o tipo de pedido.");
    }
};


// Questão 3

var iniciado = false, hora_inicio, hora_atual, tempo_passado, intervalo, horas, minutos, segundos, milissegundos, resto;

function formatar_tempo_milisegundos(tempo) {
    if (tempo < 10) {
        var tempo_formatado = tempo.toString();
        tempo_formatado = '00' + tempo_formatado;
    } else if (tempo >= 10 && tempo <= 99) {
        var tempo_formatado = tempo.toString();
        tempo_formatado = '0' + tempo_formatado;
    } else {
        var tempo_formatado = tempo.toString();
    }
    return tempo_formatado;
}

document.getElementById("comecar_parar").onclick = function () {
    if (!iniciado) {
        iniciado = true;
        document.getElementById("comecar_parar").innerHTML = "Parar";
        
        // começar o cronômetro

        if (!hora_inicio) {
            hora_inicio = new Date().getTime();
        } else {
            hora_inicio = new Date().getTime() - tempo_passado;
        }

        intervalo = window.setInterval(function () {
            hora_atual = new Date().getTime();
            tempo_passado = hora_atual - hora_inicio;
            
            horas = Math.floor(tempo_passado / 3600000);
            resto = tempo_passado - (horas * 3600000);

            minutos = Math.floor(resto / 60000);
            resto -= (minutos * 60000);

            segundos = Math.floor(resto / 1000);
            resto -= (segundos * 1000);

            milissegundos = resto;

            document.getElementById("cronometro").innerHTML = format(horas) + ':' + format(minutos) + ':' + format(segundos) + ' ' + formatar_tempo_milisegundos(milissegundos);

            // function formatar_tempo(tempo) {
            //     if (tempo < 0) {
            //         tempo *= -1;
            //     }
            //     if (tempo >= 0 && tempo <= 9) {
            //         var tempo_formatado = tempo.toString();
            //         tempo_formatado = '0' + tempo_formatado;
            //     } else {
            //         var tempo_formatado = tempo.toString();
            //     }
            //     return tempo_formatado;
            // }
            
            // function formatar_tempo_milisegundos(tempo) {
            //     if (tempo < 0) {
            //         tempo *= -1;
            //     }
            //     if (tempo >= 0 && tempo <= 9) {
            //         var tempo_formatado = tempo.toString();
            //         tempo_formatado = '00' + tempo_formatado;
            //     } else if (tempo >= 10 && tempo <= 99) {
            //         var tempo_formatado = tempo.toString();
            //         tempo_formatado = '0' + tempo_formatado;
            //     } else {
            //         var tempo_formatado = tempo.toString();
            //     }
            //     return tempo_formatado;
            // }
    
            // document.getElementById("cronometro").innerHTML = formatar_tempo(hora_atual.getHours() - hora_inicio.getHours()) +":"+ formatar_tempo(hora_atual.getMinutes() - hora_inicio.getMinutes()) +":"+ formatar_tempo(hora_atual.getSeconds() - hora_inicio.getSeconds()) + ' ' + formatar_tempo_milisegundos(-hora_atual.getMilliseconds() + hora_inicio.getMilliseconds()); 
        }, 10);
    } else {
        window.clearInterval(intervalo);
        iniciado = false;
        document.getElementById("comecar_parar").innerHTML = "Começar";
    }

};

document.getElementById("zerar").onclick = function () {
    tempo_passado = 0;
    hora_inicio = new Date().getTime();
    document.getElementById("cronometro").innerHTML = "00:00:00 000";
};

// Questão 4

var carros = [

    {
        'placa': 'AAA-0198',
        'categoria': '1',
    },

    {
        'placa': 'HBP-2837',
        'categoria': '2',
    },

    {
        'placa': 'PLQ-0928',
        'categoria': '4',
    },

    {
        'placa': 'KQE-2093',
        'categoria': '5',
    },

    {
        'placa': 'AMR-9087',
        'categoria': '5',
    },

    {
        'placa': 'BQE-8111',
        'categoria': '3',
    },

    {
        'placa': 'GXL-9001',
        'categoria': '2',
    },

    {
        'placa': 'KPM-7740',
        'categoria': '1',
    }

];

var cat_carro;
var arrecadado = 0;
for (var c = 0; c < carros.length; c++) {
    cat_carro = carros[c]["categoria"];
    switch (cat_carro) {
        case "1":
            arrecadado += 11.22;
            break;

        case "2":
            arrecadado += 22.45;
            break;

        case "3":
            arrecadado += 16.88;
            break;

        case "4":
            arrecadado += 33.65;
            break;

        default:
            continue;
    }
}

document.getElementById("faturamento_total").innerHTML = arrecadado.toFixed(2).toString();