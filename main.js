$(document).ready(function() {

/* Name Section */

    $('#nameText').on('click', function(){
        $('#nameInput').removeClass('hidden'); //input field is displayed
        $('#nameText').addClass('hidden'); //original text is 'hidden"
        $('#nameInput').trigger('focus'); //brings the blue focus border when input field is displayed
        $('#nameInput').val($('#nameText').text()); // keeps original name text in input field for user to change

        // user can now type new text.
    });

    $('#nameInput').on('blur', function(){
        $('#nameInput').addClass('hidden'); //input field is hidden
        $('#nameText').removeClass('hidden'); // Original Browser text style comes back
        $('#nameText').text($('#nameInput').val()); //changes the text value to new text from user
    });

/* About Section */ // Same flow as Name Section

    $('#aboutText').on('click', function(){
        $('#aboutInput').removeClass('hidden');
        $('#aboutText').addClass('hidden');
        $('#aboutInput').trigger('focus');
        $('#aboutInput').val($('#aboutText').text());
    });

    $('#aboutInput').on('blur', function(){
        $('#aboutInput').addClass('hidden');
        $('#aboutText').removeClass('hidden');
        $('#aboutText').text($('#aboutInput').val());
    });

});


/* -=-=-=-= My First Try =-=-=-=-=-=*/
// This works overall, but has some weird styling issues.

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
