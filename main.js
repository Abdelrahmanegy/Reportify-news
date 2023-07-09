
document.addEventListener("DOMContentLoaded",function(){
    let scrollToTopBtn = document.querySelector(".scroll-to-top");
    let footer = document.querySelector("footer");

    window.addEventListener('scroll',function(){
        if(window.scrollY > footer.offsetTop - window.innerHeight){
            scrollToTopBtn.style.display = 'block';
            
        }else{
            scrollToTopBtn.style.display = 'none';
        }
    })
    scrollToTopBtn.addEventListener('click',function(){
        window.scrollTo({top:0, behavior:'smooth'});
    })
})