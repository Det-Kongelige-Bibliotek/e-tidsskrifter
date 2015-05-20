$(document).ready(function(){
    // category clicked - show tilbage and the subcategory clicked
    $('.umlaut-category').click(function (e) {
        e.preventDefault();
        var $button = $(e.target);
        if ($button.hasClass('btn')) {
            $('.umlaut-category').addClass('hide');
            $('.umlaut-subcategory').addClass('hide');
            var catName = $button.attr('data-target');
            $('#' + catName).removeClass('hide');
            $('.umlaut-categoryName').text($button.text());
            $('.backbutton').removeClass('hide');
            $('#browse_by_title').addClass('hide');
        }
    });

    // Backbutton clicked - hide back button, all subcategories and show categories
    $('.backbutton').click(function (e) {
        $('.umlaut-category').removeClass('hide');
        $('.umlaut-subcategory').addClass('hide');
        $('.umlaut-categoryName').text('Kategorier');
        $('.backbutton').addClass('hide');
        $('#browse_by_title').removeClass('hide');
    });
});