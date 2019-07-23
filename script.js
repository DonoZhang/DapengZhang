$('document').ready(function(){
    pageNavigation('home');
});

$('#nav-home').on('click', function(){
    pageNavigation('home');
});

$('#nav-resume').on('click', function(){
    pageNavigation('resume');
});

$('#nav-services').on('click', function(){
    pageNavigation('services');
});

$('#nav-blog').on('click', function(){
    pageNavigation('blog');
});

$('#nav-contact').on('click', function(){
    pageNavigation('contact');
});

function pageNavigation(id){
    $('.page').css('display', 'none');
    $('#' + id).css('display', 'inline-block');
}