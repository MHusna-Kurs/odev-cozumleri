function updateScreen(){
    const mq = window.matchMedia( "(min-width: 768px)" );

    if (mq.matches) {
        // window width is at least 768px

        var lines = document.getElementsByClassName("line");
        var slider = document.getElementsByClassName("slide-menu")[0];

        lines[0].style.opacity = "1";

        lines[1].style.transform = "rotate(0deg)";

        lines[2].style.marginTop = "5px";
        lines[2].style.transform = "rotate(0deg)";

        slider.style.left = "-45%";
    } 
      
    else {
        // window width is less than 768px

    }
}

function hamburgerOpenClose(){
    var lines = document.getElementsByClassName("line");
    var slider = document.getElementsByClassName("slide-menu")[0];

    if(lines[0].style.opacity == "0"){
        lines[0].style.opacity = "1";

        lines[1].style.transform = "rotate(0deg)";

        lines[2].style.marginTop = "5px";
        lines[2].style.transform = "rotate(0deg)";

        slider.style.left = "-45%";
    }

    else{
        lines[0].style.opacity = "0";

        lines[1].style.marginTop = "5px";
        lines[1].style.transform = "rotate(-45deg)";

        lines[2].style.marginTop = "-5px";
        lines[2].style.transform = "rotate(45deg)";

        slider.style.left = "0px";
    }
}

function collapse(index){

    var slideMenu = document.getElementsByClassName("slide-menu")[0];
    var ul = slideMenu.firstElementChild;
    var listItems = ul.children;
    var a = listItems[index].children[0];
    var subUl = listItems[index].children[1];

    subUl.style.display == "block" ? subUl.style.display = "none" : subUl.style.display = "block";
    subul.style.display == "block" ? a.firstElementChild.style.transform = "rotate(180deg)" : a.firstElementChild.style.transform = "rotate(0deg)" 

    var sublistItems = subUl.children;

    for(sublistItem of sublistItems){
        sublistItem.firstElementChild.style.paddingLeft = "20px";
        sublistItems.firstElementChild.style.backgroundColor = "white";
    }
}