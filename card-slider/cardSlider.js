     // initiation of the card's position and index
     var cardIndex=4;
     var positionLeft=0;
      
      //accessing div that holds all slides in one
      var cardSlider=document.querySelector("#cardSlider");
      //console.log(cardSlider);
       //get the size of carouselInner's width that contains all slide items
       var carouselInnerWidth=$('.carousel-inner')[0].scrollWidth;
       console.log("carouselInnerWidth: "+carouselInnerWidth);
       //get the size of card item's width in order to calculating the count of item 
       var cardItemwidth=$('.carousel-item').width();
       console.log("cardItemwidth: "+cardItemwidth);
       //carouselInnerWidth is divided by cardItemwidth because of calculating the count of item 
       var countItem=Math.round(carouselInnerWidth/cardItemwidth);
       console.log("countItem:"+countItem);

       screenUpdate();

     function screenUpdate(){ 

        //slide item right to left if next button is clicked.
        $('.carousel-control-next').on("click",function(){
            console.log("next clicks");
             //if screen size is greater than tablet
            if (window.matchMedia("(min-width: 768px)").matches) {}  
            else{     
            }
             //Index is greater than items count.
            if(cardIndex<countItem-1){
             //increase index for next.
            cardIndex++;
             //specify the position where item is replaced. 
            positionLeft+=cardItemwidth+12;
             //replace by animating item to specified position
            $('.carousel-inner').animate({scrollLeft: positionLeft},600);
           }
            
           
       
        
        
       //slide item left to right if prev button is clicked. 
        
    });
    $('.carousel-control-prev').on("click",function(){
        console.log("prev clicks");
        if (window.matchMedia("(min-width: 768px)").matches) {}
        else{

        }
             //Index is smaller than items displayed last index.
        if(cardIndex>4){
            //decrease index for next.
           cardIndex--;
            //specify the position where item is replaced. 
           positionLeft-=cardItemwidth+12;
            //replace by animating item to specified position
           $('.carousel-inner').animate({scrollLeft: positionLeft},600);
       }
        
        
          
    });
   
  
       
   }


   


