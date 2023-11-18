var selectedFace = localStorage.getItem("selectedFace");
var faceDiv = document.getElementById("faceDiv");

if (!selectedFace) {
    selectedFace = 'image/Dressing.PNG';
}
console.log("Information :", selectedFace);
// document.getElementById("faceDiv").style.backgroundImage = "url('" + selectedFace + "')";
faceDiv.style.backgroundImage = "url('" + selectedFace + "')";