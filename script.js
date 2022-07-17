function areEqual() { // função para verificar se varios argmuentos são iguais
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] !== arguments[i-1]) return false;
    }
    return true;
}

function aleatorio() { // função para retornar um número aleatório entre 0, 1 ou 2
    return Math.floor(Math.random() * 3);
}

function suffleArray(array) { // função para embaralhar toda a matriz
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            const iRandom = aleatorio();
            const jRandom = aleatorio();
            [array[i][j], array[iRandom][jRandom]] = [array[iRandom][jRandom], array[i][j]]; // troca 2 valores na matriz
        }
    }
}

function condicaoVitoria(array, valor) { // verifica se a condição de vitoria foi cumplida e retorna um status para o player
    if ( areEqual(array[0][0], array[1][1], array[2][2], valor) ) return 'vencedor';
    else if ( areEqual(array[0][2], array[1][1], array[2][0], valor) )return 'vencedor';
    else if ( areEqual(array[0][0], array[0][1], array[0][2], valor) ) return 'vencedor';
    else if ( areEqual(array[1][0], array[1][1], array[1][2], valor) ) return 'vencedor';
    else if ( areEqual(array[2][0], array[2][1], array[2][2], valor) ) return 'vencedor';
    else if ( areEqual(array[0][0], array[1][0], array[2][0], valor) ) return 'vencedor';
    else if ( areEqual(array[0][1], array[1][1], array[2][1], valor) ) return 'vencedor';
    else if ( areEqual(array[0][2], array[1][2], array[2][2], valor) ) return 'vencedor';
    else return 'continuar';
}

function alguemVenceu(array, statusJogador1, statusJogador2) { // verifica se alguma jogador venceu, e retorna o resultado
    if ( areEqual(statusJogador1, statusJogador2, 'continuar') ) {
        for (let i=0; i<3; i++) {
            for (let j=0; j<3; j++) {
                if (array[i][j] == 'vazio') return 'partida ainda não terminou';
            }
        }
    }
    else if (statusJogador1 = 'vencedor') return 'jogador 1 venceu';
    else if (statusJogador2 = 'vencedor') return 'jogador 2 venceu';
    else return 'erro';
}

function escolhaIA() { // retorna um vetor descrevendo em qual posição a IA escolheu jogar
    return [aleatorio(), aleatorio()];
}

function espacoLivre(array) { // retorna true se tem posição livre e false se não tem
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            return true;
        }
    }
    return false;
}

function verificarEscolha(array, escolha) { // verifica se a posição a ser jogadad é valida
    if ( array[ escolha[0] ][ escolha[1] ] === 'vazio' ) {
        return true;
    } else {
        return false;
    }
}

function rodada(array, valor, statusJogador, escolha) {
    if ( verificarEscolha(array, escolha) ) {
        array[ escolha[0] ][ escolha[1] ] = valor;
        statusJogador = condicaoVitoria(array, valor);
        if (statusJogador === 'vencedor') {
            console.log(`jogador ${valor} venceu`);
            return 'fim de jogo';
        }
        return 'próxima rodada';
    }
    return 'repetir jogada';
}
