var selectedFace = localStorage.getItem("selectedFace");
var selectedClothes = localStorage.getItem("selectedClothes");
if (!selectedFace) {
    selectedFace = 'image/Dressing.PNG';
}
document.getElementById("faceDiv").style.backgroundImage = "url('" + selectedFace + "')";
document.getElementById("clothesDiv").style.backgroundImage = "url('" + selectedClothes + "')";
console.log('data exist');

function changeFace(button) {
    var faceDiv = document.getElementById("faceDiv");
    var allButtons = document.querySelectorAll("button[id^='faceSelect']");
    
    faceDiv.style.backgroundImage = "url('" + button.dataset.image + "')";
    allButtons.forEach(function (btn) {
        btn.classList.remove("selected-face");
    });
    button.classList.add("selected-face");
}

function applyFace() {
    var selectedFaceButton = document.querySelector(".selected-face");
    var selectedFace = selectedFaceButton.querySelector("img").src;
    if (!selectedFaceButton) {
        console.error("No face selected.");
        return;
    }
    console.log(selectedFace);
    localStorage.setItem("selectedFace", selectedFace);
    window.location.href = "Dressing.html";
}

shop = document.querySelector('.shop');

shop.addEventListener('click', () => {
    window.location.href = '../ChickShop/chickShop.html';
})

// let face_list = [
//     'face_avatar/Face1.PNG',
//     'face_avatar/Face2.PNG',
//     'face_avatar/Face3.PNG',
//     'face_avatar/Face4.PNG',
//     'face_avatar/Face5.PNG',
//     'face_avatar/Face6.PNG',
//     'face_avatar/Face7.PNG',
//     'face_avatar/Face8.PNG',
//     'face_avatar/Face9.PNG']

// let image = document.querySelector('.box-test');
    
// window.onload = function() {
//     var myImage = document.getElementById("myImg");
//     var charScreen = document.getElementById("charScreen");
//     var charCtx = charScreen.getContext("2d");

//     function changeImage(position) {
//         // alert("hello")
//         myImage.src = position;
//         // Make sure the image has loaded before drawing it
//         myImage.onload = function() {
//             charCtx.clearRect(0, 0, charScreen.width, charScreen.height);
//             charCtx.drawImage(myImage, 0, 0, charScreen.width, charScreen.height);
//         };
//     }
//     // If the image is already loaded, draw it immediately
//     if (myImage.complete) {
//         charCtx.clearRect(0, 0, charScreen.width, charScreen.height);
//         charCtx.drawImage(myImage, 0, 0, charScreen.width, charScreen.height);
//     }
//     face1 = document.getElementById('face1');
//     face1.addEventListener('click', () => {
//         changeImage(face_list[0]);
//         image.style.background = `red`;
//     });
//     face2 = document.getElementById('face2');
//     face2.addEventListener('click', () => {
//         changeImage(face_list[1]);
//     });
//     face3 = document.getElementById('face3');
//     face3.addEventListener('click', () => {
//         changeImage(face_list[2]);
//     });
//     face4 = document.getElementById('face4');
//     face4.addEventListener('click', () => {
//         changeImage(face_list[3]);
//     });
//     face5 = document.getElementById('face5');
//     face5.addEventListener('click', () => {
//         changeImage(face_list[4]);
//     });
//     face6 = document.getElementById('face6');
//     face6.addEventListener('click', () => {
//         changeImage(face_list[5]);
//     });
//     face7 = document.getElementById('face7');
//     face7.addEventListener('click', () => {
//         changeImage(face_list[6]);
//     });
//     face8 = document.getElementById('face8');
//     face8.addEventListener('click', () => {
//         changeImage(face_list[0]);
//     });
//     face9 = document.getElementById('face9');
//     face9.addEventListener('click', () => {
//         changeImage(face_list[1]);

//     });
// };



