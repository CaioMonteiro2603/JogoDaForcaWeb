let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: "BRASIL",
        categoria: "PAISES"
    },
    palavra002 = {
        nomE: "LONDRES",
        categoria: "PAISES"
    },
    palavra003 = {
        nome: "CHINA",
        categoria: "PAISES"
    },
    palavra004 = {
        nome: "IRLANDA",
        categoria: "PAISES"
    },
    palavra005 = {
        nome: "GRECIA",
        categoria: "PAISES"
    },
    palavra006 = {
        nome: "AUSTRALIA",
        categoria: "PAISES"
    },
    palavra007 = {
        nome: "ARGENTINA",
        categoria: "PAISES"
    },
    palavra008 = {
        nome: "ESPANHA",
        categoria: "PAISES"
    },
    palavra009 = {
        nome: "ALEMANHA",
        categoria: "PAISES"
    },
    palavra010 = {
        nome: "BOLIVIA",
        categoria: "PAISES"
    },
]

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);

}
criarPalavraSecreta();

function montarPalavraNatela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML += "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else {
            palavraTela.innerHTML += "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}
montarPalavraNatela();

function verificaLetraEscolhida(letras) {
    document.getElementById("tecla-" + letras).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letras);
        comparaListas(letras);
    }
    montarPalavraNatela();
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#0000FF";
    document.getElementById(tecla).style.color = "#ffffff";
}

function comparaListas(letra) {
    const posicao = palavraSecretaSorteada.indexOf(letra);
    if (posicao < 0) {
        tentativas--;
        carregaImagemDoJogo();
        if (tentativas == 0) {
            abreModal("OPA!", "Não foi dessa vez! A palavra secreta era <br>" + palavraSecretaSorteada + "!");
        }
    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoriaJogador = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoriaJogador = false;
        }
    }

    if (vitoriaJogador == true) {
        abreModal("Parabéns!", "Você ganhou!");
        tentativas = 0;
    }
}

function carregaImagemDoJogo() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitutlo = document.getElementById("exampleModalLabel")
    modalTitutlo.innerText = titulo;
    let modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = mensagem;
    $("#myModal").modal({
        show: true
    });
}

let btnReiniciarJogo = document.querySelector("#btnReiniciar")
btnReiniciarJogo.addEventListener("click", function () {
    location.reload();
})