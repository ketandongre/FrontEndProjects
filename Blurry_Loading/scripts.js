const loadtext=document.querySelector('.loading_text');
const bg=document.querySelector('.bg');

var load=0;
var loader=setInterval(blurring,20);
function blurring(){
    load++;
    console.log(load);
    if(load>99)
    {
        clearInterval(loader);
    }
    var text=document.querySelector(".loading_text");
    text.textContent=`${load}%`;
    let k=30-load*30/100;
    console.log(k);
    let bgr=document.querySelector('.bg');
    text.style.opacity=1-load/100;
    bgr.style.filter=`blur(${k}px)`;
}