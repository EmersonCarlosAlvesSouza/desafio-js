function verificaLetraA(texto) {
    // Converte a string para minúsculas para facilitar a verificação
    const textoMinusculo = texto.toLowerCase();
    
    // Usa uma expressão regular para encontrar todas as ocorrências da letra 'a'
    const ocorrencias = textoMinusculo.match(/a/g);

    // Verifica se a letra 'a' está presente e conta as ocorrências
    const quantidade = ocorrencias ? ocorrencias.length : 0;

    // Informa os resultados
    if (quantidade > 0) {
        console.log(`A letra 'a' aparece ${quantidade} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não está presente na string.");
    }
}

// Exemplo de uso
const stringInformada = "Aprendendo a programar em JavaScript!"; // Você pode mudar este valor para testar outras strings
verificaLetraA(stringInformada);
