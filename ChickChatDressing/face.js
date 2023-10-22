save = document.querySelector('.save');
shop = document.querySelector('.shop');

save.addEventListener('click', () => {
    alert('save');
    window.location.href = 'Dressing.html';
});

shop.addEventListener('click', () => {
    window.location.href = '../ChickShop/chickShop.html';
})