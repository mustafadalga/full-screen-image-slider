var container=document.querySelector('.container');
var arrow_left=container.querySelector('#arrow-left');
var arrow_right=container.querySelector('#arrow-right');
var slide=document.querySelectorAll('.slide');
var slideIndex=0;





function resetActive(){
    slide.forEach(item=>{
        item.classList.remove("active");
    })
}
function changeSlide(){
    resetActive();
    slide[slideIndex].classList.add('active');
}
function nextSlide(){
    slideIndex<slide.length-1 ? slideIndex++ : slideIndex=0;
    changeSlide();
}
function previousSlide(){
    slideIndex>0 ? slideIndex-- : slideIndex=slide.length-1;
    changeSlide();
}

arrow_left.addEventListener('click',()=>{
    previousSlide();
});

arrow_right.addEventListener('click',()=>{
        nextSlide();
});
function durationSlider(){
    setInterval(()=>{
        nextSlide();
    },5000)
}

durationSlider();
