const panels=document.querySelectorAll('.panel');
// console.log(panels);
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        RemoveActiveStatus();
        panel.classList.add('active');
    })
})
RemoveActiveStatus=()=>{
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}