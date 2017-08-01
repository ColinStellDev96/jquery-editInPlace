$(document).ready(function(){
    $("body").on("click", ".editText", (function(){
        var $txtEd = $(this);

        var $input =$('<input/>').val($txtEd.text());
        $txtEd.replaceWith($input);

        var save = function () {
            var $p = $('<p .editText />').text($input.val());
            $input.replaceWith($p);
        };
        $input.one('blur', save).focus();
    }));
});
