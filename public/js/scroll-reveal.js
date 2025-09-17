document.addEventListener('DOMContentLoaded', function() {
    // Remove all the complex scroll handling logic and just make the nav always visible
    const nav = document.getElementById('site-navigation');
    if (nav) {
        nav.classList.remove('hidden');
    }
});