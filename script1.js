elementImg = document.getElementById("idImage");
listImage = ["menu.jpg", "menu1.jpg","menu2.jpg", "menu3.jpg"];
i = 0;
function gantiGbr(){
    elementImg.src = listImage[i];
    i = (i + 1) % listImage.length;
}
setInterval(gantiGbr,5000)


elemenSection =document.getElementById("home");

listGbrLatar =["url(cafe1.jpg)","url(cafe2.jpg)","url(cafe3.jpg)","url(cafe4.jpg)"];

n =0;



function gantiLatar() {
    elemenSection.style.backgroundImage=listGbrLatar[n];
    n = (n + 1) % listGbrLatar.length;
}
setInterval(gantiLatar,10000)