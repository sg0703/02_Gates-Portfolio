// Script to run page content for project page

$('#about').on('click',function() {
    $('#content').html('');
    $('.navbar').children().attr('style','color: white'); // reset other links
    $('#about').attr('style','color: gray'); // make clicked link gray   
});