$(document).ready(function(){

/* Name Section */

    $('#nameText').on('click', function(){
        $('#nameText').addClass('hidden');
        $('#nameInput').removeClass('hidden');
        $('#nameInput').trigger('focus');
        $('#nameInput').val($('#nameText').text());
    });

    $('#nameInput').on('blur', function(){
        $('#nameText').removeClass('hidden');
        $('#nameInput').addClass('hidden');
        $('#nameText').text($('#nameInput').val());
    });

/* About Section */

    $('#aboutTxt').on('click', function(){
        $('#aboutTxt').addClass('hidden');
        $('#aboutMeText').removeClass('hidden');
        $('#aboutMeText').trigger('focus');
        $('#aboutMeText').val($('#aboutTxt').text());
    });

    $('#aboutMeText').on('blur', function(){
        $('#aboutTxt').removeClass('hidden');
        $('#aboutMeText').addClass('hidden');
        $('#aboutTxt').text($('#aboutMeText').val());
    });

});

/* -=-=-=-= My First Try =-=-=-=-=-=*/
// This works but has some weird styling issues.

// $("body").on("click", ".editText", (function(){
//     var $txtEd = $(this);
//
//     var $input = $('<input/>').val($txtEd.text());
//     $txtEd.replaceWith($input);
//
//     var save = function () {
//         var $p = $('<p .editText />').text($input.val());
//         $input.replaceWith($p);
//     };
//     $input.one('blur', save).focus();
// }));
