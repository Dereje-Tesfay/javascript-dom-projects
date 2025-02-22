let imgs=document.querySelector("img");
 
imgs.addEventListener("mousemove",()=>{
    imgs.style.transform="scale(1.052)"
    imgs.style.width="80%"
    


})
        imgs.addEventListener("mouseleave",()=>{
    imgs.style.transform=""
    imgs.style.width=""
        })