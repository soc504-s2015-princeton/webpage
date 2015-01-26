$(function() {
    // Determines in str ends with suffix.
    function endsWith(str, suffix) {
        return str.indexOf(suffix, str.length - suffix.length) !== -1;
    }

    // Highlight the proper navbar link for the current page. Loop through each
    // link checking to see if the current pathname of the URL ends with the
    // link's href. If so, remove existing active class and add active class to
    // the li associated with this link.
    $('.navbar-nav').find('a').each(function(i, link) {
        var $link = $(link);
        if (endsWith(location.pathname, $link.attr('href'))) {
            $('.navbar-nav .active').removeClass('active');
            $link.closest('li').addClass('active');
        }
    });
});
