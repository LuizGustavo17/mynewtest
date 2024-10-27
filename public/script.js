// Obtém o input e o contêiner onde os itens serão adicionados
const quantityInput = document.getElementById('quantity-input');
const itemsContainer = document.getElementById('items-container');

// Adiciona um evento de entrada no input
quantityInput.addEventListener('input', (event) => {
    const quantity = parseInt(event.target.value) || 0; // Obtém o valor do input ou 0 se não for um número

    // Limpa o contêiner
    itemsContainer.innerHTML = '';

    // Cria as divs com a classe 'item' e o número dentro da tag <h1>
    for (let i = 1; i <= quantity; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const circleDiv = document.createElement('div');
        circleDiv.className = 'circle';

        const numberH1 = document.createElement('h1');
        numberH1.id = 'number'; // ID do h1, se necessário
        numberH1.textContent = i; // Define o texto do h1 como o número

        // Adiciona o h1 dentro da div 'circle' e a div 'circle' dentro da div 'item'
        circleDiv.appendChild(numberH1);
        itemDiv.appendChild(circleDiv);
        itemsContainer.appendChild(itemDiv);
    }
});
