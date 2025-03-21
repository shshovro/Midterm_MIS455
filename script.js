let total = 0;

function addToBookedItems(button) {
    var card = button.closest('.card');
    var name = card.querySelector('.card-title').innerText;
    var price = parseInt(card.querySelector('p').innerText.replace('TK:', '').trim());
    var imageUrl = card.querySelector('img').src;
    var bookedItemsContainer = document.getElementById("bookedItemsContainer");
    var totalPriceElement = document.getElementById("totalPrice");

    var existingItem = bookedItemsContainer.querySelector(`div[data-name="${name}"]`);
    
    if (existingItem) {
        var quantityElement = existingItem.querySelector(".quantity");
        quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
    } else {
        existingItem = document.createElement("div");
        existingItem.setAttribute("data-name", name);
        existingItem.innerHTML = `
            <img src="${imageUrl}" width="50" height="50" style="margin-right:10px;">
            <strong>${name}</strong> TK ${price} x <span class="quantity">1</span>
           </button>
        `;
        bookedItemsContainer.appendChild(existingItem);
    }

    total += price;
    totalPriceElement.innerText = `Total: TK ${total}`;
}

