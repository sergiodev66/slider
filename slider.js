const slider= document.querySelector("#slider");
let sliderSection= document.querySelectorAll(".slider_section");
let sliderSectionLast= sliderSection[sliderSection.length-1];
const btnIzquierda = document.querySelector("#btn_izquierda");
const btnDerecha = document.querySelector("#btn_derecha");
slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function moverDerecha(){
    let sliderSectionFirst =document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft="-100%";
    },500);
}

function moverIzquierda(){
    let sliderSection= document.querySelectorAll(".slider_section");
    let sliderSectionLast= sliderSection[sliderSection.length-1];
    slider.style.marginLeft="0";
    slider.style.transition="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft="-100%";
    },500);
}

btnDerecha.addEventListener('click',function(){
    moverDerecha();
});

btnIzquierda.addEventListener('click',function(){
    moverIzquierda();
});

setInterval(function(){
    moverDerecha();
}, 5000);