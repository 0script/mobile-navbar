const images=document.querySelectorAll('img.content');
const listeEl=document.querySelectorAll('li');
let activeIndex=0;


listeEl.forEach( (element,index) => {
    element.addEventListener('click',()=>{
        listeEl[activeIndex].classList.toggle('active');
        images[activeIndex].classList.toggle('show');
        activeIndex=index;
        listeEl[activeIndex].classList.toggle('active');
        images[activeIndex].classList.toggle('show');
    });
});
