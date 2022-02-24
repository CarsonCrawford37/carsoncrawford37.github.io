$(function () {
    const hamburgerMenu = $('#hamburger-menu');
    const menuItems = $('ul.nav>li[id!="hamburger-menu"]');
    console.log(menuItems);
    hamburgerMenu.on('click', function () {
        menuItems.toggleClass('hiddenOnMobile');
    });
});