const circles=document.querySelectorAll('.circle');
var count=0;
prevbtn=document.getElementById('prev');
nxtbtn=document.getElementById('next');
document.querySelector('#prev').addEventListener('click',()=>{
    if(count>0){
        count--; 
    }
    console.log(count);
    if(count==0){
        prevbtn.disabled=true;
    }
    nxtbtn.disabled=false;
    pgrs=document.querySelector('.progress');
    switch(count){
        case 0:
            pgrs.setAttribute("style","width:0");
            circles[1].classList.remove('active');
            break;
        case 1:
            pgrs.setAttribute("style","width:33%");
            circles[2].classList.remove('active');
            break;
        case 2:
            pgrs.setAttribute("style","width:66%");
            circles[3].classList.remove('active');
            break;
    }
});
document.querySelector('#next').addEventListener('click',()=>{
    if(count<=3){
        count++;
    }
    console.log(count);
        prevbtn.disabled=false;
    if(count==3)
    {
        nxtbtn.disabled=true;
    }
    pgrs=document.querySelector('.progress');
    switch(count){
        case 1:
            pgrs.setAttribute("style","width:33%");
            circles[1].classList.add('active');
            break;
        case 2:
            pgrs.setAttribute("style","width:66%");
            circles[2].classList.add('active');
            break;
        case 3:
            pgrs.setAttribute("style","width:100%");
            circles[3].classList.add('active');
            break;
    }
});