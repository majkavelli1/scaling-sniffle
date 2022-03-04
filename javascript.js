$(document).ready(function() {
    $("#registration").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },

    });

    $(function() {
        $('#toggleThis').click(function() {
            $('#toggled').slideToggle();
        });
    });
});

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}