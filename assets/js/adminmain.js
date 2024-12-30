document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu ul li:not(.logout)'); 
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => {
                i.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});
