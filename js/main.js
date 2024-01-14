// $('.menu-button').on('click', function(){
//     $('.navbar').toggleClass('menu-active');
// });

$(document).ready(function () {
    function closeMenu() {
        $('.navbar').removeClass('menu-active');
        $('.menu-button__icon').show();
        $('.x-icon').hide();
    }

    $('.menu-button__icon, .x-icon').on('click', function (e) {
        e.stopPropagation();
        $('.navbar').toggleClass('menu-active');
        $('.menu-button__icon, .x-icon').toggle();
    });

    // Добавляем обработчик для закрытия меню при касании вне области меню
    $(document).on('click', function (event) {
        if ($('.navbar').hasClass('menu-active') && !$(event.target).closest('.menu-button').length && !$(event.target).closest('.navbar').length) {
            closeMenu();
        }
    });
});





// stepper
$(document).ready(function() {
    $(".minus").on("click", function() {
       $(".quantity__number").val(parseInt($(".quantity__number").val())-1);
    }); 
    $(".plus").on("click", function() {
       $(".quantity__number").val(parseInt($(".quantity__number").val())+1);
    }); 
 }); 



