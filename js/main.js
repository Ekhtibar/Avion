// $('.menu-button').on('click', function(){
//     $('.navbar').toggleClass('menu-active');
// });
$(document).ready(function () {
    function closeMenu() {
        $('.navbar').removeClass('menu-active');
        $('.menu-button__icon').show();
        $('.x-icon').hide();
    }

    $('.menu-button__icon, .x-icon').on('click', function () {
        $('.navbar').toggleClass('menu-active');
        $('.menu-button__icon, .x-icon').toggle();
    });

    // Добавляем обработчик для закрытия меню при касании вне области меню
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.menu-button').length && !$(event.target).closest('.navbar').length) {
            closeMenu();
        }
    });
});



