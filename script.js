img = document.getElementById("img1");
img2 = document.getElementById("img2");
let option = 1
let option2 = 1

function imgBig() {
    img.style.transform = "scale(1.50)";
    img.style.transition = "transform 0.50s ease";
    option = 0;
}

function imgReset() {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.50s ease";
    option = 1;
}
function zoomInOrOut() {

    if (option == 1) {
        return imgBig();
    }
    else {
        return imgReset();
    }
}

function imgBig2() {
    img2.style.transform = "scale(1.50)";
    img2.style.transition = "transform 0.50s ease";
    option2 = 0;
}

function imgReset2() {
    img2.style.transform = "scale(1)";
    img2.style.transition = "transform 0.50s ease";
    option2 = 1;
}
function zoomInOrOut2() {

    if (option2 == 1) {
        return imgBig2();
    }
    else {
        return imgReset2();
    }
}




