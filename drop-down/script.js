function slideBg(index){
       
    var slider = document.getElementsByClassName("slider")[0];
    var dropdown = document.getElementsByClassName("dropdown-items")[0];
    var ul = dropdown.children[1];
    var listItems = ul.children;
    var clicked = listItems[index].firstElementChild;

    slider.style.top = clicked.offsetTop+"px";
    slider.style.transition = "0.2s";
   
}