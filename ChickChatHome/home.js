window.onload = () => {
    var avatar = document.getElementById('myImg');
    var charScreen = document.getElementById("charScreen");
    var charCtx = charScreen.getContext("2d");

    charCtx.clearRect(0, 0, charScreen.width, charScreen.height);
    charCtx.drawImage(avatar, 0, 0, charScreen.width, charScreen.height);
}