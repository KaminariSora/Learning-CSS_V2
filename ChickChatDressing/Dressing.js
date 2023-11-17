window.onload = () => {
    var avatar = document.getElementById('avatar');
    var charScreen = document.getElementById('charScreen');
    var charCtx = charScreen.getContext("2d");

    charCtx.clearRect(0, 0, charScreen.width, charScreen.height);
    charCtx.drawImage(avatar, 0, 0, charScreen.width, charScreen.height);
}