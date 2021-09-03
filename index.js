const carouslslide = document.querySelector(".imagecontainer");
const images= document.querySelectorAll(".imagecontainer img");
debugger;
const slide = Array.from( document.querySelectorAll(".slides"));
const selectedradio = Array.from(document.querySelectorAll("input"));
const prevbtn = document.querySelector("#prevbtn");
const nxtbtn =document.querySelector("#nextbtn");
const radiobtn1 = document.querySelector("#r1");
const radiobtn2 = document.querySelector("#r2");
const radiobtn3 = document.querySelector("#r3");
const radiobtn4 = document.querySelector("#r4");
const radiobtn5 = document.querySelector("#r5");
let counter =1;
let size = images[0].clientWidth;
debugger;

     carouslslide.style.transform = 'translateX(' +(-1560*counter)   + 'px)';


// carouslslide.style.transform = 'translateX(' +(-size *counter)   + 'px)';

nxtbtn.addEventListener('click',()=>{
    debugger;
     if(counter>=images-length-1){return;}
     else{
    carouslslide.style.transition= "transform 0.4s ease-in-out";
    counter++;
     size = images[counter].clientWidth;
   
    carouslslide.style.transform = 'translateX(' +(-size *counter)   + 'px)';
    selectedradio[counter-1].checked=true;
     }
});
prevbtn.addEventListener('click',()=>{
  debugger;
    if (counter <=0)
    {return;}
    else{
    carouslslide.style.transition= "transform 0.4s ease-in-out";
    counter--;
     size = images[counter].clientWidth;
     if (counter ===0){
        carouslslide.style.transform = 'translateX(' +(size )   + 'px)'; 
        selectedradio[counter-1].checked=true; 
     }
     else{
    carouslslide.style.transform = 'translateX(' +(-size *counter)   + 'px)';}
    selectedradio[counter-1].checked=true;
    }

});
carouslslide.addEventListener('transitionend',()=>{
    debugger;
if(images[counter].id ==="lastclone"){
    debugger;
    carouslslide.style.transition= "none";
    counter = images.length-2;
    size = images[counter].clientWidth;
    carouslslide.style.transform = 'translateX(' +(-size *counter)   + 'px)';
    selectedradio[counter-1].checked=true;
}

if(images[counter].id ==="firstclone"){
    debugger;
    carouslslide.style.transition= "none";
   
    counter = 1;
    size = images[counter].clientWidth;
    carouslslide.style.transform = 'translateX(' +(-size *counter)   + 'px)';
    selectedradio[counter-1].checked=true;
}
})

radiobtn1.addEventListener('click',()=>{
    carouslslide.style.transform = 'translateX(' +(-size *1)   + 'px)';

    
})
radiobtn2.addEventListener('click',()=>{
    carouslslide.style.transform = 'translateX(' +(-size *2)   + 'px)';

    
})
radiobtn3.addEventListener('click',()=>{
    carouslslide.style.transform = 'translateX(' +(-size *3)   + 'px)';

    
})
radiobtn4.addEventListener('click',()=>{
    carouslslide.style.transform = 'translateX(' +(-size *4)   + 'px)';

    
})
radiobtn5.addEventListener('click',()=>{
    carouslslide.style.transform = 'translateX(' +(-size *5)   + 'px)';

    
})