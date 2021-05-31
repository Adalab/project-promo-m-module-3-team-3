'use strict';

//collapsible
const cdesign=document.querySelector('.js-cdesign');
const cfill=document.querySelector(".js-cfill");
const cshare=document.querySelector(".js-cshare");

const contentDesign=document.querySelector(".js-design");
const contentFill=document.querySelector(".js-fill");
const contentShare=document.querySelector(".js-share");

const arrowDesign=document.querySelector(".js-arrowD");
const arrowFill=document.querySelector(".js-arrowF");
const arrowShare=document.querySelector(".js-arrowS");
console.log(arrowShare);

contentFill.classList.add('hidden');
contentShare.classList.add('hidden');
arrowFill.classList.remove('collapsible__icon2');
arrowShare.classList.remove('collapsible__icon2');
arrowFill.classList.add('arrowhidden');
arrowShare.classList.add('arrowhidden');
console.log(arrowShare);



function hiddenDesign(){
contentDesign.classList.add('hidden');
//arrowDesign.classList.add('arrowhidden');

}
function hiddenFill (){
    contentFill.classList.remove('hidden');
    arrowFill.classList.remove('arrowhidden');
    arrowFill.classList.add('collapsible__icon2');

}
function hiddenShare (){
    contentShare.classList.remove('hidden');
    arrowShare.classList.remove('arrowhidden');
    arrowShare.classList.add('collapsible__icon2');
}

function showDesign (){
    hiddenDesign();
    if (contentDesign.classList.contains('js-design')){
        contentFill.classList.add('hidden');
        contentShare.classList.add('hidden');
        contentDesign.classList.remove('hidden');
        arrowFill.classList.add('arrowhidden');
        arrowShare.classList.add('arrowhidden');
        arrowDesign.classList.remove('arrowhidden');

    }
}

function showFill (){
    hiddenFill()
    if (contentFill.classList.contains('js-fill')){
        contentDesign.classList.add('hidden');
        contentShare.classList.add('hidden');
        arrowDesign.classList.add('arrowhidden');
        arrowShare.classList.add('arrowhidden');
    }
}

function showShare (){
    hiddenShare()
    if (contentShare.classList.contains('js-share')){
        contentDesign.classList.add('hidden');
        contentFill.classList.add('hidden');
        arrowDesign.classList.add('arrowhidden');
        arrowFill.classList.add('arrowhidden');
    }
}

cdesign.addEventListener('click', showDesign);
cfill.addEventListener('click', showFill);
cshare.addEventListener('click', showShare);

