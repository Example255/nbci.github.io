let slideIndex = 0;
showSlides();

function changeSlide(n){
slideIndex += n;
showSlides();
}

function showSlides(){
let slides = document.getElementsByClassName("slide");

if(slideIndex >= slides.length){ slideIndex = 0; }
if(slideIndex < 0){ slideIndex = slides.length - 1; }

for(let i=0;i<slides.length;i++){
slides[i].style.display = "none";
}

slides[slideIndex].style.display = "block";
}

setInterval(()=>{ changeSlide(1); },4000);

/* Scroll Animation */
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries,observer){
entries.forEach(entry=>{
if(!entry.isIntersecting) return;
entry.target.classList.add("active");
observer.unobserve(entry.target);
});
},{threshold:0.2});

faders.forEach(fader=>{
appearOnScroll.observe(fader);
});