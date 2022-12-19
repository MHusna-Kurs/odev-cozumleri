var index = 0;
var screenWidth = screen.width; //1366

var imageContainers = document.getElementsByClassName("img-container");

for(var i = 0; i < imageContainers.length-1; i++){
    imageContainers[i+1].style.transform = "translateX(1366px)";
}

function kaydir(opr){
    if (opr === "+") {
        if(index < imageContainers.length-1){
            imageContainers[index].style.transform = "translateX(-1366px)";
            imageContainers[index+1].style.transform = "translateX(0px)";
            index++;
        }
    } 
    else {
        if(index > 0){
            imageContainers[index].style.transform = "translateX(1366px)";
            imageContainers[index-1].style.transform = "translateX(0px)";
            index--;
        }
    }
}