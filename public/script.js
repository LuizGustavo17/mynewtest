
const quantityInput = document.getElementById('quantity-input');
const itemsContainer = document.getElementById('items-container');


quantityInput.addEventListener('input', (event) => {
    const quantity = parseInt(event.target.value) || 0; 

    
    itemsContainer.innerHTML = '';

    
    for (let i = 1; i <= quantity; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const circleDiv = document.createElement('div');
        circleDiv.className = 'circle';

        const numberH1 = document.createElement('h1');
        numberH1.id = 'number'; 
        numberH1.textContent = i; 

        
        circleDiv.appendChild(numberH1);
        itemDiv.appendChild(circleDiv);
        itemsContainer.appendChild(itemDiv);
    }
});
