function fibonacci(n) {
    // Inicia a sequência de Fibonacci
    let fib = [0, 1];

    // Gera a sequência até o número informado
    while (true) {
        let next = fib[fib.length - 1] + fib[fib.length - 2]; // Próximo número na sequência
        if (next > n) break; // Para quando o próximo número ultrapassa n
        fib.push(next);
    }

    return fib; // Retorna a sequência gerada
}

function verificaFibonacci(num) {
    // Gera a sequência de Fibonacci
    const fibSequence = fibonacci(num);
    console.log(`Sequência de Fibonacci até ${num}: ${fibSequence.join(', ')}`);

    // Verifica se o número informado pertence à sequência
    if (fibSequence.includes(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
    }
}

// Exemplo de uso
const numeroInformado = 21; // Você pode mudar este valor para testar outros números
verificaFibonacci(numeroInformado);
