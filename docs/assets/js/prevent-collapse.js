document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.md-nav__item'); // Seleccionar todos los elementos del menú

    // Cuando se hace clic en una unidad, expandir solo esa unidad
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Si la unidad está colapsada, expandirla
            if (item.classList.contains('md-nav__item--active')) {
                item.classList.remove('md-nav__item--active');
            } else {
                item.classList.add('md-nav__item--active');
            }
        });
    });
});

