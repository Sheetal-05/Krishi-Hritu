const navbar = document.querySelector('.header .nav-bar');
const menubutton = document.querySelector('.header .menu');

menubutton.addEventListener('click',()=>{
    navbar.classList.toggle('show');
    menubutton.classList.toggle('rotate')
});


document.onscroll =()=>{
    navbar.classList.remove('show');
    menubutton.classList.remove('rotate');
    if(window.scrollY >0){
        document.querySelector('.header').classList.add('active');
    }
        else{
            document.querySelector('.header').classList.remove('active');
        }
    };

document.onload=()=>{
   
    if(window.scrollY >0){
        document.querySelector('.header').classList.add('active');
    }
        else{
            document.querySelector('.header').classList.remove('active');
        }
}