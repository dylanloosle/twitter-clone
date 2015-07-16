$(document).ready(function(){
    $('.tweet-compose').on('click', function(){
        $(this).css('height', '5em');
        $('#tweet-controls').css({'display': 'block', 'text-align': 'right'});
    });
    $('#tweet-content').on('blur', function(){
        $('.tweet-compose').css('height', '2.5em');
        $('#tweet-controls').css('display', 'none');
    });
    $('.tweet-compose').on('keydown', function(){
        var characterCount = 140 - $(this).val().length;

        $('#char-count').text(characterCount);
        if(characterCount > 10){
            $('#char-count').css('color', '#999');
        }
        else if(characterCount >= 0){
            $('#char-count').css('color','red');
            $('#tweet-submit').prop('disabled', false);
        }
        else{
            $('#tweet-submit').prop('disabled', true);
            $('#char-count').css('display', 'none');
        }
    });


    $('#tweet-submit').on('click', function(){
        var newTweet = $('.tweet-compose').val();
        $('.tweet:first').clone().prependTo('#stream');
        $('.avatar:eq(1)').attr('src', 'img/alagoon.jpg');
        $('.fullname:first').text('Dylan');
        $('.username:first').text('@dylan');
        $('.tweet-text:first').text(newTweet);
    });


    $('.stats').on('mouseenter', function(){

    })



});