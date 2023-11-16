$(document).ready(function () {





   

    //navlink
    $("a.nav-link").on("click", function() {
        $("a.nav-link").removeClass("active");
            $(this).addClass("active");
    });
});