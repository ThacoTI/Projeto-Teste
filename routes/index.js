function gerarNumeros() {
  const qtd = parseInt(document.getElementById("qtd").value);

  if (isNaN(qtd) || qtd <= 0 || qtd >= 100) {
    alert("Insira uma quantidade válida (maior que 0 ou menor que 100)");
    return;
  }
 

  const numeros = [];
  for (let i = 0; i < qtd; i++) {
    const n = Math.floor(Math.random() * 101); 
    numeros.push(n);
  }

  const maior = Math.max(...numeros);
  const menor = Math.min(...numeros);
  const pares = numeros.filter(n => n % 2 === 0);
  const impares = numeros.filter(n => n % 2 !== 0);
  const media = (numeros.reduce((a, b) => a + b, 0) / qtd).toFixed(2);

  const resultado = `
        Números gerados: ${numeros.join(', ')}<br>
        Maior: ${maior}<br>
        Menor: ${menor}<br>
        Média: ${media}<br>
        Pares (${pares.length}): ${pares.join(', ')}<br>
        Ímpares (${impares.length}): ${impares.join(', ')}
      `;

  document.getElementById("resultadoTexto").innerHTML = resultado;
  document.getElementById("meuModal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("meuModal").style.display = "none";
  document.getElementById("qtd").value = "";
  document.getElementById("resultadoTexto").innerHTML = "";
  numeros = [];
}