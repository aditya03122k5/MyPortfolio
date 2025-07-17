// Responsive navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
var x = document.getElementById('menu-toggle').innerText;

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    if (x === 'menu') {
        document.getElementById('menu-toggle').innerHTML = '<span class="material-symbols-outlined">arrow_drop_down</span>'; 
        x  = 'arrow_drop_down';
    } 
    else {
        document.getElementById('menu-toggle').innerHTML = '<span class="material-symbols-outlined">menu</span>';
        x = 'menu';
    }
});

