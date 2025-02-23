// Получаем корзину из localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Обновление счетчика
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    } else {
        console.error("Элемент с id 'cart-count' не найден.");
    }
}

// Отображение корзины
function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Корзина пуста</p>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.name} - <strong>${item.price} din</strong></p>
            <button onclick="removeFromCart(${index})" class="remove-button">
                <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="Delete" style="width: 20px; height: 20px;">
            </button>
        `;
        cartContainer.appendChild(cartItem);
    });
}

// Функция добавления товара в корзину
function addToCart(name, price, image) {
    const confirmation = confirm(`Add ${name} to cart?`);
    if (confirmation) {
        cart.push({ name, price, image });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCart(); // Обновляем корзину
        alert(`${name} Added to cart!`);
    }
}

// Функция удаления товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Перерисовываем корзину после удаления
}

// Отображаем корзину при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount(); // Обновляем счетчик
    renderCart(); // Отображаем корзину
});

// Пересчитываем ширину при изменении размера окна
function adjustOrderPlateWidth() {
    const cartContainer = document.getElementById('cart-container');
    const orderPlate = document.getElementById('order-plate');

    if (cartContainer) {
        const cartWidth = cartContainer.offsetWidth; // Получаем ширину корзины
        orderPlate.style.width = `${cartWidth}px`; // Устанавливаем ширину заголовка
    }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
adjustOrderPlateWidth();
window.addEventListener('resize', adjustOrderPlateWidth);