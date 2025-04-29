elementImg = document.getElementById("IdImage");
listImage = ["bg.jpg", "background.jpg", "b3.jpg", "bg4.jpg"];
i = 0;
function gantiGbr(){
elementImg.src = listImage[i];
i = (i + 1) % listImage.length;
}
setInterval(gantiGbr,5000)