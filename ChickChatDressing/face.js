window.onload = function() {
    var myImage = document.getElementById("myImg");
    var charScreen = document.getElementById("charScreen");
    var charCtx = charScreen.getContext("2d");

    // Make sure the image has loaded before drawing it
    myImage.onload = function() {
        charCtx.clearRect(0, 0, charScreen.width, charScreen.height);
        charCtx.drawImage(myImage, 0, 0, charScreen.width, charScreen.height);
    };

    // If the image is already loaded, draw it immediately
    if (myImage.complete) {
        charCtx.clearRect(0, 0, charScreen.width, charScreen.height);
        charCtx.drawImage(myImage, 0, 0, charScreen.width, charScreen.height);
    }
};


save = document.querySelector('.save');
shop = document.querySelector('.shop');

save.addEventListener('click', () => {
    alert('save');
    window.location.href = 'Dressing.html';
});

shop.addEventListener('click', () => {
    window.location.href = '../ChickShop/chickShop.html';
})
