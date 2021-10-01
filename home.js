const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");


const textArray = ["branding", "web design", "media", "advertising"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout (type, typingDelay);    
    }
    
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }

  

    function erase(){
        if(charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(-1,charIndex -1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray-length) textArrayIndex=1;
            if(textArray.length)setTimeout(type, typingDelay);
        }
        
    }

}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay - 1100);
});

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


const pointer = document.querySelector('.pointer');

document.addEventListener('mousemove', e =>{
    pointer.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+e.pageX+"px;")
})
document.addEventListener('click', () => {
    cursorSpan.classList.add("expand");

    setTimeout(() => {
        cursorSpan.classList.remove("expand");
    }, 500)
})

