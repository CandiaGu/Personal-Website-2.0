$(document).ready(
    function() {
        
        $("#persweb2" ).click(function() {
            
            $('#projdesc').html('\
                <div class="row" ><h3>Personal Website V2</h3></div>\
                <div class="row"><div class="col-1"></div>\
                <div class="col-11" style = "border-left: solid 1px;"><p>This lightweight website we’re currently on, was made from scratch \
                mostly using raw HTML, CSS, and Javascript, sprinkled with some jQuery \
                for the animations and Bootstrap for the ease of formatting. I personally \
                designed and developed this website to practice and learn web development \
                as well as UI/UX design.</p>\
                <p>Some other tools I learned to use through this were Flask, \
                a python microframework, which I used for general templating (i.e. headers and footers) \
                throughout the site as well as testing on my local environment, virtualenv \
                and virtualenvwrapper to keep my workspace accessible and organized, and \
                Google Cloud SDK to test and deploy my website.\
                </p></div>');
        });
        $("#persweb2").click();
        $( "#card2" ).click(function() {
            $('#projdesc').html('<p>More replaced text.</p>');
        });


});

