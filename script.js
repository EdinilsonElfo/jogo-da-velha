function condicaoVitoria(tabela){
    // Condição horizontal
    for (let i=0; i<3; i++) {
        if (tabela[i][0].innerHTML == tabela[i][1].innerHTML && tabela[i][0].innerHTML == tabela[i][2].innerHTML && tabela[i][0].innerHTML != 'vazio') {
            let vencedor = tabela[i][0];
            return `horizontal, jogador ${vencedor}`;
        }
    }
    // Condição vertical
    for (let j=0; j<3; j++) {
        if (tabela[0][j].innerHTML == tabela[1][j].innerHTML && tabela[0][j].innerHTML == tabela[2][j].innerHTML && tabela[0][j].innerHTML != 'vazio') {
            let vencedor = tabela[0][j];
            return `vertical, jogador ${vencedor}`;
        }
    }
    // Condição diagonal principal
    if (tabela[0][0].innerHTML == tabela[1][1].innerHTML && tabela[0][0].innerHTML == tabela[2][2].innerHTML && tabela[1][1].innerHTML != 'vazio') {
        let vencedor = tabela[1][1];
        return `diagonal principal, jogador ${vencedor}`;
    }
    // Condição diagonal secundária
    if (tabela[0][2].innerHTML == tabela[1][1].innerHTML && tabela[0][2].innerHTML == tabela[2][0].innerHTML && tabela[1][1].innerHTML != 'vazio') {
        let vencedor = tabela[1][1];
        return `diagonal secundária, jogador ${vencedor}`;
    }
}

function aleatorio() {
    return Math.floor(Math.random() * 3);
}

function jogada(celulaHTML, jogador) {
    if (celulaHTML == 'vazio') {
        console.log('Jogador 1 jogou')
        return jogador;
    }
    else {
        return celulaHTML;
    }
}

function suffleArray(array) {
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            const iRandom = aleatorio();
            const jRandom = aleatorio();
            [array[i][j], array[iRandom][jRandom]] = [array[iRandom][jRandom], array[i][j]]
        }
    }
}

function jogadaPc(tabela) {
    for (let i=aleatorio(), j=aleatorio(); true; i=aleatorio(), j=aleatorio()) {
        if(tabela[i][j].innerHTML == 'vazio') {
            return [i, j];
        }
    }
}