const burger = document.querySelector('.burger')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')
const bgSidebar = document.querySelector('.bgsidebar')
const aboutMe = document.querySelector('.about')
const aboutline = document.querySelector('#aboutMe')
const showMore = document.querySelector('.showed')
const showIt = document.querySelector('.showedUp')
const showIt1 = document.querySelector('.showedUp1')
const showIt2 = document.querySelector('.showedUp2')
const showIt3 = document.querySelector('.showedUp3')
const showIt4 = document.querySelector('.showedUp4')
const showIt5 = document.querySelector('.showedUp5')
const showIt6 = document.querySelector('.showedUp6')
const showIt7 = document.querySelector('.showedUp7')
const showIt8 = document.querySelector('.showedUp8')

burger.addEventListener('click', function () {
    bar1.classList.toggle('change')
    bar2.classList.toggle('change')
    bar3.classList.toggle('change')
    bgSidebar.classList.toggle('change')
});

showMore.addEventListener('click', function () {
    showIt.classList.toggle('change')
	showIt1.classList.toggle('change')
	showIt2.classList.toggle('change')
	showIt3.classList.toggle('change')
	showIt4.classList.toggle('change')
	showIt5.classList.toggle('change')
	showIt6.classList.toggle('change')
	showIt7.classList.toggle('change')
	showIt8.classList.toggle('change')
})

window.addEventListener('scroll', reveal);

function reveal(){
	let reveals = document.querySelectorAll('.reveal');

	for(var i = 0; i < reveals.length; i++){
		let windowheight = window.innerHeight;
		let revealtop = reveals[i].getBoundingClientRect().top;
		let revealpoint = 150;

		if(revealtop < windowheight - revealpoint){
			reveals[i].classList.add('active');
		}else{
			reveals[i].classList.remove('active');
		}
	}
}

