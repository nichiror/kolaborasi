elementImg = document.getElementById("Idimage");
listImage = ["store.jpg", "store1.jpg", "store2.jpg"];
i = 0;
function gantiGbr(){
elementImg.src = listImage[i];
i = (i + 1) % listImage.length;
}
setInterval(gantiGbr,5000)