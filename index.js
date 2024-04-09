const fs = require('fs');

const nomeArquivo = "labirinto100.txt";
let caracteresPorLinha = [];

fs.readFile(nomeArquivo, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    caracteresPorLinha = data.split('\n').map(line => line.split(''));
    
    let linhaAtual = 0;
    let posicaoAtual = 0;
    let numero = "";
    let soma = 0;
    let direcao = 1;

    while (caracteresPorLinha[linhaAtual][posicaoAtual] !== "-") {
        linhaAtual++;
    }

    while (caracteresPorLinha[linhaAtual][posicaoAtual] !== "#") {
        switch (direcao) {
            case 1:
                if ((parseInt(caracteresPorLinha[linhaAtual][posicaoAtual]))) {
                    while ((parseInt(caracteresPorLinha[linhaAtual][posicaoAtual]))) {
                        numero += caracteresPorLinha[linhaAtual][posicaoAtual];
                        posicaoAtual++;
                    }
                    soma += parseInt(numero);
                    numero = "";
                }
                if (caracteresPorLinha[linhaAtual][posicaoAtual] === "\\") {
                    direcao = 4;
                    linhaAtual++;
                } else if (caracteresPorLinha[linhaAtual][posicaoAtual] === "/") {
                    direcao = 3;
                    linhaAtual--;
                } else {
                    posicaoAtual++;
                }
                break;
            case 2:
                if ((parseInt(caracteresPorLinha[linhaAtual][posicaoAtual]))) {
                    while ((parseInt(caracteresPorLinha[linhaAtual][posicaoAtual]))) {
                        numero += caracteresPorLinha[linhaAtual][posicaoAtual];
                        posicaoAtual--;
                    }
                    soma += parseInt(numero);
                    numero = "";
                }
                if (caracteresPorLinha[linhaAtual][posicaoAtual] === "\\") {
                    direcao = 3;
                    linhaAtual--;
                } else if (caracteresPorLinha[linhaAtual][posicaoAtual] === "/") {
                    direcao = 4;
                    linhaAtual++;
                } else {
                    posicaoAtual--;
                }
                break;
            case 3:
                if ((parseInt(caracteresPorLinha[linhaAtual][posicaoAtual]))) {
                    while ((parseInt(caracteresPorLinha[linhaAtual][posicaoAtual]))) {
                        numero += caracteresPorLinha[linhaAtual][posicaoAtual];
                        linhaAtual--;
                    }
                    soma += parseInt(numero);
                    numero = "";
                }
                if (caracteresPorLinha[linhaAtual][posicaoAtual] === "\\") {
                    direcao = 2;
                    posicaoAtual--;
                } else if (caracteresPorLinha[linhaAtual][posicaoAtual] === "/") {
                    direcao = 1;
                    posicaoAtual++;
                } else {
                    linhaAtual--;
                }
                break;
            case 4:
                if ((parseInt(caracteresPorLinha[linhaAtual][posicaoAtual]))) {
                    while ((parseInt(caracteresPorLinha[linhaAtual][posicaoAtual]))) {
                        numero += caracteresPorLinha[linhaAtual][posicaoAtual];
                        linhaAtual++;
                    }
                    soma += parseInt(numero);
                    numero = "";
                }
                if (caracteresPorLinha[linhaAtual][posicaoAtual] === "\\") {
                    direcao = 1;
                    posicaoAtual++;
                } else if (caracteresPorLinha[linhaAtual][posicaoAtual] === "/") {
                    direcao = 2;
                    posicaoAtual--;
                } else {
                    linhaAtual++;
                }
                break;
        }
    }
    console.log("soma total = " + soma);
});
