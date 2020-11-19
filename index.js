console.log("jS Script");
let humBurger=document.getElementById('hum-burger');
let nav_bar=document.getElementById('nav-bar');
let flag=false;
humBurger.addEventListener('click',()=>{
    console.log("hum-burger clicked");
    let nav_bar=document.getElementById('nav-bar');
    nav_bar.classList.toggle("hide"); 
    //nav_bar.classList.toggle("nav-bar-trans"); 
})
