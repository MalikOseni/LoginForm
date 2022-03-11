var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function register(){
x.style.left='-400px';
y.style.left='50px';
z.style.left='110px';
};
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
};
var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}
const pryNav = document.querySelector(".primary-nav");
const navToggle =document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click',()=>

{
     const visibility = pryNav.getAttribute("data-visible")
if(visibility === "false"){
    pryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded",true);
}else if(visibility === "true"){
    pryNav.setAttribute("data-visible",false);
    navToggle.setAttribute("aria-expanded",false);
}
});
