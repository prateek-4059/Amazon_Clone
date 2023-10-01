let slidebtnleft=document.getElementById("slide-btn-left")
let slidebtnright=document.getElementById("slide-btn-right")
let imgitem=document.querySelectorAll(".image-item")
// console.log(imgitem.length-1)
let startSlider=0
let endSlider=(imgitem.length-1) * 100

slidebtnleft.addEventListener("click",handleLeftBtn)
function handleLeftBtn(){
    // alert("left btn")
    if(startSlider < 0){
        startSlider=startSlider+100;
    }
    imgitem.forEach(element=>{
        element.style.transform= `translateX(${startSlider}%)`;
    })
}

slidebtnright.addEventListener("click",handleRightBtn)

function handleRightBtn(){
    // alert("right btn")
    if(startSlider >= -endSlider+100){
        startSlider=startSlider-100;
    }
    imgitem.forEach(element=>{
        element.style.transform= `translateX(${startSlider}%)`;
    })
}

function renderSlideAuto(){
    if(startSlider >= -endSlider+100){
        handleRightBtn()
    }
    else{
        startSlider=0
    }
}
setInterval(renderSlideAuto,2000);


const leftbtn=document.querySelector(".l-btn");
const rightbtn=document.querySelector(".r-btn");

rightbtn.addEventListener('click',function(event){
    console.log("doone");
    const conent=document.querySelector('.product-slide');
    conent.scrollLeft+=1100;
    event.preventDefault();
})
leftbtn.addEventListener('click',function(event){
    console.log("doone");
    const conent=document.querySelector('.product-slide');
    conent.scrollLeft-=1100;
    event.preventDefault();
})
