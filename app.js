const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const beaches = document.querySelector('.beaches');
const beach1 = document.querySelector('.beach1');
const beach2 = document.querySelector('.beach2');
const headline = document.querySelector('.headline');
const h4 = document.querySelector('h4');

const tl = new TimelineMax();


tl.fromTo(hero, 1.2, {height:"0%"},
{height:"90%", ease: Power2.EaseInOut})
.fromTo(hero, 1.5, {width:'100%'},
{width:'100%', ease: Power2.EaseInOut})

tl.fromTo(beaches, 0.7, {width:"0%"}, {width:"100%", ease: Power2.EaseInOut})

tl.fromTo(beach1, 1, {height:"0%"}, {height:"50%", ease: Power4.EaseInOut})
tl.fromTo(beach2, 2, {height:"0%"}, {height:"50%", ease: Power4.EaseInOut})

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});