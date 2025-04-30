window.onload = function() {
    const elementImg = document.getElementById("IdImage");
    const listImage = ["model1.png", "model2.png", "model3.png", "model4.png", "model5.png"];
    let i = 0;

    function gantiGbr() {
        elementImg.src = listImage[i];
        i = (i + 1) % listImage.length;
    }

    setInterval(gantiGbr, 5000);
};