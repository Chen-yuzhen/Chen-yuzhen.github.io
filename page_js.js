if ($(window).width() < 768) {
    $(document).ready(function() {
        $('.menu_btn').click(function() {
            $("#side-nav").animate({ width: 'toggle' });
        });

        $('#side-nav a').click(function() {
            $("#side-nav").hide();
        });
    });
} else {}